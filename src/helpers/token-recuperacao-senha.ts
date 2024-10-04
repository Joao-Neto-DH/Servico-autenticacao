import {
  createCipheriv,
  createDecipheriv,
  randomFill,
  scrypt,
} from "node:crypto";
import { envConfig } from "../config/env-config";

export async function gerarTokenRecuperacaoSenha(usuarioContacto: string) {
  const algorithm = "aes-192-cbc";
  const password = envConfig().TOKEN_RECUPERACAO_PASSWORD;

  const encrypted: string = await new Promise((resolve, reject) => {
    // First, we'll generate the key. The key length is dependent on the algorithm.
    // In this case for aes192, it is 24 bytes (192 bits).
    scrypt(password, "salt", 24, (err, key) => {
      if (err) throw err;
      // Then, we'll generate a random initialization vector
      randomFill(new Uint8Array(16), (err, iv) => {
        if (err) throw err;

        let encrypted = "";
        // Once we have the key and iv, we can create and use the cipher...
        const cipher = createCipheriv(algorithm, key, iv);

        cipher.setEncoding("hex");

        cipher.on("data", (chunk) => (encrypted += chunk));
        cipher.on("end", () => resolve(encrypted));
        cipher.on("error", reject);

        cipher.write(usuarioContacto);
        cipher.end();
      });
    });
  });

  return encrypted;
}

export function calcularValidadeDoToken() {
  return new Date();
}

export function checkIsTokenValido(dataExpiracao: Date) {
  return true;
}

export function extrairContactoDoToken(token: string) {
  return token;
}

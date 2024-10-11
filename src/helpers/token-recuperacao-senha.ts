import {
  createCipheriv,
  createDecipheriv,
  randomBytes,
  scryptSync,
} from "node:crypto";
import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import { envConfig } from "../config/env-config";

export function gerarTokenRecuperacaoSenha(usuarioContacto: string) {
  const algorithm = "aes-192-cbc";
  const password = envConfig().TOKEN_RECUPERACAO_PASSWORD!;

  // const encrypted: string = await new Promise((resolve, reject) => {
  //   // First, we'll generate the key. The key length is dependent on the algorithm.
  //   // In this case for aes192, it is 24 bytes (192 bits).
  //   scrypt(password, "salt", 24, (err, key) => {
  //     if (err) throw err;
  //     // Then, we'll generate a random initialization vector
  //     randomFill(new Uint8Array(16), (err, iv) => {
  //       if (err) throw err;

  //       let encrypted = "";
  //       // Once we have the key and iv, we can create and use the cipher...
  //       const cipher = createCipheriv(algorithm, key, iv);

  //       cipher.setEncoding("hex");

  //       cipher.on("data", (chunk) => (encrypted += chunk));
  //       cipher.on("end", () => resolve(encrypted));
  //       cipher.on("error", reject);

  //       cipher.write(usuarioContacto);
  //       cipher.end();
  //     });
  //   });
  // });

  // return encrypted;
  const salt = envConfig().TOKEN_RECUPERACAO_SALT!;
  // const passphrase = "password";

  const key = scryptSync(password, salt, 24);
  const iv = randomBytes(16);

  const cipher = createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(usuarioContacto, "utf8", "hex");

  encrypted += cipher.final("hex");

  const part1 = encrypted.slice(0, 17);
  const part2 = encrypted.slice(17);

  return `${part1}${iv.toString("hex")}${part2}`;
}

export function calcularValidadeDoToken() {
  const currentDate = dayjs();
  const currentDatePlusOneHour = currentDate.add(1, "hour");
  return currentDatePlusOneHour.toDate();
}

export function checkIsTokenValido(dataExpiracao: Date) {
  const expirationDate = dayjs(dataExpiracao);
  dayjs.extend(isSameOrBefore);

  const isNotExpiredToken = dayjs().isBefore(expirationDate);
  return isNotExpiredToken;
}

export function extrairContactoDoToken(token: string) {
  const algorithm = "aes-192-cbc";
  const password = envConfig().TOKEN_RECUPERACAO_PASSWORD!;
  const salt = envConfig().TOKEN_RECUPERACAO_SALT!;

  const key = scryptSync(password, salt, 24);
  const ivPosition = {
    start: 17,
    end: 17 + 32,
  };

  const iv = Buffer.from(token.slice(ivPosition.start, ivPosition.end), "hex");
  const part1 = token.slice(0, ivPosition.start);
  const part2 = token.slice(ivPosition.end);

  const encryptedText = `${part1}${part2}`;

  const decipher = createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encryptedText, "hex", "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
}

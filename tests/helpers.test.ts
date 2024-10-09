import { describe, expect, test, beforeAll, afterAll } from "@jest/globals";
import { encriptarSenha } from "../src/helpers/encriptar-senha";
import { checkPassword } from "../src/helpers/check-password";
import {
  extrairContactoDoToken,
  gerarTokenRecuperacaoSenha,
} from "../src/helpers/token-recuperacao-senha";
import { config } from "dotenv";

describe("Funções de helpers", () => {
  test("encriptar senha", () => {
    const senha = "12345678";
    const encryptedSenha = encriptarSenha(senha);

    expect(encryptedSenha).not.toEqual(senha);
  });

  test("hash válido", () => {
    const senha = "12345678";
    const encryptedSenha = encriptarSenha(senha);

    const passwordMatch = checkPassword(encryptedSenha, senha);

    expect(passwordMatch).toBeTruthy();
  });
});

describe("Funções de helpers de recuperação de senha", () => {
  const email = "joao@email.com";
  let token = "";

  beforeAll(() => {
    config();

    token = gerarTokenRecuperacaoSenha(email);
  });

  afterAll(() => {
    console.log("TOKEN:", token);
  });

  test("Gerar token", async () => {
    expect(token).not.toEqual(email);
  });

  test("Contacto do token", async () => {
    const decrypted = extrairContactoDoToken(token);
    expect(decrypted).toEqual(email);
  });

  // test("hash válido", () => {
  //   const senha = "12345678";
  //   const encryptedSenha = encriptarSenha(senha);

  //   const passwordMatch = checkPassword(encryptedSenha, senha);

  //   expect(passwordMatch).toBeTruthy();
  // });
});

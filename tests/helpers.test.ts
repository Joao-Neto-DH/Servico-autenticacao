import { describe, expect, test, beforeAll, afterAll } from "@jest/globals";
import { encriptarSenha } from "../src/helpers/encriptar-senha";
import { checkPassword } from "../src/helpers/check-password";
import {
  calcularValidadeDoToken,
  checkIsTokenValido,
  extrairContactoDoToken,
  gerarTokenRecuperacaoSenha,
} from "../src/helpers/token-recuperacao-senha";
import { config } from "dotenv";
import dayjs from "dayjs";

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

  test("Gerar token", () => {
    expect(token).not.toEqual(email);
  });

  test("Contacto do token", async () => {
    const decrypted = extrairContactoDoToken(token);
    expect(decrypted).toEqual(email);
  });

  test("Tempo de validade do token em uma hora", () => {
    const currentDate = new Date();
    const calculatedDate = calcularValidadeDoToken();

    const diff = Math.abs(currentDate.getHours() - calculatedDate.getHours());

    expect(diff).toEqual(1);
  });

  test("Validade do token válido", async () => {
    const tokenValidate = calcularValidadeDoToken();
    const isNotExpired = checkIsTokenValido(tokenValidate);

    expect(isNotExpired).toBeTruthy();
  });

  test("Validade do token expirado", async () => {
    const tokenValidate = dayjs().subtract(2, "hour").toDate();
    const isExpired = checkIsTokenValido(tokenValidate);

    expect(isExpired).toBeFalsy();
  });
});

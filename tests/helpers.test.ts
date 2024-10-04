import { describe, expect, test } from "@jest/globals";
import { encriptarSenha } from "../src/helpers/encriptar-senha";
import { checkPassword } from "../src/helpers/check-password";

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

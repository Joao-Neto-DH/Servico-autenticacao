import { describe, expect, test } from "@jest/globals";
import { encriptarSenha } from "../src/helpers/encriptar-senha";

describe("Funções de helpers", () => {
  test("encriptar senha", () => {
    const senha = "12345678";
    const encryptedSenha = encriptarSenha(senha);

    expect(encryptedSenha).not.toEqual(senha);
  });
});

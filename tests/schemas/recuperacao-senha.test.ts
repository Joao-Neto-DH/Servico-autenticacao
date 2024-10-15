import { describe, expect, test } from "@jest/globals";
import {
  recuperarSenhaSchema,
  recuperarSenhaSchemaContacto,
} from "../../src/schemas/recuperacao-senha.schema";

describe("recuperação de senha (pedido)", () => {
  test("contacto válido", () => {
    const rawUser = "joaolima8820218@gmail.com";

    const user = recuperarSenhaSchemaContacto.parse(rawUser);

    expect(user).not.toBeUndefined();
  });

  test("contacto inválido", () => {
    const rawUser = "joaolima8820218gmail.com";

    const userCheck = () => recuperarSenhaSchemaContacto.parse(rawUser);

    expect(userCheck).toThrow();
  });

  test("contacto vazio", () => {
    const rawUser = undefined;

    const userCheck = () => recuperarSenhaSchemaContacto.parse(rawUser);

    expect(userCheck).toThrow();
  });
});

describe("recuperação de senha (alterar senha)", () => {
  test("dados válido", () => {
    const rawUser = {
      token: "acvkbliemxowidmcw",
      senha: "Familia2024@",
    };

    const user = recuperarSenhaSchema.parse(rawUser);

    expect(user).toHaveProperty("token");
  });

  test("token vazio", () => {
    const rawUser = {
      senha: "Familia2024@",
    };

    const userCheck = () => recuperarSenhaSchemaContacto.parse(rawUser);

    expect(userCheck).toThrow();
  });

  test("senha vazia", () => {
    const rawUser = {
      token: "acvkbliemxowidmcw",
    };

    const userCheck = () => recuperarSenhaSchemaContacto.parse(rawUser);

    expect(userCheck).toThrow();
  });

  test("dados vazios", () => {
    const rawUser = {};

    const userCheck = () => recuperarSenhaSchemaContacto.parse(rawUser);

    expect(userCheck).toThrow();
  });
});

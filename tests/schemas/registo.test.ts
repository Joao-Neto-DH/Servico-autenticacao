import { describe, expect, test } from "@jest/globals";
import { usuarioRegistoSchema } from "../../src/schemas/registo-usuario.schema";

describe("recuperação de senha (pedido)", () => {
  test("contacto válido", () => {
    const rawUser = {
      contacto: "joaolima8820218@gmail.com",
      senha: "Familia@234",
      genero: "M",
      nome: "Joao neto",
    };

    const user = usuarioRegistoSchema.parse(rawUser);

    expect(user).toHaveProperty("contacto");
  });

  test("contacto inválido", () => {
    const rawUser = {
      senha: "Familia@234",
      genero: "M",
      nome: "Joao neto",
    };

    const userCheck = () => usuarioRegistoSchema.parse(rawUser);

    expect(userCheck).toThrow();
  });

  test("senha inválida", () => {
    const rawUser = {
      contacto: "joaolima8820218@gmail.com",
      genero: "M",
      nome: "Joao neto",
    };

    const userCheck = () => usuarioRegistoSchema.parse(rawUser);

    expect(userCheck).toThrow();
  });

  test("genero inválido", () => {
    const rawUser = {
      contacto: "joaolima8820218@gmail.com",
      genero: "B",
      nome: "Joao neto",
      senha: "Familia@234",
    };

    const userCheck = () => usuarioRegistoSchema.parse(rawUser);

    expect(userCheck).toThrow();
  });
});

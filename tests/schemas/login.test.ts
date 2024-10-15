import { describe, expect, test } from "@jest/globals";
import { loginSchema } from "../../src/schemas/login.schema";

describe("Schemas login", () => {
  test("Credenciais válidas", () => {
    const user = loginSchema.parse({
      senha: "123456789",
      contacto: "joaolima882018@gmail.com",
    });

    expect(user).not.toBeUndefined();
  });

  test("credenciais inválidas", () => {
    expect(() => {
      loginSchema.parse({});
    }).toThrow();
  });

  test("credenciais inválidas (senha vazia)", () => {
    expect(() => {
      loginSchema.parse({ contacto: "joaolima882018@gmail.com" });
    }).toThrow();
  });

  test("credenciais inválidas (contacto vazio)", () => {
    expect(() => {
      loginSchema.parse({ senha: "mylitlepassword " });
    }).toThrow();
  });
});

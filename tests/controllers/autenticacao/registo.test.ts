import { describe, expect, test } from "@jest/globals";
import RegistoController from "../../../src/controllers/autenticacao/registo";

describe("Controller cadastro de novo usuário", () => {
  const newUsuario = {
    nome: "João Neto",
    senha: "12345678",
    contacto: "joaolima882018@gmail.com",
    genero: "M",
  };

  test("Usuário inexistente", async () => {
    const controller = new RegistoController({});

    const response = controller.execute(newUsuario);

    expect(response.user).not.toBeUndefined();
  });
});

import { describe, test, beforeAll, expect } from "@jest/globals";
import { config } from "dotenv";
import { IUsuario } from "../../src/services/autenticacao/model/ILogin.model";
import LoginService from "../../src/services/autenticacao/Login.service";

describe("Serviço de login", () => {
  const user: IUsuario = {
    id: "1",
    nome: "João Neto",
    senha: "$2b$10$v4eNXNwEy.JfkPRyCxZBOu.ELYN6LnD5QkjtjrQQcruDRP66EGdce",
    contacto: "joaolima882018@gmail.com",
    genero: "M",
    createdAt:
      "Sun Nov 10 2024 22:27:56 GMT+0100 (Hora padrão da África Ocidental)",
    updatedAt:
      "Sun Nov 10 2024 22:27:56 GMT+0100 (Hora padrão da África Ocidental)",
    lastLogin:
      "Sun Nov 10 2024 22:27:56 GMT+0100 (Hora padrão da África Ocidental)",
  };

  beforeAll(() => {
    config();
  });

  test("Login de usuários", async () => {
    const loginService = new LoginService({
      getUsuarioPeloContacto(contacto) {
        return Promise.resolve(user);
      },
    });

    const response = await loginService.logar({
      contacto: "joaolima882018@gmail.com",
      senha: "12345678",
    });

    expect(response).not.toBeUndefined();
  });
});

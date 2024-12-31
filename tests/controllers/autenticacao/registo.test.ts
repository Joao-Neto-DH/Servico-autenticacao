import { describe, expect, test, beforeAll } from "@jest/globals";
import RegistoController from "../../../src/controllers/autenticacao/registo";
import { IUsuario } from "../../../src/services/autenticacao/model/IRegisto.model";
import RegistoService from "../../../src/services/autenticacao/Registo.service";
import { config } from "dotenv";

describe("Controller registo", () => {
  beforeAll(() => {
    config({ path: ".env.test" });
  });

  const users: IUsuario[] = [];

  const service: RegistoService = new RegistoService({
    async contactoJaExiste(contacto) {
      return users.find((user) => user.contacto === contacto) !== undefined;
    },
    async registarUsuario(usuario) {
      const user = {
        id: "1",
        ...usuario,
        createdAt: new Date().toString(),
        updatedAt: new Date().toString(),
        lastLogin: new Date().toString(),
      };

      users.push(user);

      return user;
    },
  });

  const newUsuario = {
    nome: "João Neto",
    senha: "12345678",
    contacto: "joaolima882018@gmail.com",
    genero: "M",
  };

  test("Novo usuário", async () => {
    const controller = new RegistoController(service);

    const response = await controller.execute(newUsuario);
    expect(response.user).not.toBeUndefined();
  });

  test("Já existe um usuário com este contato", () => {
    const user = users.find((user) => user.contacto === newUsuario.contacto);
    expect(user).not.toBeUndefined();
  });

  test("Total de usuários maior que zero", () => {
    expect(users.length).toBeGreaterThan(0);
  });
});

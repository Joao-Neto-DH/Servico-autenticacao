import { describe, test, beforeAll, expect } from "@jest/globals";
import { config } from "dotenv";
import { IUsuario } from "../../src/services/autenticacao/model/ILogin.model";
import LoginService from "../../src/services/autenticacao/Login.service";
import RecuperaSenhaService from "../../src/services/autenticacao/RecuperaSenha.service";

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
    config({ path: ".env.test" });
  });

  test("Login de usuários", async () => {
    const loginService = new LoginService({
      getUsuarioPeloContacto(contacto) {
        return Promise.resolve(user);
      },
      execute({ session_token, user_agent, userId }) {
        return null!;
      },
    });

    const response = await loginService.logar({
      contacto: "joaolima882018@gmail.com",
      senha: "12345678",
    });

    expect(response).not.toBeUndefined();
  });

  test("Recuperar senha de usuários", async () => {
    let gToken: string;
    let gExpiraEm: Date;

    const recuperacao = new RecuperaSenhaService({
      actualizarNovaSenha(contactoUsuario, senhaEncriptada) {
        user.senha = senhaEncriptada;
        return Promise.resolve(user.id);
      },

      getUsuarioPeloContacto(usuario) {
        return Promise.resolve(user);
      },

      getRecuperarSenhaToken(usuarioContacto) {
        return Promise.resolve({ expiraEm: gExpiraEm, token: gToken });
      },

      saveRecuperarSenhaToken(usuarioRecuperaSenha) {
        gToken = usuarioRecuperaSenha.token;
        gExpiraEm = usuarioRecuperaSenha.expiraEm;

        return Promise.resolve(true);
      },
    });

    const pedidoSalvo = await recuperacao.salvarRecuperacaoSenha(user.contacto);

    console.log("Token de recuperação:", pedidoSalvo);

    const alterado = await recuperacao.recuperarSenha(gToken!, "novaSenha");

    console.log("Senha alterada:", alterado, "\nNova senha:", user.senha);

    expect(alterado).toBeTruthy();
  });
});

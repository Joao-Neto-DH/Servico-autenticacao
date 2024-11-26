import { describe, test, expect, beforeAll } from "@jest/globals";
import RegistoAplicacaoService from "../../../../src/services/autenticacao/aplicacao/RegistoAplicacao.service";
import { AplicacaoRequest } from "../../../../src/services/autenticacao/aplicacao/model/IRegistoAplicacao.model";

describe("Autenticação de apps de terceiros", () => {
  const apps: (AplicacaoRequest & { id: string })[] = [];
  let ras: RegistoAplicacaoService;

  beforeAll(function () {
    ras = new RegistoAplicacaoService({
      salvar(data) {
        apps.push({ ...data, id: apps.length.toString() });

        return Promise.resolve(data);
      },
      pegarAplicacao(nome) {
        const app = apps.find(
          (app) => app.nome.toLowerCase() === nome.toLowerCase()
        );
        return Promise.resolve(app);
      },
    });
  });

  test("Registar da aplicação", async () => {
    await ras.registar({
      nome: "Meu app",
      tipo: "web",
      url: "",
      usuario: "vwtrxdui",
    });

    expect(apps.length).toBeGreaterThan(0);
  });

  test("Erro ao registar da aplicação", async () => {
    expect(async () => {
      await ras.registar({
        nome: "Meu app",
        tipo: "web",
        url: "",
        usuario: "vwtrxdui",
      });
    }).rejects.toThrow();
  });

  // por implementar
  test("Adicionar permissção na aplicação", async () => {
    expect(async () => {
      await ras.registar({
        nome: "Meu app",
        tipo: "web",
        url: "",
        usuario: "vwtrxdui",
      });
    }).rejects.toThrow();
  });
});

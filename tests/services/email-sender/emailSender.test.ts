import { expect, describe, test, beforeAll } from "@jest/globals";
import Emailtrap from "../../../src/services/email-sender/Emailtrap";
import {
  IEmailSender,
  IEmailSenderToMany,
} from "../../../src/services/email-sender/IEmailSender";
import { envConfig } from "../../../src/config/env-config";
import { config } from "dotenv";

describe("enviar email", () => {
  beforeAll(() => {
    config();
  });

  test("enviar para um", async () => {
    let sender: IEmailSender = new Emailtrap(
      envConfig().TOKEN_PROVEDOR_EMAIL,
      envConfig().EMAIL_EMISSOR,
      envConfig().EMAIL_NOME_EMISSOR
    );

    expect(async () => {
      const resposta = await sender.enviar({
        category: "Teste",
        email: "finareg636@advitize.com",
        mensagem: "mensagem de teste",
        sandbox: true,
        subject: "Testando",
      });
    }).not.toThrow();
  });

  test("enviar para muitos", async () => {
    let sender: IEmailSenderToMany = new Emailtrap(
      envConfig().TOKEN_PROVEDOR_EMAIL,
      envConfig().EMAIL_EMISSOR,
      envConfig().EMAIL_NOME_EMISSOR
    );

    expect(async () => {
      const resposta = await sender.enviarParaMuitos({
        category: "Teste",
        emails: ["finareg636@advitize.com"],
        mensagem: "mensagem de teste",
        sandbox: true,
        subject: "Testando",
      });
    }).not.toThrow();
  });
});

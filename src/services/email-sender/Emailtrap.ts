import {
  IEmailSender,
  IEmailSenderToMany,
  TEmailInfo,
  TEmailInfoToMany,
} from "./IEmailSender";

import { Transporter, createTransport } from "nodemailer";
import { MailtrapClient, MailtrapTransport } from "mailtrap";

export default class Emailtrap implements IEmailSender, IEmailSenderToMany {
  private readonly transport: MailtrapClient;

  constructor(
    private readonly token: string,
    private readonly emailEmissor: string,
    private readonly nomeEmissor: string
  ) {
    this.transport = new MailtrapClient({
      token: this.token,
      accountId: 2090573,
      testInboxId: 3215901,
    });
    //       createTransport(
    //   MailtrapTransport({
    //     token: this.token,
    //     testInboxId: 3215901,
    //   })
    // );
  }

  async enviarParaMuitos(emailInfo: TEmailInfoToMany): Promise<any> {
    return await this.transport.testing.send({
      from: {
        email: this.emailEmissor,
        name: this.nomeEmissor,
      },
      to: emailInfo.emails.map((email) => ({ email: email, name: email })),
      subject: emailInfo.subject,
      text: emailInfo.mensagem,
      // textEncoding: "quoted-printable",
    });
  }
  async enviar(emailInfo: TEmailInfo): Promise<any> {
    return await this.transport.send({
      from: {
        email: this.emailEmissor,
        name: this.nomeEmissor,
      },
      to: [{ email: emailInfo.email, name: emailInfo.email }],
      subject: emailInfo.subject,
      text: emailInfo.mensagem,
      // textEncoding: "quoted-printable",
    });
  }
}

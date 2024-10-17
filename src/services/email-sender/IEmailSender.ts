export type TEmailInfo = {
  email: string;
  mensagem: string;
  subject: string;
  category: string;
  sandbox: boolean;
};

export type TEmailInfoToMany = {
  emails: string[];
  mensagem: string;
  subject: string;
  category: string;
  sandbox: boolean;
};

export interface IEmailSender {
  enviar(emailInfo: TEmailInfo): Promise<any>;
}
export interface IEmailSenderToMany {
  enviarParaMuitos(emailInfo: TEmailInfoToMany): Promise<any>;
}

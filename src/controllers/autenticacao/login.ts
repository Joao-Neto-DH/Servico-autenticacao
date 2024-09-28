import IFieldError from "../../@types/field-error";

export interface ILoginRequest {
  senha: string;
  contacto: string;
}

export interface ILoginResponse {
  statusMessage: "OK" | "ERROR";
  status?: number;
  erro?: string | IFieldError[];
}

class LoginController {
  public constructor(private readonly service: any) {}

  /**
   * execute
   */
  public execute(data: ILoginRequest): ILoginResponse {
    // 1- validar os dados
    // 2- logar usuário
    return { statusMessage: "OK" };
  }
}

export default LoginController;

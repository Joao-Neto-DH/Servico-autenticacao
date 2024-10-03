import IFieldError from "../../@types/field-error";
import LoginService from "../../services/autenticacao/Login.service";
import { IUsuario } from "../../services/autenticacao/model/IRegisto.model";

export interface ILoginRequest {
  senha: string;
  contacto: string;
}

export interface ILoginResponse {
  statusMessage: "OK" | "ERROR";
  status?: number;
  erro?: string | IFieldError[];
  usuario?: IUsuario;
}

class LoginController {
  public constructor(private readonly service: LoginService) {}

  /**
   * execute
   */
  public async execute(data: ILoginRequest): Promise<ILoginResponse> {
    // 1- validar os dados
    // 2- logar usuário
    const user = await this.service.logar(data);
    return { statusMessage: user ? "OK" : "ERROR", usuario: user };
  }
}

export default LoginController;

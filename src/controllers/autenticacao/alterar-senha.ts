import IFieldError from "../../@types/field-error";
import AppError from "../../helpers/app-error";
import { TProfile } from "../../services/autenticacao/model/IUserProfile.model";
import UserSenhaService from "../../services/autenticacao/UserSenha.service";

export interface IAlterarSenhaRequest {
  usuarioId: string;
  nova_senha: string;
  senha_actual: string;
}

export interface IAlterarSenhaResponse {
  statusMessage: "OK" | "ERROR";
  status?: number;
  erro?: string | IFieldError[];
  user?: TProfile;
}

class AlterarSenhaController {
  public constructor(private readonly service: UserSenhaService) {}
  /**
   * execute
   */
  public async execute(
    data: IAlterarSenhaRequest
  ): Promise<IAlterarSenhaResponse> {
    try {
      const user = await this.service.execute(data);

      return {
        statusMessage: "OK",
        status: 200,
        user,
      };
    } catch (error) {
      if (error instanceof AppError) {
        return {
          statusMessage: "ERROR",
          erro: error.message,
          status: error.status,
        };
      }

      return {
        statusMessage: "ERROR",
        erro: "Erro interno no servidor",
      };
    }
  }
}

export default AlterarSenhaController;

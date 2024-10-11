import IFieldError from "../../@types/field-error";
import AppError from "../../helpers/app-error";
import { IRegistoService } from "../../services/autenticacao/Registo.service";

export interface IRegistoRequest {
  contacto: string;
  senha: string;
  nome: string;
  genero: string;
}

export interface IRegistoResponse {
  statusMessage: "OK" | "ERROR";
  status?: number;
  descricao_erro?: string;
  erro?: string | IFieldError[];
  user?: {};
}

class RegistoController {
  public constructor(private readonly service: IRegistoService) {}

  /**
   * execute
   */
  public async execute(data: IRegistoRequest): Promise<IRegistoResponse> {
    try {
      const user = await this.service.registar(data);

      return {
        statusMessage: "OK",
        user,
      };
    } catch (error) {
      if (error instanceof AppError) {
        return {
          statusMessage: "ERROR",
          status: error.status,
          descricao_erro: error.message,
        };
      }

      return {
        statusMessage: "ERROR",
        status: 500,
        descricao_erro: "Ocorreu um erro no servidor ao processar o teu pedido",
      };
    }
  }
}

export default RegistoController;

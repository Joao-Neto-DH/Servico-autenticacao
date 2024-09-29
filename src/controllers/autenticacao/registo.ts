import IFieldError from "../../@types/field-error";
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
  erro?: string | IFieldError[];
  user?: {};
}

class RegistoController {
  public constructor(private readonly service: IRegistoService) {}

  /**
   * execute
   */
  public async execute(data: IRegistoRequest): Promise<IRegistoResponse> {
    const user = this.service.registar(data);

    return {
      statusMessage: "OK",
      user,
    };
  }
}

export default RegistoController;

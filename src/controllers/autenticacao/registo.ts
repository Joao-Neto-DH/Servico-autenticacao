import IFieldError from "../../@types/field-error";

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
  public constructor(private readonly service: any) {}

  /**
   * execute
   */
  public execute(data: IRegistoRequest): IRegistoResponse {
    return {
      statusMessage: "OK",
    };
  }
}

export default RegistoController;

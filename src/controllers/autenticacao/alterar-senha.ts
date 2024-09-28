import IFieldError from "../../@types/field-error";

export interface IAlterarSenhaRequest {
  nova_senha: string;
  senha_actual: string;
}

export interface IAlterarSenhaResponse {
  statusMessage: "OK" | "ERROR";
  status?: number;
  erro?: string | IFieldError[];
  user?: {};
}

class AlterarSenhaController {
  public constructor(private readonly service: any) {}
  /**
   * execute
   */
  public execute(data: IAlterarSenhaRequest): IAlterarSenhaResponse {
    return {
      statusMessage: "OK",
    };
  }
}

export default AlterarSenhaController;

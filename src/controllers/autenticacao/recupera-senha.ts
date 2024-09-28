import IFieldError from "../../@types/field-error";

export interface IRecuperaSenhaSolicitacaoRequest {
  contacto: string;
}

export interface IRecuperaSenhaRequest {
  senha: string;
}

export interface IRecuperaSenhaResponse {
  statusMessage: "OK" | "ERROR";
  status?: number;
  erro?: string | IFieldError[];
}

class RecuperaSenhaController {
  public constructor(private readonly service: any) {}

  /**
   * solitacao
   */
  public solitacao(
    data: IRecuperaSenhaSolicitacaoRequest
  ): IRecuperaSenhaResponse {
    // 1- verificar contacto existente
    // 2- gerar e enviar link de recuperação
    return { statusMessage: "OK" };
  }

  /**
   * execute
   */
  public execute(data: IRecuperaSenhaRequest): IRecuperaSenhaResponse {
    // 1- alterar senha
    // 2- devolver conta do usuário
    return { statusMessage: "OK" };
  }
}

export default RecuperaSenhaController;

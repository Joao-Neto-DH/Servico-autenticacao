import IFieldError from "../../@types/field-error";
import RecuperaSenhaService from "../../services/autenticacao/RecuperaSenha.service";

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
  public constructor(private readonly service: RecuperaSenhaService) {}

  /**
   * solitacao
   */
  public async solitacao(
    data: IRecuperaSenhaSolicitacaoRequest
  ): Promise<IRecuperaSenhaResponse> {
    const result = await this.service.salvarRecuperacaoSenha(data.contacto);
    return {
      statusMessage: result ? "OK" : "ERROR",
      erro: result
        ? undefined
        : `O contacto ${data.contacto} não está associado a nenhuma conta`,
    };
  }

  /**
   * execute
   */
  public async execute(
    data: IRecuperaSenhaRequest,
    token: string
  ): Promise<IRecuperaSenhaResponse> {
    const result = await this.service.recuperarSenha(token, data.senha);
    return {
      statusMessage: result ? "OK" : "ERROR",
      erro: "Não foi possível recuperar a conta",
    };
  }
}

export default RecuperaSenhaController;

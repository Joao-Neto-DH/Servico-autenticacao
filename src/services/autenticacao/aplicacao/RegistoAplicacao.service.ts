import AppError from "../../../helpers/app-error";
import { GeradorSenha } from "../../../helpers/gerador-senha";
import {
  AplicacaoRequest,
  IRegistoAplicacaoModel,
} from "./model/IRegistoAplicacao.model";

export interface IRegistoAplicacaoService {
  registar(data: AplicacaoRequest): Promise<{}>;
}

class RegistoAplicacaoService implements IRegistoAplicacaoService {
  constructor(private readonly model: IRegistoAplicacaoModel) {}

  async registar(data: AplicacaoRequest): Promise<{}> {
    const app = await this.model.pegarAplicacao(data.nome);

    if (app !== undefined) {
      throw new AppError(
        `Já existe um aplicativo com o nome ${data.nome}. Por favor defina um outro nome`
      );
    }

    const client_id = GeradorSenha.gerar();
    const app_id = GeradorSenha.gerar({ tamanho: 8 });

    const aplicacao = { ...data, client_id, app_id };

    return await this.model.salvar(aplicacao);
  }
}

export default RegistoAplicacaoService;

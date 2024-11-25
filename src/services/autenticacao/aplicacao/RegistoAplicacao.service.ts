import AppError from "../../../helpers/app-error";
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
      throw new AppError(`O app ${data.nome} já existe`);
    }

    return await this.model.salvar(data);
  }
}

export default RegistoAplicacaoService;

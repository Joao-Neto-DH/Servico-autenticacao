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
    return await this.model.salvar(data);
  }
}

export default RegistoAplicacaoService;

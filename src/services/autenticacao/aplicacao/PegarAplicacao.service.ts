import AppError from "../../../helpers/app-error";
import { IPegarAplicacaoPeloClientEAppModel } from "./model/IPegarAplicacao.mode";

export interface IPegarAplicacaoService {
  pegarAPlicacaoParaAutorizar(
    client_id: string,
    app_id: string,
    state: string
  ): Promise<{}>;
}

export default class PegarAplicacaoService implements IPegarAplicacaoService {
  constructor(private readonly model: IPegarAplicacaoPeloClientEAppModel) {}

  async pegarAPlicacaoParaAutorizar(
    client_id: string,
    app_id: string,
    state: string
  ): Promise<{}> {
    const app = await this.model.pegarAplicacaoPeloClientEApp(
      client_id,
      app_id
    );

    if (app === undefined) {
      throw new AppError("Aplicação não encontrada", 404);
    }

    if (app.state !== state) {
      throw new AppError("state inválido");
    }

    return app;
  }
}

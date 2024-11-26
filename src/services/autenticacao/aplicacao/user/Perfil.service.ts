import AppError from "../../../../helpers/app-error";
import { IPerfilModel } from "../model/IPerfil.model";

export interface IPerfilService {
  perfil(userID: string, aplicacaoID: string): Promise<{}>;
}

export default class PerfilService implements IPerfilService {
  constructor(private readonly model: IPerfilModel) {}
  async perfil(userID: string, aplicacaoID: string): Promise<{}> {
    const isAuthorized = await this.model.isAuthorized(userID, aplicacaoID);

    if (!isAuthorized) {
      throw new AppError("Não autorizado", 401);
    }

    const perfil = await this.model.perfil(userID);

    return perfil;
  }
}

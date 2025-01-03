import { IAuthorizationModel } from "../../model/IAuthorization.model";

export interface IAutorizeService {
  authorize(userID: string, aplicacaoID: string): Promise<{}>;
  unauthorize(userID: string, aplicacaoID: string): Promise<{}>;
}

class AuthorizeService implements IAutorizeService {
  constructor(private readonly model: IAuthorizationModel) {}

  async authorize(userID: string, aplicacaoID: string): Promise<{}> {
    const isAutorizado = await this.model.isAuthorized(userID, aplicacaoID);

    if (isAutorizado) {
      return {};
    }

    return await this.model.authorize(userID, aplicacaoID);
  }

  async unauthorize(userID: string, aplicacaoID: string): Promise<{}> {
    const isAutorizado = await this.model.isAuthorized(userID, aplicacaoID);

    if (!isAutorizado) {
      return {};
    }

    return await this.model.unauthorize(userID, aplicacaoID);
  }
}

export default AuthorizeService;

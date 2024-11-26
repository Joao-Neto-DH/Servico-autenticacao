import { IIsAuthorizadeModel } from "./IAuthorization.model";

export interface IPerfilModel extends IIsAuthorizadeModel {
  perfil(userID: string): Promise<{}>;
}

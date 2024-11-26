export interface IAuthorizationModel extends IIsAuthorizadeModel {
  authorize(userID: string, aplicacaoID: string): Promise<{}>;
  unauthorize(userID: string, aplicacaoID: string): Promise<{}>;
}

export interface IIsAuthorizadeModel {
  isAuthorized(userID: string, aplicacaoID: string): Promise<boolean>;
}

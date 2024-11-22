export interface IAuthorizationModel {
  authorize(userID: string, aplicacaoID: string): Promise<{}>;
  unauthorize(userID: string, aplicacaoID: string): Promise<{}>;
  isAuthorized(userID: string, aplicacaoID: string): Promise<boolean>;
}

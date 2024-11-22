export interface IAlterarPermissaoModel {
  alterar(aplicacaoID: string, datas: AlterarPermissaoRequest[]): Promise<{}>;
}

export interface AlterarPermissaoRequest {}

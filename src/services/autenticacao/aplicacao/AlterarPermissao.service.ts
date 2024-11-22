import {
  AlterarPermissaoRequest,
  IAlterarPermissaoModel,
} from "./model/IAlterarPermissao.model";

export interface IAlterarPermissaoService {
  alterar(
    aplicacaoID: string,
    permissoes: AlterarPermissaoRequest[]
  ): Promise<{}>;
}

class AlterarPermissaoService implements IAlterarPermissaoService {
  constructor(private readonly model: IAlterarPermissaoModel) {}

  async alterar(
    aplicacaoID: string,
    permissoes: AlterarPermissaoRequest[]
  ): Promise<{}> {
    return await this.model.alterar(aplicacaoID, permissoes);
  }
}

export default AlterarPermissaoService;

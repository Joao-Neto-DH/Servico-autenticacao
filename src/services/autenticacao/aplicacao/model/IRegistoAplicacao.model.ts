export interface IRegistoAplicacaoModel {
  salvar(data: AplicacaoRequest): Promise<{}>;
}

export interface AplicacaoRequest {}

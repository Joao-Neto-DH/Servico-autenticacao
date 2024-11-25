export interface IPegarAplicacaoPeloNome {
  pegarAplicacao(nome: string): Promise<{} | undefined>;
}

export interface IPegarAplicacaoPeloNomeModel {
  pegarAplicacao(nome: string): Promise<{} | undefined>;
}

export interface IPegarAplicacaoPeloClientEAppModel {
  pegarAplicacaoPeloClientEApp(
    client_id: string,
    app_id: string
  ): Promise<{ state: string } | undefined>;
}

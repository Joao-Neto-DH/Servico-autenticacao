import { IPegarAplicacaoPeloNomeModel } from "./IPegarAplicacao.mode";

export interface IRegistoAplicacaoModel extends IPegarAplicacaoPeloNomeModel {
  salvar(data: AplicacaoRequest): Promise<{}>;
}

export interface AplicacaoRequest {
  nome: string;
  tipo: "mobile" | "web" | "desktop" | "other";
  logo?: string;
  url: string;
  usuario: string;
}

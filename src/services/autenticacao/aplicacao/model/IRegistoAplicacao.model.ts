import { IPegarAplicacaoPeloNome } from "./IPegarAplicacao.mode";

export interface IRegistoAplicacaoModel extends IPegarAplicacaoPeloNome {
  salvar(data: AplicacaoRequest): Promise<{}>;
}

export interface AplicacaoRequest {
  nome: string;
  tipo: "mobile" | "web" | "desktop" | "other";
  logo?: string;
  url: string;
  usuario: string;
}

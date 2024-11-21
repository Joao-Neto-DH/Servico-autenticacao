import { IUsuario } from "./ILogin.model";

export default interface IRecuperacaoSenhaModel {
  getUsuarioPeloContacto(usuario: string): Promise<IUsuario | undefined>;
  saveRecuperarSenhaToken(
    usuarioRecuperaSenha: IUsuarioRecuperaSenha
  ): Promise<boolean>;

  getRecuperarSenhaToken(
    usuarioContacto: string
  ): Promise<IUsuarioRecuperaSenha>;

  actualizarNovaSenha(
    contactoUsuario: string,
    senhaEncriptada: string
  ): Promise<string>;
}

export interface IUsuarioRecuperaSenha {
  token: string;
  expiraEm: Date;
}

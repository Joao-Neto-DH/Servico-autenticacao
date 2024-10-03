import IRecuperacaoSenhaModel, {
  IUsuarioRecuperaSenha,
} from "./IRecuperacaoSenha.model";

class RecuperaSenhaModel implements IRecuperacaoSenhaModel {
  constructor() {}
  actualizarNovaSenha(
    contactoUsuario: string,
    senhaEncriptada: string
  ): Promise<string> {
    throw new Error("Method not implemented.");
  }
  saveRecuperarSenhaToken(
    usuarioRecuperaSenha: IUsuarioRecuperaSenha
  ): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  getRecuperarSenhaToken(
    usuarioContacto: string
  ): Promise<IUsuarioRecuperaSenha> {
    throw new Error("Method not implemented.");
  }
}

export default RecuperaSenhaModel;

import { modelLogin } from "..";
import { clientDB } from "../../../config/db-connector";
import { IUsuario } from "./ILogin.model";
import IRecuperacaoSenhaModel, {
  IUsuarioRecuperaSenha,
} from "./IRecuperacaoSenha.model";

class RecuperaSenhaModel implements IRecuperacaoSenhaModel {
  constructor() {}
  async getUsuarioPeloContacto(usuario: string): Promise<IUsuario | undefined> {
    return await modelLogin.getUsuarioPeloContacto(usuario);
  }

  async actualizarNovaSenha(
    contactoUsuario: string,
    senhaEncriptada: string
  ): Promise<string> {
    const user = await clientDB.user.update({
      data: {
        senha: senhaEncriptada,
      },
      where: {
        contacto: contactoUsuario,
      },
    });

    await clientDB.$disconnect();

    return user.id;
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

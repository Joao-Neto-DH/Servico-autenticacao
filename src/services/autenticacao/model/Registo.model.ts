import { IRegistoRequest } from "../../../controllers/autenticacao/registo";
import IRegistoModel, { IUsuario } from "./IRegisto.model";

class RegistoModel implements IRegistoModel {
  async registarUsuario(usuario: IRegistoRequest): Promise<IUsuario> {
    throw new Error("Method not implemented.");
  }
  async contactoJaExiste(contacto: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}

export default RegistoModel;

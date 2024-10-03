import { IRegistoRequest } from "../../controllers/autenticacao/registo";
import AppError from "../../helpers/app-error";
import { encriptarSenha } from "../../helpers/encriptar-senha";
import IRegistoModel, { IUsuario } from "./model/IRegisto.model";

export interface IRegistoService {
  registar(usuario: IRegistoRequest): Promise<IUsuario>;
}

class RegistoService {
  constructor(private readonly model: IRegistoModel) {}

  /**
   * registar
   */
  public async registar(usuario: IRegistoRequest): Promise<IUsuario> {
    const isRegistado = await this.model.contactoJaExiste(usuario.contacto);

    if (isRegistado) {
      throw new AppError(
        `O contacto ${usuario.contacto} já está a ser utilizado por outro usuário!`,
        400
      );
    }

    const senhaEncriptada = encriptarSenha(usuario.senha);

    const newUsuario = await this.model.registarUsuario({
      ...usuario,
      senha: senhaEncriptada,
    });

    return newUsuario;
  }
}

export default RegistoService;

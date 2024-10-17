import { IRegistoRequest } from "../../controllers/autenticacao/registo";
import AppError from "../../helpers/app-error";
import { encriptarSenha } from "../../helpers/encriptar-senha";
import { loginToken } from "../../helpers/login-token";
import IRegistoModel, { IUsuario } from "./model/IRegisto.model";

export interface IRegistoService {
  registar(
    usuario: IRegistoRequest
  ): Promise<{ usuario: IUsuario; accessToken: string } | undefined>;
}

class RegistoService implements IRegistoService {
  constructor(private readonly model: IRegistoModel) {}

  /**
   * registar
   */
  public async registar(
    usuario: IRegistoRequest
  ): Promise<{ usuario: IUsuario; accessToken: string } | undefined> {
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

    const accessToken = loginToken(newUsuario.id);

    return { usuario: newUsuario, accessToken };
  }
}

export default RegistoService;

import { encriptarSenha } from "../../helpers/encriptar-senha";
import {
  calcularValidadeDoToken,
  checkIsTokenValido,
  extrairContactoDoToken,
  gerarTokenRecuperacaoSenha,
} from "../../helpers/token-recuperacao-senha";
import IRecuperacaoSenhaModel from "./model/IRecuperacaoSenha.model";
import LoginModel from "./model/Login.model";

class RecuperaSenhaService {
  constructor(private readonly model: IRecuperacaoSenhaModel) {}

  /**
   * salvarRecuperacaoSenha
   */
  public async salvarRecuperacaoSenha(usuarioContacto: string) {
    const modelLogin = new LoginModel();

    const usuarioExiste = await modelLogin.getUsuarioPeloContacto(
      usuarioContacto
    );

    if (!usuarioExiste) return undefined;

    const token = gerarTokenRecuperacaoSenha(usuarioExiste.contacto);
    const dataExpiracao = calcularValidadeDoToken();

    this.model.saveRecuperarSenhaToken({
      token,
      expiraEm: dataExpiracao,
    });

    return true;
  }

  /**
   * recuperarSenha
   */
  public async recuperarSenha(token: string, novaSenha: string) {
    const pedidoRecuperacao = await this.model.getRecuperarSenhaToken(token);

    const isTokenNotExpired = checkIsTokenValido(pedidoRecuperacao.expiraEm);

    if (isTokenNotExpired) {
      return false;
    }

    const senhaEncriptada = encriptarSenha(novaSenha);
    const contactoUsuario = extrairContactoDoToken(pedidoRecuperacao.token);

    const result = await this.model.actualizarNovaSenha(
      contactoUsuario,
      senhaEncriptada
    );

    return result;
  }
}

export default RecuperaSenhaService;

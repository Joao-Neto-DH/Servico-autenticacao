import { TProfile } from "./IUserProfile.model";

interface IUserSenhaModel {
  updateSenhaUsuario(userId: string, novaSenha: string): Promise<TProfile>;
  getUsuarioPeloId(userId: string): Promise<{ senha: string } | null>;
}

export default IUserSenhaModel;

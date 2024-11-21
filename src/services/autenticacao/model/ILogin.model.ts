import ISessionModel from "./ISession.model";

interface ILoginModel extends ISessionModel {
  getUsuarioPeloContacto(usuario: string): Promise<IUsuario | undefined>;
}

export interface IUsuario {
  id: string;
  contacto: string;
  nome: string;
  genero: string;
  senha: string;
  perfil?: string;
  createdAt: string;
  updatedAt: string;
  lastLogin: string;
}

export default ILoginModel;

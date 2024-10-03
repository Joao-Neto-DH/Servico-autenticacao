interface ILoginModel {
  getUsuarioPeloContacto(usuario: string): Promise<IUsuario | undefined>;
}

export interface IUsuario {
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

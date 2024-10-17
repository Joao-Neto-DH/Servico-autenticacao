import { IRegistoRequest } from "../../../controllers/autenticacao/registo";

export interface IUsuario {
  id: string;
  contacto: string;
  nome: string;
  genero: string;
  perfil?: string;
  createdAt: string;
  updatedAt: string;
  lastLogin: string;
}

export default interface IRegistoModel {
  contactoJaExiste(contacto: string): Promise<boolean>;
  registarUsuario(usuario: IRegistoRequest): Promise<IUsuario>;
}

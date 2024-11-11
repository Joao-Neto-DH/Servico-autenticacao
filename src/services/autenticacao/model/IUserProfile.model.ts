import { $Enums } from "@prisma/client";

export type TProfile = {
  id: string;
  nome: string;
  contacto: string;
  genero: $Enums.Gender;
  created_at: Date;
  updated_at: Date;
  session: {
    id: string;
    created_at: Date;
    userId: string | null;
    user_agent: string;
    session_token: string;
  }[];
} | null;

interface IUserProfileModel {
  getProfile(userId: string): Promise<TProfile>;
}

export default IUserProfileModel;

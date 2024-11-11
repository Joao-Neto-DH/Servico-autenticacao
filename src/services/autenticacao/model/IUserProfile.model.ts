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
    user_agent: string;
  }[];
} | null;

interface IUserProfileModel {
  getProfile(userId: string): Promise<TProfile>;
}

export default IUserProfileModel;

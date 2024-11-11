import { clientDB } from "../../../config/db-connector";
import IUserProfileModel, { TProfile } from "./IUserProfile.model";

class UserProfileModel implements IUserProfileModel {
  async getProfile(userId: string): Promise<TProfile> {
    const user = await clientDB.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        contacto: true,
        created_at: true,
        genero: true,
        id: true,
        nome: true,
        session: true,
        updated_at: true,
      },
    });

    await clientDB.$disconnect();

    return user;
  }
}

export default UserProfileModel;
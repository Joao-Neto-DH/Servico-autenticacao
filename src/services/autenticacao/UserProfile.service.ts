import IUserProfileModel from "./model/IUserProfile.model";

class UserProfileService {
  constructor(private readonly model: IUserProfileModel) {}

  /**
   * execute
   */
  public async execute(userId: string) {
    const user = await this.model.getProfile(userId);

    return user;
  }
}

export default UserProfileService;

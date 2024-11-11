import UserProfileService from "../../services/autenticacao/UserProfile.service";

class PerfilController {
  constructor(private readonly service: UserProfileService) {}
  /**
   * execute
   */
  public async execute(userId: string) {
    const perfil = await this.service.execute(userId);

    return perfil;
  }
}

export default PerfilController;

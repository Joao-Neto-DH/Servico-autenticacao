import { clientDB } from "../../../config/db-connector";
import ISessionModel, { TSession } from "./ISession.model";

class SessionModel implements ISessionModel {
  async execute({
    session_token,
    user_agent,
    userId,
  }: TSession): Promise<string> {
    try {
      const { id } = await clientDB.session.create({
        data: {
          session_token,
          user_agent,
          userId,
        },
        select: { id: true },
      });

      await clientDB.$disconnect();

      return id;
    } catch (error: any) {
      console.log(error.message);

      return "";
    }
  }
}

export default SessionModel;

export type TSession = {
  session_token: string;
  user_agent: string;
  userId: string;
};

interface ISessionModel {
  execute({ session_token, user_agent, userId }: TSession): Promise<string>;
}

export default ISessionModel;

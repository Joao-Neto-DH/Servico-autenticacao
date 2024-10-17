import { envConfig } from "../../config/env-config";
import Emailtrap from "./Emailtrap";

const emailSender = new Emailtrap(
  envConfig().TOKEN_PROVEDOR_EMAIL,
  envConfig().EMAIL_EMISSOR,
  envConfig().EMAIL_NOME_EMISSOR
);

export { emailSender };

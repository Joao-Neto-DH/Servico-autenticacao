import bcrypt from "bcrypt";

export function encriptarSenha(senha: string) {
  const saltRounds = 10;

  const encryptedSenha = bcrypt.hashSync(senha, saltRounds);
  return encryptedSenha;
}

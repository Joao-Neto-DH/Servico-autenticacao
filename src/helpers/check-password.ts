import bcrypt from "bcrypt";

export function checkPassword(
  encryptedPassword: string,
  loginPassword: string
) {
  const passwordMatch = bcrypt.compareSync(loginPassword, encryptedPassword);
  return passwordMatch;
}

export function checkPassword(
  encryptedPassword: string,
  loginPassword: string
) {
  return encryptedPassword === loginPassword;
}

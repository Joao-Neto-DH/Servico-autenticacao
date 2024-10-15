import { z } from "zod";

export const recuperarSenhaSchemaContacto = z
  .string()
  .trim()
  .refine(
    (email) =>
      /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(
        email
      ),
    "contacto deve ser um email válido"
  );

export const recuperarSenhaSchema = z.object({
  token: z.string().trim().min(1, "token não pode estar vazio"),
  senha: z
    .string()
    .refine(
      (pwd) =>
        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm.test(
          pwd
        ),
      {
        message:
          "senha deve ter pelo: 1 caracter maiúsculo\n1 caracter minúsculo\n1 número\n1 caracter especial\n1 mínimo de 8 caracteres\n16 caracteres no máximo",
      }
    ),
});

import { z } from "zod";

export const senhaSchema = z.object({
  "senha-actual": z.string().trim().min(1, "senha-actual não pode estar vazia"),
  "nova-senha": z
    .string()
    .refine(
      (pwd) =>
        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm.test(
          pwd
        ),
      {
        message:
          "nova-senha deve ter pelo: 1 caracter maiúsculo\n1 caracter minúsculo\n1 número\n1 caracter especial\n1 mínimo de 8 caracteres\n16 caracteres no máximo",
      }
    ),
});

import { z } from "zod";

export const loginSchema = z.object({
  contacto: z.string().trim().min(1, "contacto deve não pode estar vazio"),
  senha: z.string().min(1, "senha não pode estar vazia"),
});

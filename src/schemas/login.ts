import * as z from "zod"

export const loginSchema = z.object({
  email: z.string().email({ message: "Insira um endereço de e-mail válido." }),
  password: z.string(),
})

import * as z from "zod"

export const resetPasswordSchema = z.object({
  email: z.string().email({ message: "Insira um endereço de e-mail válido." }),
  password: z.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/, {
    message:
      "A senha deve conter de 8 a 16 caracteres no máximo, uma letra maiúscula, minúscula e um número.",
  }),
})

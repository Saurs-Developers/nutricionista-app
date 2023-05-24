import * as z from "zod"

export const resetPasswordSchema = z
  .object({
    password: z.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/, {
      message:
        "A senha deve conter de 8 a 16 caracteres no máximo, uma letra maiúscula, minúscula e um número.",
    }),
    password_confirmation: z
      .string()
      .nonempty({ message: "Este campo é obrigatório" }),
  })
  .superRefine((val, ctx) => {
    if (val.password !== val.password_confirmation) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "As senhas devem ser iguais.",
        path: ["password_confirmation"],
      })
    }
  })

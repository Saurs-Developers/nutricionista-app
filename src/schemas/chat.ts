import * as z from "zod"

const regex = /^[a-zA-ZÀ-ÿ\s]+$/

export const chatSchema = z.object({
  name: z
    .string()
    .regex(regex, { message: "Não são permitidos caracteres especiais" })
    .nonempty({ message: "O nome não pode ser vazio" }),
  message: z.string(),
})

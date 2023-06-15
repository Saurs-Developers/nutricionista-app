import { z } from "zod"

export const recipeSchema = z.object({
  titulo: z
    .string()
    .min(3, { message: "O titulo deve conter no mínimo 3 caracteres." })
    .max(255),
  descricao: z
    .string()
    .min(3, { message: "A descrição deve conter no mínimo 3 caracteres." })
    .max(255),
})

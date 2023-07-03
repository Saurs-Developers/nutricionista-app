import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AlertDialogCancel } from "@radix-ui/react-alert-dialog"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import * as z from "zod"

import { apiPrivate } from "@/api/api"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/AlertDialog"
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { TextArea } from "@/components/TextArea"
import { recipeSchema } from "@/schemas/recipe"

export function EditRecipeAlert({
  title,
  description,
  id,
}: {
  title: string
  description: string
  id: string
}) {
  const queryClient = useQueryClient()

  type RecipeBody = z.infer<typeof recipeSchema>

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<RecipeBody>({
    defaultValues: {
      titulo: title,
      descricao: description,
    },
    resolver: zodResolver(recipeSchema),
    mode: "onChange",
  })

  const [open, setOpen] = useState(false)

  const { mutate } = useMutation({
    mutationFn: (data: RecipeBody) =>
      apiPrivate.put(`/v1/receitas/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries(["receitas"])
    },
  })

  const onSubmit = (data: RecipeBody) => {
    mutate(data)
    setOpen(false)
    reset()
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="filled">Editar</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <form
          id="edit_recipe"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2"
        >
          <Input
            error={errors.titulo?.message}
            {...register("titulo")}
            label="Título"
            placeholder="Ex: vitamina de whey"
          />
          <TextArea
            error={errors.descricao?.message}
            {...register("descricao")}
            label="Descrição"
          />
        </form>
        <div className="flex justify-between gap-4 mt-4">
          <AlertDialogCancel asChild>
            <Button variant="outlined">Cancelar</Button>
          </AlertDialogCancel>
          <Button
            disabled={!z.isValid}
            form="edit_recipe"
            type="submit"
            variant="filled"
          >
            Salvar
          </Button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}

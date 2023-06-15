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
import { useAuth } from "@/hooks/useAuth"
import { recipeSchema } from "@/schemas/recipe"

export function CreateRecipeAlert() {
  const queryClient = useQueryClient()

  type RecipeBody = z.infer<typeof recipeSchema>

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<RecipeBody>({
    resolver: zodResolver(recipeSchema),
    mode: "onChange",
  })

  const { userInfo } = useAuth()

  const [open, setOpen] = useState(false)

  const { mutate } = useMutation({
    mutationFn: (data: RecipeBody) =>
      apiPrivate.post(`/v1/clientes/${userInfo.user_id}/receitas`, data),
    onSuccess: () => {
      queryClient.invalidateQueries(["receitas"])
    },
  })

  const onSubmit = (data: RecipeBody) => {
    mutate(data)
    setOpen(false)
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="filled">Criar receita</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <form
          id="create_recipe"
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
            disabled={!isValid}
            form="create_recipe"
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

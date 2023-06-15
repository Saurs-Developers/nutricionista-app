import {
  AlertDialogAction,
  AlertDialogCancel,
} from "@radix-ui/react-alert-dialog"
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query"

import { apiPrivate } from "@/api/api"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/AlertDialog"
import { Button } from "@/components/Button"
import { Typography } from "@/components/Typography"

export function DeleteRecipeAlert({ id }: { id: string }) {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: (id: string) => apiPrivate.delete(`/v1/receitas/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["receitas"])
    },
  })

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outlined">Excluir</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <Typography variant="md" type="body">
          Você realmente deseja excluir essa receita?
        </Typography>
        <div className="flex justify-between gap-4 mt-4">
          <AlertDialogCancel asChild>
            <Button variant="outlined">Cancelar</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button onClick={() => mutate(id)} variant="danger">
              Excluir
            </Button>
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}

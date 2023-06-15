import {
  AlertDialogAction,
  AlertDialogCancel,
} from "@radix-ui/react-alert-dialog"

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/AlertDialog"
import { Button } from "@/components/Button"
import { Typography } from "@/components/Typography"

export function DeleteRecipeAlert() {
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
            <Button variant="danger">Excluir</Button>
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}

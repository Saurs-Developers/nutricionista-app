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
import { TextArea } from "@/components/TextArea"
import { Typography } from "@/components/Typography"

export function EditRecipeAlert({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="filled">Editar</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <Typography className="mb-2" variant="xs" type="heading">
          {title}
        </Typography>
        <TextArea value={description} />
        <div className="flex justify-between gap-4 mt-4">
          <AlertDialogCancel asChild>
            <Button variant="outlined">Cancelar</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button variant="filled">Salvar</Button>
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}

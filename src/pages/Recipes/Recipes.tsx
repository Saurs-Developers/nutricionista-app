import { useNavigate } from "react-router-dom"
import { ArrowLeft, Pencil, X } from "phosphor-react"

import { Button } from "@/components/Button"
import { Card } from "@/components/Card/Card"
import { Input } from "@/components/Input"
import { Typography } from "@/components/Typography"

export function Recipes() {
  let navigate = useNavigate()

  return (
    <div>
      <header className="flex items-center gap-4">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={24} className="text-brand-primary" />
        </button>
        <Input placeholder="Pesquisar" searchIcon />
      </header>
      <Typography className="my-6" type="heading" variant="xs">
        Minhas receitas
      </Typography>
      <div className="flex flex-col gap-6">
        <Card
          info={
            <>
              <div className="flex justify-between items-center w-full">
                <Card.Title>Crepioca anabólica</Card.Title>
                <Pencil className="text-brand-primary" size={20} />
              </div>
              <Card.Description>
                Misture 4 ovos, 130g de tapioca, tempero a gosto e um fio de
                azeite para temperar. Vai bem com ketchup ou mostarda.
              </Card.Description>
            </>
          }
          action={
            <>
              <Button variant="outlined">Excluir</Button>
              <Button variant="filled">Editar</Button>
            </>
          }
        />
      </div>
    </div>
  )
}

import { useNavigate } from "react-router-dom"
import { ArrowLeft, Pencil } from "phosphor-react"

import { Button } from "@/components/Button"
import { Card } from "@/components/Card/Card"
import { Input } from "@/components/Input"
import { Typography } from "@/components/Typography"
import { useUserData } from "@/hooks/useUserData"

export function Recipes() {
  let navigate = useNavigate()

  const { receitas } = useUserData()

  return (
    <div>
      <header className="flex items-center gap-4">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={24} className="text-brand-primary" />
        </button>
        <Input placeholder="Pesquisar" searchIcon />
      </header>
      <Typography as="h2" className="my-6" type="heading" variant="xs">
        Minhas receitas
      </Typography>
      <div className="flex flex-col gap-6">
        {receitas.map((receita, key) => {
          return (
            <Card
              key={key}
              info={
                <>
                  <div className="flex justify-between items-center w-full">
                    <Card.Title>{receita.title}</Card.Title>
                    <Pencil className="text-brand-primary" size={20} />
                  </div>
                  <Card.Description>{receita.description}</Card.Description>
                </>
              }
              action={
                <>
                  <Button variant="outlined">Excluir</Button>
                  <Button variant="filled">Editar</Button>
                </>
              }
            />
          )
        })}
      </div>
    </div>
  )
}

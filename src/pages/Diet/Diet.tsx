import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "phosphor-react"

import { Button } from "@/components/Button"
import { Card } from "@/components/Card/Card"
import { Input } from "@/components/Input"
import { Typography } from "@/components/Typography"

export function Diet() {
  const navigate = useNavigate()

  return (
    <div>
      <header className="flex items-center gap-4">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={24} className="text-brand-primary" />
        </button>
        <Input placeholder="Pesquisar" searchIcon />
      </header>
      <Typography className="my-6" type="heading" variant="xs">
        Dieta - A (Dias de treino)
      </Typography>
      <Button variant="filled">Acesasr minhas receitas</Button>
      <div className="flex flex-col gap-6 mt-8">
        <Card
          info={
            <>
              <Card.Title>Refeição #1</Card.Title>
              <Card.Subtitle>8 - 9h</Card.Subtitle>
              <Card.Description>
                130g de tapioca ou 250g de batata doce ou 200g de mandioca ou
                220g de cuscuz
              </Card.Description>
              <Card.Description>
                4 ovos inteiros, cozidos mexidos ou em omelete ou 180g de atum
                ou 150g de carne moída
              </Card.Description>
              <Card.Description>1 Porção de fruta</Card.Description>
              <Card.Description>100ml de café puro</Card.Description>
            </>
          }
        />
        <Card
          info={
            <>
              <Card.Title>Refeição #1</Card.Title>
              <Card.Subtitle>8 - 9h</Card.Subtitle>
              <Card.Description>
                130g de tapioca ou 250g de batata doce ou 200g de mandioca ou
                220g de cuscuz
              </Card.Description>
              <Card.Description>
                4 ovos inteiros, cozidos mexidos ou em omelete ou 180g de atum
                ou 150g de carne moída
              </Card.Description>
              <Card.Description>1 Porção de fruta</Card.Description>
              <Card.Description>100ml de café puro</Card.Description>
            </>
          }
        />
      </div>
    </div>
  )
}

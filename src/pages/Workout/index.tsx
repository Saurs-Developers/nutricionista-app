import { useNavigate, useOutletContext } from "react-router-dom"
import { ArrowLeft } from "phosphor-react"

import { Button } from "@/components/Button"
import { Card } from "@/components/Card/Card"
import { Input } from "@/components/Input"
import { Typography } from "@/components/Typography"
import { useUserData } from "@/hooks/useUserData"

export function Workout() {
  const navigate = useNavigate()

  return (
    <div>
      <header className="flex items-center gap-4">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={24} className="text-brand-primary" />
        </button>
        <Input placeholder="Pesquisar" searchIcon />
      </header>
      <Typography as="h2" className="my-6" type="heading" variant="xs">
        Treino A Quadríceps
      </Typography>
      <div className="flex flex-col gap-6">
        <Card
          image={<Card.Image src="http://placekitten.com/340/340" />}
          info={
            <>
              <Card.Title>Agachamento Livre</Card.Title>
              <Card.Subtitle>4 séries de 8 a 12 repetições</Card.Subtitle>
              <Card.Description>Obs: Dropset + 15 Búlgaro</Card.Description>
              <Card.Description>45s de descanso</Card.Description>
            </>
          }
          action={
            <>
              <Button variant="filled">Vídeo</Button>
              <Button variant="outlined">Carga</Button>
            </>
          }
        />
      </div>
    </div>
  )
}

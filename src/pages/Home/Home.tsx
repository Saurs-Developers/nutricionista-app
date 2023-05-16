import { Link } from "react-router-dom"

import { Button } from "@/components/Button"
import { Card } from "@/components/Card/Card"
import { Dialog } from "@/components/Dialog"
import { Input } from "@/components/Input"
import { ProgressBar } from "@/components/ProgressBar"
import { Typography } from "@/components/Typography"

export function Home() {
  return (
    <div>
      <header>
        <Typography className="text-neutral-900" variant="sm" type="heading">
          Olá, Jefté
        </Typography>
      </header>
      <div className="mt-5 space-y-4">
        <section className="flex flex-col">
          <header>
            <Typography
              className="text-neutral-700"
              variant="xs"
              type="heading"
            >
              Meus treinos
            </Typography>
          </header>
          <div className="snap-x snap-mandatory flex gap-4 overflow-auto mt-2">
            <div className="snap-start snap-always">
              <Link to="/workout">
                <Card
                  info={
                    <>
                      <Card.Title>Treino A Quadriceps</Card.Title>
                      <Card.Subtitle>Segunda-feira</Card.Subtitle>
                    </>
                  }
                  image={<Card.Image src="http://placekitten.com/400/400" />}
                />
              </Link>
            </div>
            <div className="snap-start snap-always">
              <Link to="/workout">
                <Card
                  info={
                    <>
                      <Card.Title>Treino B Peito</Card.Title>
                      <Card.Subtitle>Terça-feira</Card.Subtitle>
                    </>
                  }
                  image={<Card.Image src="http://placekitten.com/400/400" />}
                />
              </Link>
            </div>
            <div className="snap-start snap-always">
              <Link to="/workout">
                <Card
                  info={
                    <>
                      <Card.Title>Treino C Costas</Card.Title>
                      <Card.Subtitle>Quarta-feira</Card.Subtitle>
                    </>
                  }
                  image={<Card.Image src="http://placekitten.com/400/400" />}
                />
              </Link>
            </div>
          </div>
        </section>
        <section>
          <header>
            <Typography
              className="text-neutral-700"
              variant="xs"
              type="heading"
            >
              Minhas dietas
            </Typography>
          </header>
          <div className="snap-x snap-mandatory flex gap-4 overflow-auto mt-2 mb-4">
            <div className="snap-start snap-always">
              <Link to="/diet">
                <Card
                  info={
                    <>
                      <Card.Title>Dieta A</Card.Title>
                      <Card.Subtitle>Dias de treino</Card.Subtitle>
                    </>
                  }
                />
              </Link>
            </div>
            <div className="snap-start snap-always">
              <Link to="/diet">
                <Card
                  info={
                    <>
                      <Card.Title>Dieta B</Card.Title>
                      <Card.Subtitle>Dias sem treino</Card.Subtitle>
                    </>
                  }
                />
              </Link>
            </div>
          </div>
          <Link to="/recipes">
            <Button variant="filled">Acessar minhas receitas</Button>
          </Link>
        </section>
        <section className="space-y-4">
          <header>
            <Typography
              className="text-neutral-700"
              variant="xs"
              type="heading"
            >
              Consumo diário de água
            </Typography>
            <Typography className="text-neutral-600" variant="sm" type="body">
              Meta: 1500ml/3000ml
            </Typography>
          </header>
          <ProgressBar value={50} />
          <Dialog trigger="Registrar consumo de água" close="Adicionar">
            <Input placeholder="Ex: 1000ml" />
            <div className="flex gap-4">
              <Button className="text-[14px]" variant="outlined">
                +250ml
              </Button>
              <Button className="text-[14px]" variant="outlined">
                +300ml
              </Button>
              <Button className="text-[14px]" variant="outlined">
                +500ml
              </Button>
            </div>
          </Dialog>
        </section>
      </div>
    </div>
  )
}

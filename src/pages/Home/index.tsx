import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

import { Button } from "@/components/Button"
import { Card } from "@/components/Card/Card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/Dialog"
import { Fallback } from "@/components/Fallback"
import { Input } from "@/components/Input"
import { ProgressBar } from "@/components/ProgressBar"
import { Typography } from "@/components/Typography"
import { useHomeInfo } from "@/hooks/useHomeInfo"
import { useWaterConsumption } from "@/hooks/useWaterConsumption"
import { weekdayChooser, WeekDays } from "@/utils/weekdaychooser"

interface Water {
  water: string
}

export function Home() {
  const { isLoading, user, avaliacoes } = useHomeInfo()

  const { addWater, currentAmount } = useWaterConsumption()
  const { register, handleSubmit, watch, reset } = useForm<Water>()

  const waterInput = watch("water")

  const onSubmit = (data: Water) => {
    addWater(currentAmount + Number(data.water))
    setOpen(false)
    reset()
  }

  const [open, setOpen] = useState(false)

  if (isLoading) {
    return <Fallback />
  }

  const ultimaAvaliacao = avaliacoes[0]
  const treinos = ultimaAvaliacao.treinos
  const dietas = ultimaAvaliacao.dietas

  return (
    <div>
      <header>
        <Typography
          as="h2"
          className="text-neutral-900"
          variant="sm"
          type="heading"
        >
          Olá, {user!.nome}
        </Typography>
      </header>
      <div className="mt-5 space-y-4">
        {/* Treinos */}
        {treinos && (
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
              {treinos.length > 0 &&
                treinos.map((treino, key) => {
                  return (
                    <div key={key} className="snap-start snap-always">
                      <Link to={`/workout/${treino.id}`}>
                        <Card
                          info={
                            <>
                              <Card.Title>{treino.titulo}</Card.Title>
                              <Card.Subtitle>
                                {weekdayChooser(treino.dias as WeekDays[])}
                              </Card.Subtitle>
                            </>
                          }
                          image={<Card.Image src={`workouts/${key + 1}.jpg`} />}
                        />
                      </Link>
                    </div>
                  )
                })}
            </div>
          </section>
        )}
        {/* Dietas */}
        {dietas && (
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
              {dietas.length > 0 &&
                dietas.map((dieta, key) => {
                  return (
                    <div key={key} className="snap-start snap-always">
                      <Link to={`diet/${dieta.id}`}>
                        <Card
                          info={
                            <>
                              <Card.Title>{dieta.titulo}</Card.Title>
                              <Card.Subtitle>
                                {dieta.is_dia_de_treino
                                  ? "Dias de treino"
                                  : "Dias de descanso"}
                              </Card.Subtitle>
                            </>
                          }
                        />
                      </Link>
                    </div>
                  )
                })}
            </div>
            <Link to="/recipes">
              <Button variant="filled">Acessar minhas receitas</Button>
            </Link>
          </section>
        )}
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
              Meta: {currentAmount}ml/3000ml
            </Typography>
          </header>
          <ProgressBar value={currentAmount / 30} />
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button disabled={3000 - currentAmount === 0} variant="filled">
                Registrar consumo de água
              </Button>
            </DialogTrigger>
            <DialogContent>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                <Typography variant="sm" type="heading">
                  Adicionar
                </Typography>
                <Typography variant="sm" type="body">
                  {3000 - currentAmount > 0 &&
                    `Faltam ${
                      3000 - currentAmount
                    }ml para bater sua meta diária de água`}
                </Typography>
                <Input {...register("water")} placeholder="Ex: 2000ml" />
                <Button
                  disabled={Number(waterInput) + currentAmount > 3000}
                  variant="filled"
                >
                  Adicionar
                </Button>
              </form>
            </DialogContent>
          </Dialog>
          <Typography variant="md" type="body">
            {3000 - currentAmount === 0 &&
              "Você bateu sua meta diária de água! 🎆"}
          </Typography>
        </section>
      </div>
    </div>
  )
}

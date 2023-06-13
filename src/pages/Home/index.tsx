import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { IUserData } from "@/@types/user"
import { Button } from "@/components/Button"
import { Card } from "@/components/Card/Card"
import { LazyLoading } from "@/components/Card/LazyLoading"
import { Dialog } from "@/components/Dialog"
import { Input } from "@/components/Input"
import { ProgressBar } from "@/components/ProgressBar"
import { Typography } from "@/components/Typography"
import { useUserData } from "@/hooks/useUserData"
import { useWaterConsumption } from "@/hooks/useWaterConsumption"
import { weekdayChooser, WeekDays } from "@/utils/weekdaychooser"

export function Home() {
  const { data } = useUserData()
  const { addWater } = useWaterConsumption()

  const { nome, avaliacoes } = data as IUserData

  const treinos = avaliacoes[0]?.treinos
  const dietas = avaliacoes[0]?.dietas

  const [updatedAmount, setCurrentAmount] = useState(() => {
    const waterConsumption = localStorage.getItem("waterConsumption")

    if (waterConsumption) {
      const { amount } = JSON.parse(waterConsumption)
      return amount
    }

    return 0
  })

  useEffect(() => {
    addWater(updatedAmount)
  }, [updatedAmount])

  return (
    <div>
      <header>
        <Typography
          as="h2"
          className="text-neutral-900"
          variant="sm"
          type="heading"
        >
          Olá, {nome}
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
              Meta: {updatedAmount}ml/3000ml
            </Typography>
          </header>
          <ProgressBar value={updatedAmount / 30} />
          <Dialog trigger="Registrar consumo de água" close="Adicionar">
            <Input
              maxLength={4}
              max={3000}
              onChange={(e) => setCurrentAmount(Number(e.target.value))}
              placeholder="Ex: 1000ml"
            />
          </Dialog>
        </section>
      </div>
    </div>
  )
}

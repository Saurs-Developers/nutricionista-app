import { useState } from "react"
import { useForm } from "react-hook-form"

import { Button } from "@/components/Button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/Dialog"
import { Fallback } from "@/components/Fallback"
import { Input } from "@/components/Input"
import { ProgressBar } from "@/components/ProgressBar"
import { Typography } from "@/components/Typography"
import { useHomeInfo } from "@/hooks/useHomeInfo"
import { useWaterConsumption } from "@/hooks/useWaterConsumption"

import { FeatureSection } from "./FeatureSection"

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
      {ultimaAvaliacao ? (
        <FeatureSection data={ultimaAvaliacao} />
      ) : (
        <div className="my-12">
          <Typography type="body" variant="lg">
            Avaliação em andamento... 🏗️
          </Typography>
        </div>
      )}
      <section className="space-y-4">
        <header>
          <Typography className="text-neutral-700" variant="xs" type="heading">
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
  )
}

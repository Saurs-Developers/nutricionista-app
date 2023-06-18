import { useState } from "react"
import { useForm } from "react-hook-form"

import { Avaliacao } from "@/@types/user"
import { Button } from "@/components/Button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/Dialog"
import { Input } from "@/components/Input"
import { ProgressBar } from "@/components/ProgressBar"
import { Typography } from "@/components/Typography"
import { useWaterConsumption } from "@/hooks/useWaterConsumption"

interface Water {
  water: string
}

export function WaterConsumption({ data }: { data: Avaliacao }) {
  const { addWater, currentAmount } = useWaterConsumption()
  const { register, handleSubmit, reset } = useForm<Water>()

  const onSubmit = (data: Water) => {
    addWater(currentAmount + Number(data.water))
    setOpen(false)
    reset()
  }

  const [open, setOpen] = useState(false)

  const water_objective = data?.consumo_ideal_agua
    ? data.consumo_ideal_agua
    : 2000

  const objectiveSuccess = water_objective - currentAmount <= 0

  return (
    <section className="space-y-4 mt-4">
      <header>
        <Typography className="text-neutral-700" variant="xs" type="heading">
          Consumo diário de água
        </Typography>
        <Typography className="text-neutral-600" variant="sm" type="body">
          Meta: {currentAmount}ml/{water_objective}ml
        </Typography>
      </header>
      <ProgressBar
        value={
          !objectiveSuccess ? currentAmount / (water_objective / 100) : 100
        }
      />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="filled">Registrar consumo de água</Button>
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
              {water_objective - currentAmount > 0
                ? `Faltam ${
                    water_objective - currentAmount
                  }ml para bater sua meta diária de água`
                : "Você já bateu sua meta diária de água! 🎆"}
            </Typography>
            <Input
              maxLength={4}
              {...register("water")}
              placeholder="Ex: 2000ml"
            />
            <Button variant="filled">Adicionar</Button>
          </form>
        </DialogContent>
      </Dialog>
      <Typography variant="md" type="body">
        {water_objective - currentAmount <= 0 &&
          "Você bateu sua meta diária de água! 🎆"}
      </Typography>
    </section>
  )
}

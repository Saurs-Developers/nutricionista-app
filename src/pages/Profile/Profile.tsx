import { FilePdf } from "phosphor-react"

import { Button } from "@/components/Button"
import { Select } from "@/components/Select"
import { Typography } from "@/components/Typography"

const options = ["21/03 -  21/05", "21/05 -  21/07"]

export function Profile() {
  return (
    <div>
      <header>
        <Typography className="text-neutral-900" variant="sm" type="heading">
          Perfil
        </Typography>
      </header>
      <div className="fle flex-col gap-4 mt-5 space-y-4">
        <section className="flex gap-5 items-center">
          <div className="flex p-2 items-center justify-center bg-brand-primary rounded-full">
            <img
              className="rounded-full"
              width={56}
              height={56}
              src="https://github.com/JefteMedeiros.png"
              alt=""
            />
          </div>
          <div className="space-y-1">
            <Typography
              className="text-neutral-700"
              variant="xxs"
              type="heading"
            >
              Jefté Medeiros
            </Typography>
            <Typography
              className="text-neutral-600"
              variant="xxs"
              type="heading"
            >
              19 anos, 83kg, 1.83m
            </Typography>
          </div>
        </section>
      </div>
      <div className="my-6 space-y-4">
        <Typography className="text-neutral-700" type="body" variant="xl">
          Avaliação antropométrica
        </Typography>
        <Typography className="text-neutral-700" variant="xxs" type="heading">
          Objetivo: Ganhar massa e perder gordura
        </Typography>
        <Select
          options={options.map((option, i) => {
            return <option key={i}>{option}</option>
          })}
          label="Período"
        />
        <Button variant="filled">
          Exportar em PDF <FilePdf size={24} />
        </Button>
        <Typography className="text-neutral-600 mt-6" type="body" variant="md">
          Fim do acompanhamento atual: 21/05
        </Typography>
      </div>
      <img className="w-56 m-auto mt-4" src="athletics.png" alt="" />
    </div>
  )
}

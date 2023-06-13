import { FilePdf } from "phosphor-react"

import { IUserData } from "@/@types/user"
import { Button } from "@/components/Button"
import { Select } from "@/components/Select"
import { Typography } from "@/components/Typography"
import { useUserData } from "@/hooks/useUserData"
import { calculateAge } from "@/utils/calculateAge"

export function Profile() {
  const { data, isLoading } = useUserData()

  const { nome, avaliacoes, data_nascimento } = data as IUserData

  const ultimaAvaliacao = avaliacoes[0]

  const date = new Date(ultimaAvaliacao.vencimento)
  const fimAcompanhamento = date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  })

  return (
    <div>
      <header>
        <Typography
          as="h2"
          className="text-neutral-900"
          variant="sm"
          type="heading"
        >
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
              src="/user.svg"
              alt=""
            />
          </div>
          <div className="space-y-1">
            <Typography
              className="text-neutral-700"
              variant="xxs"
              type="heading"
            >
              {nome}
            </Typography>
            <Typography
              className="text-neutral-600"
              variant="xxs"
              type="heading"
            >
              {calculateAge(data_nascimento)} anos
              {ultimaAvaliacao &&
                `, ${ultimaAvaliacao?.peso}kg, ${ultimaAvaliacao.altura}m`}
            </Typography>
          </div>
        </section>
      </div>
      <div className="my-6 space-y-4">
        <Typography className="text-neutral-700" type="body" variant="xl">
          Avaliação antropométrica
        </Typography>
        {ultimaAvaliacao.objetivo && (
          <Typography className="text-neutral-700" variant="xxs" type="heading">
            Objetivo: Ganhar massa e perder gordura
          </Typography>
        )}
        <Select
          options={avaliacoes.map((option, i) => {
            return <option key={i}>{option.created_at}</option>
          })}
          label="Período"
        />
        <Button variant="filled">
          Exportar em PDF <FilePdf size={24} />
        </Button>
        {ultimaAvaliacao.vencimento && (
          <Typography
            className="text-neutral-600 mt-6"
            type="body"
            variant="md"
          >
            Fim do acompanhamento atual: {fimAcompanhamento}
          </Typography>
        )}
      </div>
      <img className="w-56 m-auto mt-4" src="athletics.png" alt="" />
    </div>
  )
}

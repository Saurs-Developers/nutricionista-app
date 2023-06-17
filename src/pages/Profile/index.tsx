import { FilePdf } from "phosphor-react"

import { Button } from "@/components/Button"
import { Fallback } from "@/components/Fallback"
import { Select } from "@/components/Select"
import { Typography } from "@/components/Typography"
import { useProfileInfo } from "@/hooks/useProfileInfo"
import { calculateAge } from "@/utils/calculateAge"
import { dateFormatter } from "@/utils/dateFormatter"

export function Profile() {
  const { isLoading, client, avaliacoes } = useProfileInfo()

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
              {client!.nome}
            </Typography>
            <Typography
              className="text-neutral-600"
              variant="xxs"
              type="heading"
            >
              {calculateAge(client!.data_nascimento)} anos
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
          options={avaliacoes.map((avaliacao, i) => {
            return (
              <option key={i}>
                {dateFormatter(avaliacao.created_at)} -{" "}
                {dateFormatter(avaliacao.vencimento)}
              </option>
            )
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
            Fim do acompanhamento atual:{" "}
            {dateFormatter(ultimaAvaliacao.vencimento)}
          </Typography>
        )}
      </div>
    </div>
  )
}

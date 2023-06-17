import { Fallback } from "@/components/Fallback"
import { Typography } from "@/components/Typography"
import { useHomeInfo } from "@/hooks/useHomeInfo"

import { FeatureSection } from "./FeatureSection"
import { WaterConsumption } from "./WaterConsumption"

export function Home() {
  const { isLoading, user, avaliacoes } = useHomeInfo()

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
      <WaterConsumption data={ultimaAvaliacao} />
    </div>
  )
}

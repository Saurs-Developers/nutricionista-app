import { Avaliacao, PlanoEnum } from "@/@types/user"
import { Typography } from "@/components/Typography"

import { DietCard } from "./DietCard"
import { WorkoutCard } from "./WorkoutCard"

export function FeatureSection({ data }: { data: Avaliacao }) {
  const plano = data.plano

  if (plano === PlanoEnum.BASIC) {
    return (
      <div className="mt-5 space-y-4">
        {data.treinos.length > 0 ? (
          <WorkoutCard data={data} />
        ) : (
          <Typography
            className="text-neutral-700 my-6"
            variant="md"
            type="body"
          >
            Criação do treino em andamento...🏗️
          </Typography>
        )}
      </div>
    )
  }

  if (plano === PlanoEnum.PRO) {
    return (
      <div className="mt-5 space-y-4">
        {data.dietas.length > 0 ? (
          <DietCard data={data} />
        ) : (
          <Typography
            className="text-neutral-700 my-6"
            variant="md"
            type="body"
          >
            Criação da dieta em andamento...🏗️
          </Typography>
        )}
      </div>
    )
  }

  if (PlanoEnum.ULTIMATE) {
    return (
      <>
        <div className="mt-5 space-y-4">
          {data.treinos.length > 0 ? (
            <WorkoutCard data={data} />
          ) : (
            <Typography
              className="text-neutral-700 my-6"
              variant="md"
              type="body"
            >
              Criação do treino em andamento...🏗️
            </Typography>
          )}
        </div>
        <div className="mt-5 space-y-4">
          {data.dietas.length > 0 ? (
            <DietCard data={data} />
          ) : (
            <Typography
              className="text-neutral-700 my-6"
              variant="md"
              type="body"
            >
              Criação da dieta em andamento...🏗️
            </Typography>
          )}
          {data && data.dietas.length > 0 && <DietCard data={data} />}
        </div>
      </>
    )
  }
}

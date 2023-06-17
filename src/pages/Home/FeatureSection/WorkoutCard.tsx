import { Link } from "react-router-dom"

import { Avaliacao } from "@/@types/user"
import { Card } from "@/components/Card/Card"
import { Typography } from "@/components/Typography"
import { weekdayChooser, WeekDays } from "@/utils/weekdaychooser"

export function WorkoutCard({ data }: { data: Avaliacao }) {
  return (
    <section className="flex flex-col">
      <header>
        <Typography className="text-neutral-700" variant="xs" type="heading">
          Meus treinos
        </Typography>
      </header>
      <div className="snap-x snap-mandatory flex gap-4 overflow-auto mt-2">
        {data.treinos.map((treino, key) => {
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
  )
}

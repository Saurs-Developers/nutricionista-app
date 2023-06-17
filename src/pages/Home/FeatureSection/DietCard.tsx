import { Link } from "react-router-dom"

import { Avaliacao } from "@/@types/user"
import { Button } from "@/components/Button"
import { Card } from "@/components/Card/Card"
import { Typography } from "@/components/Typography"

export function DietCard({ data }: { data: Avaliacao }) {
  return (
    <section>
      <header>
        <Typography className="text-neutral-700" variant="xs" type="heading">
          Minhas dietas
        </Typography>
      </header>
      <div className="snap-x snap-mandatory flex gap-4 overflow-auto mt-2 mb-4">
        {data.dietas.length > 0 &&
          data.dietas.map((dieta, key) => {
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
  )
}

import { useNavigate, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { ArrowLeft } from "phosphor-react"

import { Exercicio, Treino } from "@/@types/user"
import { apiPrivate } from "@/api/api"
import { Button } from "@/components/Button"
import { Card } from "@/components/Card/Card"
import { LazyLoading } from "@/components/Card/LazyLoading"
import { Input } from "@/components/Input"
import { Typography } from "@/components/Typography"

export function Workout() {
  const navigate = useNavigate()

  const { id } = useParams()

  const { data: treino, isLoading } = useQuery<Treino>({
    queryKey: ["treino"],
    queryFn: () => apiPrivate.get(`/v1/treinos/${id}`).then(({ data }) => data),
  })

  const exercicios = treino?.exercicios

  const hasExercicios = !isLoading && exercicios!.length > 0

  return (
    <div>
      <header className="flex items-center gap-4">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={24} className="text-brand-primary" />
        </button>
        <Input placeholder="Pesquisar" searchIcon />
      </header>
      <Typography as="h2" className="my-6" type="heading" variant="xs">
        Treino A Quadríceps
      </Typography>
      <div className="flex flex-col gap-6 mt-8">
        {isLoading ? (
          <div className="flex flex-col gap-4">
            <LazyLoading />
            <LazyLoading />
            <LazyLoading />
          </div>
        ) : hasExercicios ? (
          exercicios!.map((exercicio, key) => {
            return (
              <Card
                key={key}
                image={<Card.Image src="http://placekitten.com/340/340" />}
                info={
                  <>
                    <Card.Title>
                      {exercicio.atividade.titulo} - {exercicio.carga}kg
                    </Card.Title>
                    <Card.Subtitle>
                      {exercicio.series} séries de {exercicio.repeticoes}{" "}
                      repetições
                    </Card.Subtitle>
                    <Card.Description>{exercicio.observacao}</Card.Description>
                    <Card.Description>
                      {exercicio.tempo_descanso}s de descanso
                    </Card.Description>
                  </>
                }
                action={
                  <>
                    <Button variant="filled">Vídeo</Button>
                    <Button variant="outlined">Carga</Button>
                  </>
                }
              />
            )
          })
        ) : (
          <Typography type="body" variant="md">
            Nenhuma exercício foi encontrada.
          </Typography>
        )}
      </div>
    </div>
  )
}
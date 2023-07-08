import { Link, useNavigate, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { ArrowLeft } from "phosphor-react"

import { Treino } from "@/@types/user"
import { apiPrivate } from "@/api/api"
import { Button } from "@/components/Button"
import { Card } from "@/components/Card/Card"
import { LazyLoading } from "@/components/Card/LazyLoading"
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
      <header className="flex items-center gap-4 mb-6">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={24} className="text-brand-primary" />
        </button>
        <Typography as="h2" type="heading" variant="xs">
          Voltar
        </Typography>
      </header>
      <Typography as="h2" className="my-6" type="heading" variant="xs">
        {treino?.titulo}
      </Typography>
      <Typography as="p" className="my-6" type="body" variant="md">
        Observação: {treino?.observacao}
      </Typography>
      <Link to={"/"}>
        <Button variant="filled">Seção de mobilidade</Button>
      </Link>
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
                info={
                  <>
                    <Card.Title>{exercicio.atividade.titulo}</Card.Title>
                    <Card.Subtitle>
                      {exercicio.series} séries de {exercicio.repeticoes}{" "}
                      repetições
                    </Card.Subtitle>
                    <div className="aspect-video">
                      <iframe
                        src="https://www.youtube.com/embed/rjCxBrK_znI"
                        width="100%"
                        className="rounded-lg"
                        height="100%"
                        title="Elevação lateral unilateral"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
                        allowFullScreen
                      />
                    </div>
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
            Nenhuma exercício foi encontrado.
          </Typography>
        )}
      </div>
    </div>
  )
}

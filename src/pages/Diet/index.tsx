import { Link, useNavigate, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { ArrowLeft, Pencil } from "phosphor-react"

import { Dieta, Refeicao } from "@/@types/user"
import { apiPrivate } from "@/api/api"
import { Button } from "@/components/Button"
import { Card } from "@/components/Card/Card"
import { LazyLoading } from "@/components/Card/LazyLoading"
import { Input } from "@/components/Input"
import { Typography } from "@/components/Typography"
import {
  MeasurementUnit,
  measurementUnitChooser,
} from "@/utils/measurementUnitChooser"

export function Diet() {
  const navigate = useNavigate()

  const { id } = useParams()

  const { data: dieta, isLoading } = useQuery<Dieta>({
    queryKey: ["dieta"],
    queryFn: () => apiPrivate.get(`/v1/dietas/${id}`).then(({ data }) => data),
  })

  const refeicoes = dieta?.refeicoes

  const hasRefeicoes = !isLoading && refeicoes!.length > 0

  return (
    <div>
      <header className="flex items-center gap-4">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={24} className="text-brand-primary" />
        </button>
        <Input placeholder="Pesquisar" searchIcon />
      </header>
      <Typography as="h2" className="my-6" type="heading" variant="xs">
        {!isLoading && dieta!.titulo}
      </Typography>
      <Link to="/recipes">
        <Button variant="filled">Acessar minhas receitas</Button>
      </Link>
      <div className="flex flex-col gap-6 mt-8">
        {isLoading ? (
          <div className="flex flex-col gap-4">
            <LazyLoading />
            <LazyLoading />
            <LazyLoading />
          </div>
        ) : hasRefeicoes ? (
          refeicoes!.map((refeicao, key) => {
            return (
              <Card
                key={key}
                info={
                  <>
                    <div className="flex justify-between items-center w-full">
                      <Card.Title>{refeicao.titulo}</Card.Title>
                      <Pencil className="text-brand-primary" size={20} />
                    </div>
                    {refeicao.itens.map((item, key) => {
                      return (
                        <div key={key}>
                          {item.quantidade}{" "}
                          {measurementUnitChooser(
                            item.medida as MeasurementUnit,
                            item.quantidade,
                          )}{" "}
                          de {item.descricao}
                        </div>
                      )
                    })}
                  </>
                }
                action={
                  <>
                    <Button variant="outlined">Excluir</Button>
                    <Button variant="filled">Editar</Button>
                  </>
                }
              />
            )
          })
        ) : (
          <Typography type="body" variant="md">
            Nenhuma refeição foi encontrada.
          </Typography>
        )}
      </div>
    </div>
  )
}

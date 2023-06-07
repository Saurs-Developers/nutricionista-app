import { useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { ArrowLeft } from "phosphor-react"

import { Dieta, Refeicao } from "@/@types/user"
import { apiPrivate } from "@/api/api"
import { Button } from "@/components/Button"
import { Card } from "@/components/Card/Card"
import { Input } from "@/components/Input"
import { Typography } from "@/components/Typography"
import {
  MeasurementUnit,
  measurementUnitChooser,
} from "@/utils/measurementUnitChooser"

export function Diet() {
  const navigate = useNavigate()

  const { id } = useParams()

  const { data: res, isLoading } = useQuery({
    queryKey: ["dieta"],
    queryFn: () => apiPrivate.get(`/v1/dietas/${id}`),
  })

  const dieta: Dieta = res?.data

  useEffect(() => {
    !isLoading && console.log(dieta)
  }, [])

  return (
    <div>
      <header className="flex items-center gap-4">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={24} className="text-brand-primary" />
        </button>
        <Input placeholder="Pesquisar" searchIcon />
      </header>
      <Typography as="h2" className="my-6" type="heading" variant="xs">
        {!isLoading && dieta.titulo}
      </Typography>
      <Link to="/recipes">
        <Button variant="filled">Acessar minhas receitas</Button>
      </Link>
      <div className="flex flex-col gap-6 mt-8">
        {!isLoading &&
          dieta.refeicoes.map((refeicao, key) => {
            return (
              <Card
                key={key}
                info={
                  <>
                    <Card.Title>{refeicao.titulo}</Card.Title>
                    <Card.Subtitle>
                      {refeicao.horario_fim}h - {refeicao.horario_fim}h
                    </Card.Subtitle>
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
              />
            )
          })}
      </div>
    </div>
  )
}

import { useNavigate } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { ArrowLeft, Pencil } from "phosphor-react"

import { ReceitaResponse } from "@/@types/user"
import { apiPrivate } from "@/api/api"
import { Button } from "@/components/Button"
import { Card } from "@/components/Card/Card"
import { LazyLoading } from "@/components/Card/LazyLoading"
import { Input } from "@/components/Input"
import { Typography } from "@/components/Typography"
import { useAuth } from "@/hooks/useAuth"

export function Recipes() {
  let navigate = useNavigate()

  const { userInfo } = useAuth()

  const id = userInfo.user_id!

  const { data, isLoading } = useQuery<ReceitaResponse>({
    queryKey: ["receitas"],
    queryFn: () =>
      apiPrivate.get(`/v1/clientes/${id}/receitas`).then(({ data }) => data),
  })

  const receitas = data?.results

  const hasRecipes = !isLoading && receitas!.length > 0

  return (
    <div>
      <header className="flex items-center gap-4">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={24} className="text-brand-primary" />
        </button>
        <Input placeholder="Pesquisar" searchIcon />
      </header>
      <Typography as="h2" className="my-6" type="heading" variant="xs">
        Minhas receitas
      </Typography>
      <div className="flex flex-col gap-6">
        {isLoading ? (
          <div className="flex flex-col gap-4">
            <LazyLoading />
            <LazyLoading />
            <LazyLoading />
          </div>
        ) : hasRecipes ? (
          receitas!.map((receita, key) => {
            return (
              <Card
                key={key}
                info={
                  <>
                    <div className="flex justify-between items-center w-full">
                      <Card.Title>{receita.titulo}</Card.Title>
                      <Pencil className="text-brand-primary" size={20} />
                    </div>
                    <Card.Description>{receita.descricao}</Card.Description>
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
            Nenhuma receita foi encontrada.
          </Typography>
        )}
      </div>
    </div>
  )
}

import { useNavigate } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { ArrowLeft } from "phosphor-react"

import { ReceitaResponse } from "@/@types/user"
import { apiPrivate } from "@/api/api"
import { Card } from "@/components/Card/Card"
import { LazyLoading } from "@/components/Card/LazyLoading"
import { Typography } from "@/components/Typography"
import { useAuth } from "@/hooks/useAuth"

import { CreateRecipeAlert } from "./CreateRecipeAlert"
import { DeleteRecipeAlert } from "./DeleteRecipeAlert"
import { EditRecipeAlert } from "./EditRecipeAlert"

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
      <header className="flex items-center gap-4 mb-6">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={24} className="text-brand-primary" />
        </button>
        <Typography as="h2" type="heading" variant="xs">
          Minhas receitas
        </Typography>
      </header>
      <CreateRecipeAlert />
      <div className="flex flex-col gap-6 mt-8">
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
                    <Card.Title>{receita.titulo}</Card.Title>
                    <Card.Description>{receita.descricao}</Card.Description>
                  </>
                }
                action={
                  <>
                    <DeleteRecipeAlert id={receita.id} />
                    <EditRecipeAlert
                      id={receita.id}
                      title={receita.titulo}
                      description={receita.descricao}
                    />
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

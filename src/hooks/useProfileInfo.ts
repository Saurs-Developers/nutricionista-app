import { useQuery } from "@tanstack/react-query"

import { AvaliacaoResponse, IUserData } from "@/@types/user"
import { apiPrivate } from "@/api/api"

import { useAuth } from "./useAuth"

export function useProfileInfo() {
  const { userInfo } = useAuth()

  const id = userInfo.user_id

  const { data: client, isLoading: isLoadingClient } = useQuery<IUserData>({
    queryKey: ["clientInfo"],
    queryFn: () =>
      apiPrivate.get(`/v1/clientes/${id}`).then(({ data }) => data),
  })

  const { data: avaliacoesResponse, isLoading: isLoadingAvaliacao } =
    useQuery<AvaliacaoResponse>({
      queryKey: ["avaliacoes"],
      queryFn: () =>
        apiPrivate
          .get(`/v1/clientes/${userInfo!.user_id}/avaliacoes`)
          .then(({ data }) => data),
    })

  const isLoading = isLoadingClient || isLoadingAvaliacao

  const avaliacoes = avaliacoesResponse?.results!

  return {
    client,
    avaliacoes,
    isLoading,
  }
}

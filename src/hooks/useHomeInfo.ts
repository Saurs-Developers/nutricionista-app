import { useQuery } from "@tanstack/react-query"

import { AvaliacaoResponse, WhoAmI } from "@/@types/user"
import { apiPrivate } from "@/api/api"

import { useAuth } from "./useAuth"

export function useHomeInfo() {
  const { userInfo } = useAuth()

  const { data: user, isLoading: isLoadingUser } = useQuery<WhoAmI>({
    queryKey: ["userInfo"],
    queryFn: () => apiPrivate.get("/v1/users/me").then(({ data }) => data),
  })

  const { data: avaliacoesResponse, isLoading: isLoadingAvaliacao } =
    useQuery<AvaliacaoResponse>({
      queryKey: ["avaliacoes"],
      queryFn: () =>
        apiPrivate
          .get(`/v1/clientes/${userInfo!.user_id}/avaliacoes`)
          .then(({ data }) => data),
    })

  const isLoading = isLoadingUser || isLoadingAvaliacao

  const avaliacoes = avaliacoesResponse?.results!

  return {
    user,
    avaliacoes,
    isLoading,
  }
}

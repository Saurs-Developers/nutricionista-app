import { useMutation } from "@tanstack/react-query"

import { FirstAccessBody } from "@/@types/login"
import { apiPrivate } from "@/api/api"

export const postUserResetPasswordFirstLogin = async (
  data: FirstAccessBody,
) => {
  const token = localStorage.getItem("first-access-token")

  await apiPrivate.put("/v1/users/change-password", data, {
    headers: {
      Authorization: "Bearer " + token,
    },
  })
}

export const useUserFirstAccess = () => {
  return useMutation(
    (data: FirstAccessBody) => postUserResetPasswordFirstLogin(data),
    {},
  )
}

import { useMutation } from "@tanstack/react-query"

import { ResetPasswordBody } from "@/@types/login"
import { apiPrivate } from "@/api/api"

export const postUserResetPassword = async (data: ResetPasswordBody) => {
  const token = localStorage.getItem("first-access-token")

  await apiPrivate.put("/v1/users/change-password", data, {
    headers: {
      Authorization: "Bearer " + token,
    },
  })
}

export const useUserFirstAccess = () => {
  return useMutation(
    (data: ResetPasswordBody) => postUserResetPassword(data),
    {},
  )
}

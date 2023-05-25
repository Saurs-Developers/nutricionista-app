import { useMutation } from "@tanstack/react-query"

import { ResetPasswordBody } from "@/@types/login"
import { apiPrivate } from "@/api/api"

export const postUserResetPassword = async (data: ResetPasswordBody) => {
  const token = localStorage.getItem("forgot-password-token")

  await apiPrivate.put("/v1/users/change-password", data, {
    headers: {
      Authorization: "Bearer " + token,
    },
  })
}

export const useResetPassword = () => {
  return useMutation(
    (data: ResetPasswordBody) => postUserResetPassword(data),
    {},
  )
}

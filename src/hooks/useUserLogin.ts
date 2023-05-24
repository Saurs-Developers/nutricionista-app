import { useMutation } from "@tanstack/react-query"

import { LoginBody } from "@/@types/login"
import { api } from "@/api/api"

const postUserLogin = async (data: LoginBody) => {
  const res = await api.post("/v1/auth/login", data)
  const tokens = {
    token: res.data.token,
    refresh_token: res.data.refresh_token,
  }
  return tokens
}

export const useUserLogin = () => {
  return useMutation((data: LoginBody) => postUserLogin(data), {})
}

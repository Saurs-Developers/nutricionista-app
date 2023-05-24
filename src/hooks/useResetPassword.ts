import { ResetPasswordBody } from "@/@types/login"
import { api } from "@/api/api"

const postUserResetPassword = async (data: ResetPasswordBody) => {
  const res = await api.post("/v1/users/reset-password", data)
  const tokens = {
    token: res.data.token,
    refresh_token: res.data.refresh_token,
  }
  return tokens
}

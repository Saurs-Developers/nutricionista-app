import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import jwt_decode from "jwt-decode"

import { LoginBody } from "@/@types/login"
import { api } from "@/api/api"

interface IJwt {
  user_id: string
  user_roles: string[]
  sub: string
  iat: number
  exp: number
}

export const useAuth = () => {
  const access_token = localStorage.getItem("access-token")
  const refresh_token = localStorage.getItem("refresh-token")

  const navigate = useNavigate()

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    if (refresh_token) {
      return true
    }

    return false
  })

  const [userInfo, setUserInfo] = useState<IJwt>(() => {
    if (access_token) {
      const tokenInfo: IJwt = jwt_decode(access_token)
      return tokenInfo
    }

    return {} as IJwt
  })

  const {
    mutate: login,
    isError: loginError,
    isLoading: loginLoading,
    isSuccess,
  } = useMutation({
    mutationFn: async (data: LoginBody) => {
      const res = await api.post("/v1/auth/login", data)
      const tokens = {
        token: res.data.token,
        refresh_token: res.data.refresh_token,
      }
      return tokens
    },
    onSuccess: (data) => {
      localStorage.setItem("access-token", data.token)
      localStorage.setItem("refresh-token", data.refresh_token)
      setIsLoggedIn(true)
      window.location.reload()
    },
  })

  const logout = () => {
    localStorage.removeItem("refresh-token")
    localStorage.removeItem("access-token")
  }

  return {
    isLoggedIn,
    logout,
    userInfo,
    login,
    loginError,
    loginLoading,
    isSuccess,
  }
}

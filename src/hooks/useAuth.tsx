import { useEffect, useState } from "react"
import jwt_decode from "jwt-decode"

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

  useEffect(() => {
    console.log(isLoggedIn)
  }, [])

  const logout = () => {
    localStorage.removeItem("refresh-token")
    localStorage.removeItem("access-token")
  }

  return { isLoggedIn, logout, userInfo }
}

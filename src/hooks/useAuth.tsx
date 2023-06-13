import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import jwt_decode from "jwt-decode"

interface IJwt {
  user_id: string
  user_roles: string[]
  sub: string
  iat: number
  exp: number
}

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [userInfo, setUserInfo] = useState<IJwt>(() => {
    const access_token = localStorage.getItem("access-token")

    if (access_token) {
      const tokenInfo: IJwt = jwt_decode(access_token)
      return tokenInfo
    }

    return {} as IJwt
  })

  const navigate = useNavigate()

  const checkUserLogin = () => {
    const refresh_token = localStorage.getItem("refresh-token")

    if (!refresh_token) {
      setIsLoggedIn(false)
      navigate("/login")
    } else {
      setIsLoggedIn(true)
    }
  }

  useEffect(() => {
    checkUserLogin()
  }, [isLoggedIn])

  const logout = () => {
    localStorage.removeItem("refresh-token")
    localStorage.removeItem("access-token")
  }

  return { isLoggedIn, logout, userInfo }
}

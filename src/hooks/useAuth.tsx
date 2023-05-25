import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false)

  const navigate = useNavigate()

  const checkUserLogin = () => {
    const refresh_token = localStorage.getItem("refresh-token")
    if (!refresh_token) {
      setIsLoggedIn(false)
      navigate("/login")
    }
    setIsLoggedIn(true)
  }

  useEffect(() => {
    checkUserLogin()
  }, [isLoggedIn])

  const logout = () => {
    localStorage.removeItem("refresh-token")
    localStorage.removeItem("access-token")
  }

  return { isLoggedIn, logout }
}

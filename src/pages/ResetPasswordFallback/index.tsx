import { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

import { Fallback } from "@/components/Fallback"

export function ResetPasswordFallback() {
  const [params] = useSearchParams()
  const navigate = useNavigate()

  const token = params.get("token")
  const reason = params.get("reason")
  const origin = params.get("origin")
  const status = params.get("status")

  useEffect(() => {
    setTimeout(() => {
      if (status !== "success") {
        switch (reason) {
          case "used-token":
            navigate(`/error?reason=${reason}`)
            break
          case "expired-token":
            navigate(`/error?reason=${reason}`)
            break
          case "token-not-found":
            navigate(`/error?reason=${reason}`)
            break
          default:
            navigate(`/error?reason=${reason}`)
        }
      } else {
        switch (origin) {
          case "FORGOT_PASSWORD":
            localStorage.setItem("forgot-password-token", token!)
            navigate(`/reset-password`)
            break
          case "FIRST_ACCESS":
            localStorage.setItem("first-access-token", token!)
            navigate(`/first-access`)
            break
          default:
            navigate(`/error?reason=${reason}`)
        }
      }
    }, 500)
  }, [])

  return <Fallback />
}

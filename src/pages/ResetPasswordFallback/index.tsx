import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"

import { Fallback } from "@/components/Fallback"

export function ResetPasswordFallback() {
  const [params] = useSearchParams()

  const token = params.get("token")

  useEffect(() => {
    localStorage.setItem("first-access-token", token!)
    window.location.replace(`/first-access/`)
  }, [])

  // status: success, failed ou unknown
  // reason: valid token, used-token, expired-token, token-not-found, unknown
  //origin forgot-password ou first-access
  // token: string ou nada

  return <Fallback />
}

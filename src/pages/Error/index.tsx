import { useSearchParams } from "react-router-dom"

import { Typography } from "@/components/Typography"

const errorMeanings = {
  "expired-token":
    "O tempo para utilizar este link já expirou, você precisa solicitar outro.",
  "token-not-found": "Link inválido.",
  "used-token": "Link já utilizado, você precisa solicitar outro.",
}

type ErrorReason = keyof typeof errorMeanings

export function Error() {
  const [params] = useSearchParams()

  const reason: ErrorReason = params.get("reason") as ErrorReason

  return (
    <div className="px-[1rem] py-[2rem] h-screen w-screen flex flex-col items-center justify-center">
      <img className="w-72" src="../../no_data.png" alt="" />
      <Typography className="text-center" type="body" variant="xl">
        Erro! {errorMeanings[reason]}
      </Typography>
    </div>
  )
}

import { Link, useSearchParams } from "react-router-dom"

import { Typography } from "@/components/Typography"

const errorMeanings = {
  "expired-token":
    "O tempo para utilizar este link já expirou, você precisa solicitar outro.",
  "token-not-found": "Link inválido.",
  "used-token": "Link já utilizado, você precisa solicitar outro.",
  null: "Erro desconhecido",
}

type ErrorReason = keyof typeof errorMeanings

export function Error() {
  const [params] = useSearchParams()

  const reason: ErrorReason = params.get("reason") as ErrorReason

  return (
    <div className="px-[1rem] py-[2rem] h-screen w-screen flex flex-col items-center justify-center">
      <img src="/logo.png" className="mb-4" alt="" />
      <Typography className="text-center text-danger" type="body" variant="xl">
        Um Erro foi encontrado.
      </Typography>
      <Typography className="text-center mt-3" type="body" variant="lg">
        Código: {errorMeanings[reason]}
      </Typography>
      <Link className="text-underline mt-4" to={"/"}>
        <Typography className="underline" type="body" variant="md">
          Ir para a home
        </Typography>
      </Link>
    </div>
  )
}

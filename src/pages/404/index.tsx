import { Link } from "react-router-dom"

import { Typography } from "@/components/Typography"

export function NotFound() {
  return (
    <div className="px-[1rem] py-[2rem] h-screen w-screen flex flex-col items-center justify-center">
      <Typography className="text-brand-primary" variant="md" type="heading">
        404
      </Typography>
      <Typography type="body" variant="xl">
        Ops... página não encontrada!{" "}
      </Typography>
      <Link className="text-underline" to={"/"}>
        <Typography className="underline" type="body" variant="md">
          Ir para a home
        </Typography>
      </Link>
    </div>
  )
}

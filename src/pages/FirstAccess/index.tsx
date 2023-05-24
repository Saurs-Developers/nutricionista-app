import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Typography } from "@/components/Typography"

export function FirstAccess() {
  return (
    <div className="flex flex-col w-screen h-screen py-8 px-6">
      <Typography type="heading" variant="sm">
        Login
      </Typography>
      <div className="mt-20 flex-1 flex flex-col gap-4 items-center">
        <img className="mb-8" src="logo.png" alt="" />
        <Typography as="h2" variant="lg" type="body">
          Bem vindo! Para começar, crie uma nova senha.
        </Typography>
        <Input placeholder="Senha" />
        <Input placeholder="Confirmar senha" />
        <Button variant="filled">Confirmar</Button>
      </div>
    </div>
  )
}

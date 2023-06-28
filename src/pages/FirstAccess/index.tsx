import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { Navigate, useNavigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Typography } from "@/components/Typography"
import { useUserFirstAccess } from "@/hooks/useFirstAccess"
import { resetPasswordSchema } from "@/schemas/resetPassword"

export type FirstAccessProps = z.infer<typeof resetPasswordSchema>

export function FirstAccess() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FirstAccessProps>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onChange",
  })

  const { isLoading, isError, isSuccess, mutate: reset } = useUserFirstAccess()

  const onSubmit = async (formData: FirstAccessProps) => {
    try {
      reset({ password: formData.password })
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (isSuccess) {
      navigate("/login")
      localStorage.removeItem("first_access_token")
    } else if (isError) {
      localStorage.removeItem("first_access_token")
    }
  }, [isSuccess, isError])

  if (!localStorage.getItem("first_access_token")) {
    return <Navigate to="/login" />
  }

  return (
    <div className="flex flex-col w-screen h-screen py-8 px-6">
      <Typography type="heading" variant="sm">
        Primeiro acesso
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-32 flex-1 flex flex-col gap-4 items-center"
      >
        <img className="mb-8" src="/logo.svg" alt="" />
        <Typography as="h2" variant="lg" type="body">
          Bem vindo! Para começar, crie uma nova senha.
        </Typography>
        <Input
          label="Senha"
          type="password"
          {...register("password")}
          error={errors.password?.message as string}
          placeholder="********"
        />
        <Input
          label="Confirmar senha"
          type="password"
          {...register("password_confirmation")}
          error={errors.password_confirmation?.message as string}
          placeholder="********"
        />
        <Button
          disabled={isLoading}
          variant={!isLoading ? "filled" : "loading"}
        >
          Alterar senha
        </Button>
        {isError && (
          <span className="text-red-500">Falha ao redefinir senha!</span>
        )}
      </form>
    </div>
  )
}

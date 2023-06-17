import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Typography } from "@/components/Typography"
import { useAuth } from "@/hooks/useAuth"
import { loginSchema } from "@/schemas/login"

type LoginProps = z.infer<typeof loginSchema>

export function Login() {
  const { isLoggedIn } = useAuth()
  const { loginError, loginLoading, login } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  })

  const onSubmit = async (formData: LoginProps) => {
    try {
      login(formData)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    console.log(isLoggedIn)
  })

  return (
    <div className="flex flex-col w-screen h-screen py-8 px-6">
      <Typography type="heading" variant="sm">
        Login
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-32 flex-1 flex flex-col gap-4 items-center"
      >
        <img className="mb-8" src="/logo.png" alt="" />
        <Input
          label="Email"
          {...register("email")}
          error={errors.email?.message as string}
          placeholder="name@example.com"
        />
        <Input
          label="Senha"
          {...register("password")}
          type="password"
          error={errors.password?.message as string}
          placeholder="********"
        />
        <Button variant={loginLoading ? "loading" : "filled"}>Entrar</Button>
        {loginError && (
          <span className="text-red-500">Usuário ou senha incorretos.</span>
        )}
        <Link className="self-end underline" to="/reset-password-email">
          <Typography as="span" variant="md" type="body">
            Esqueceu sua senha?
          </Typography>
        </Link>
      </form>
    </div>
  )
}

import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Typography } from "@/components/Typography"
import { useUserLogin } from "@/hooks/useUserLogin"
import { loginSchema } from "@/schemas/login"

type LoginProps = z.infer<typeof loginSchema>

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  })

  const { data, isError, isSuccess, mutate: login, isLoading } = useUserLogin()

  const onSubmit = async (formData: LoginProps) => {
    try {
      login(formData)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("access-token", data.token)
      localStorage.setItem("refresh-token", data.refresh_token)
      window.location.replace("/home")
    }
  }, [isSuccess, isError])

  return (
    <div className="flex flex-col w-screen h-screen py-8 px-6">
      <Typography type="heading" variant="sm">
        Login
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-32 flex-1 flex flex-col gap-4 items-center"
      >
        <img className="mb-8" src="logo.png" alt="" />
        <Input
          label="Email"
          {...register("email")}
          error={errors.email?.message as string}
          placeholder="name@example.com"
        />
        <Input
          label="Senha"
          {...register("password")}
          error={errors.password?.message as string}
          placeholder="********"
        />
        <Button disabled={isLoading} variant="filled">
          Entrar
        </Button>
        {isError && (
          <span className="text-red-500">Falha ao efetuar o login!</span>
        )}
        <a className="self-end underline" href="#">
          <Typography as="span" variant="md" type="body">
            Esqueceu sua senha?
          </Typography>
        </a>
      </form>
    </div>
  )
}

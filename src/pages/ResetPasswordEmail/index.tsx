import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { ArrowLeft } from "phosphor-react"
import * as z from "zod"

import { api } from "@/api/api"
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Typography } from "@/components/Typography"
import { useAuth } from "@/hooks/useAuth"

export type SendEmailProps = z.infer<typeof sendEmailSchema>

export function ResetPasswordEmail() {
  const { isLoggedIn } = useAuth()
  const navigate = useNavigate()

  if (isLoggedIn) {
    navigate("/")
  }

  const {
    mutate: sendEmail,
    isLoading,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: (data: SendEmailProps) =>
      api.post("/v1/users/forgot-password?email=" + data.email),
  })

  const [isEmailSent, setIsEmailSent] = useState(false)

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<SendEmailProps>({
    resolver: zodResolver(sendEmailSchema),
  })

  const onSubmit = async (formData: SendEmailProps) => {
    sendEmail(formData)
  }

  useEffect(() => {
    if (isSuccess) {
      setIsEmailSent(true)
    } else if (isError) {
      setIsEmailSent(false)
    }
  }, [isSuccess, isError])

  return (
    <div className="flex flex-col w-screen h-screen py-8 px-6">
      <div className="flex items-center gap-4">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={24} />
        </button>
        <Typography type="heading" variant="sm">
          Redefinir senha
        </Typography>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-32 flex-1 flex flex-col gap-4 items-center"
      >
        <img className="mb-8" src="logo.png" alt="" />
        {isEmailSent ? (
          <Typography className="self-start" as="h2" variant="lg" type="body">
            Um e-mail de confirmação de senha foi enviado para{" "}
            <b>{getValues("email")}. </b>
            Por favor, verifique sua caixa de entrada.
          </Typography>
        ) : (
          <>
            <Typography className="self-start" as="h2" variant="lg" type="body">
              Insira seu e-mail para redefinir a senha
            </Typography>
            <Input
              label="E-mail"
              {...register("email")}
              error={errors.email?.message as string}
              placeholder="name@example.com"
            />
            <Button disabled={isLoading} variant="filled">
              Enviar e-mail
            </Button>
          </>
        )}
        {isError && (
          <span className="text-red-500">Falha ao enviar o e-mail</span>
        )}
      </form>
    </div>
  )
}

const sendEmailSchema = z.object({
  email: z.string().email({ message: "Insira um endereço de e-mail válido." }),
})

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Typography } from "@/components/Typography"
import { resetPasswordSchema } from "@/schemas/resetPassword"

export type ResetPasswordProps = z.infer<typeof resetPasswordSchema>

export function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordProps>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onChange",
  })

  const onSubmit = async (formData: ResetPasswordProps) => {
    console.log(formData)
  }

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
          label="Senha"
          {...(register("password"), { type: "password" })}
          error={errors.password?.message as string}
          placeholder="********"
        />
        <Input
          label="Confirmar senha"
          {...(register("password_confirmation"), { type: "password" })}
          error={errors.password_confirmation?.message as string}
          placeholder="********"
        />
        <Button variant="filled">Alterar senha</Button>
        {/* {isError && (
          <span className="text-red-500">Falha ao efetuar o login!</span>
        )} */}
      </form>
    </div>
  )
}

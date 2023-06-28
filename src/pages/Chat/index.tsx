import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowLeft } from "phosphor-react"
import * as z from "zod"

import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { TextArea } from "@/components/TextArea"
import { Typography } from "@/components/Typography"
import { chatSchema } from "@/schemas/chat"

import "@hookform/resolvers/zod"

export function Chat() {
  const navigate = useNavigate()

  const [isSendingMessage, setIsSendingMessage] = useState(false)

  type ChatBody = z.infer<typeof chatSchema>

  const { register, handleSubmit, reset } = useForm<ChatBody>({
    resolver: zodResolver(chatSchema),
  })

  const onSubmit = async (data: ChatBody) => {
    const message = "Olá, me chamo " + data.name + " e " + data.message

    const params = new URLSearchParams({
      phone: "5569996003366",
      text: message,
      type: "phone_number",
      app_absent: "0",
    }).toString()

    setIsSendingMessage(true)
    setTimeout(() => {
      setIsSendingMessage(false)
      window.open(`https://api.whatsapp.com/send/?${params}`, "_blank")
      reset()
    }, 1000)
  }

  return (
    <div>
      <header className="flex items-center gap-4">
        <Typography as="h2" className="mb-6" type="heading" variant="xs">
          Chat
        </Typography>
      </header>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Typography as="h2" type="body" variant="md">
          Você será redirecionado ao Whatsapp, onde poderá tirar dúvidas
          diretamente sobre o assunto desejado.
        </Typography>
        <Input {...register("name")} label="Nome" placeholder="Ex: João" />
        <TextArea
          {...register("message")}
          placeholder="Ex: Gostaria de reduzir os ovos na dieta..."
          label="Mensagem"
        />
        <Button type="submit" variant={isSendingMessage ? "loading" : "filled"}>
          Enviar
        </Button>
      </form>
      <Link to="/application-error">
        <Button className="mt-4" type="submit" variant="danger-outlined">
          Relatar erro
        </Button>
      </Link>
    </div>
  )
}

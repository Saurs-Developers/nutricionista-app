import { Link } from "react-router-dom"
import { ArrowRight } from "phosphor-react"

import { Typography } from "@/components/Typography"

const questions = [
  "Pode beber?",
  "Preciso passar fome?",
  "Posso pedir para ajustar a dieta?",
  "Posso pedir para ajustar o treino?",
  "Posso comer o que eu quiser?",
]

export function Faq() {
  return (
    <div>
      <header>
        <Typography
          as="h2"
          className="text-neutral-900"
          variant="sm"
          type="heading"
        >
          Perguntas frequentes
        </Typography>
      </header>
      <section className="flex flex-col gap-3 mt-5">
        {questions.map((question, i) => {
          return (
            <div
              key={i}
              className="shadow-sm border-2 rounded-lg flex items-center justify-between py-3 px-4"
            >
              <Typography className="text-neutral-700" type="body" variant="sm">
                {question}
              </Typography>
              <Link to="/question">
                <ArrowRight className="text-brand-primary" size={24} />
              </Link>
            </div>
          )
        })}
      </section>
    </div>
  )
}

import { Link } from "react-router-dom"
import { ArrowRight } from "phosphor-react"

import { Typography } from "@/components/Typography"
import { questions } from "@/utils/faq"

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
                {question.title}
              </Typography>
              <Link to={"/question/" + question.id}>
                <ArrowRight className="text-brand-primary" size={24} />
              </Link>
            </div>
          )
        })}
      </section>
    </div>
  )
}

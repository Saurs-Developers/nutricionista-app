import { useNavigate, useParams } from "react-router-dom"
import { ArrowLeft } from "phosphor-react"

import { Typography } from "@/components/Typography"
import { questions } from "@/utils/faq"

export function Question() {
  const navigate = useNavigate()
  const { id } = useParams()

  const question = questions.find((question) => question.id === id)

  return (
    <div>
      <button onClick={() => navigate("/faq")}>
        <ArrowLeft size={24} className="text-brand-primary" />
      </button>
      <header className="mt-4">
        <Typography
          as="h2"
          className="text-neutral-700"
          variant="xs"
          type="heading"
        >
          {question?.title}
        </Typography>
      </header>
      <Typography className="my-7" type="body" variant="md">
        {question?.answer}
      </Typography>
      {question?.link && (
        <Typography className="my-7" type="body" variant="md">
          Acesse:{" "}
          <a className="text-blue-700 underline" href={question?.link}>
            {question?.link}
          </a>
        </Typography>
      )}
    </div>
  )
}

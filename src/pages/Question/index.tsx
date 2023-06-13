import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "phosphor-react"

import { Typography } from "@/components/Typography"

export function Question() {
  const navigate = useNavigate()

  return (
    <div>
      <header className="flex items-center gap-4">
        <button onClick={() => navigate("/faq")}>
          <ArrowLeft size={24} className="text-brand-primary" />
        </button>
        <Typography
          as="h2"
          className="text-neutral-700"
          variant="xs"
          type="heading"
        >
          Pode Beber?
        </Typography>
      </header>
      <Typography className="my-7" type="body" variant="md">
        Com moderação e de preferencia aos finais de semana, o álcool não terá
        um impacto significativo em sua performance. Lembre-se, o ideal é não
        ingerir bebidas alcoólicas, mas uma cevejinha no final de semana tá
        liberado!
      </Typography>
    </div>
  )
}

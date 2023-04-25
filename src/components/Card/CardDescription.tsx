import { ReactNode } from "react"

import { Typography } from "../Typography"

import { useCardContext } from "./CardContext"

interface CardDescriptionProps {
  children: ReactNode
}

export function CardDescription({ children }: CardDescriptionProps) {
  const { inCard } = useCardContext()

  if (!inCard) {
    throw new Error("Card.* must be used within a CardProvider")
  }

  return (
    <Typography
      as="div"
      className="text-neutral-600 pt-2 flex flex-col gap-4"
      type="body"
      variant="sm"
    >
      {children}
    </Typography>
  )
}

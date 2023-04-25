import { ReactNode } from "react"

import { Typography } from "../Typography"

import { useCardContext } from "./CardContext"

interface CardTitleProps {
  children: ReactNode
}

export function CardTitle({ children }: CardTitleProps) {
  const { inCard } = useCardContext()

  if (!inCard) {
    throw new Error("Card.* must be used within a CardProvider")
  }

  return (
    <Typography
      className="text-brand-primary"
      as="h2"
      variant="xs"
      type="heading"
    >
      {children}
    </Typography>
  )
}

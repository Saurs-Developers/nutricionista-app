import { createContext, useContext } from "react"

export const CardContext = createContext<{ inCard: boolean } | null>(null)

export function useCardContext() {
  const context = useContext(CardContext)

  if (!context) {
    throw new Error("Card.* must be used within a CardProvider")
  }

  return context
}

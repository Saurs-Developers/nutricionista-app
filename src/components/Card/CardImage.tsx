import { useCardContext } from "./CardContext"

interface CardDescriptionProps {
  src: string
}

export function CardImage({ src }: CardDescriptionProps) {
  const { inCard } = useCardContext()

  if (!inCard) {
    throw new Error("Card.* must be used within a CardProvider")
  }

  return (
    <img className="h-32 object-cover w-full rounded-t-lg" src={src} alt="" />
  )
}

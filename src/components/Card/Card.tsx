import { ReactNode } from "react"

import { CardContext } from "./CardContext"
import { CardDescription } from "./CardDescription"
import { CardImage } from "./CardImage"
import { CardSubtitle } from "./CardSubtitle"
import { CardTitle } from "./CardTitle"

interface CardProps {
  image?: ReactNode
  info?: ReactNode
  action?: ReactNode
}

export function Card({ image, info, action }: CardProps) {
  return (
    <CardContext.Provider value={{ inCard: true }}>
      <div className="flex min-w-[242px] flex-col border-2 rounded-lg">
        {image}
        <div className="p-4">
          <div className="space-y-1 font-nunito">{info}</div>
          {action && (
            <div className="flex justify-between gap-4 mt-4">{action}</div>
          )}
        </div>
      </div>
    </CardContext.Provider>
  )
}

Card.Image = CardImage
Card.Title = CardTitle
Card.Subtitle = CardSubtitle
Card.Description = CardDescription

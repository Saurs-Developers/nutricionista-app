import { ReactNode } from "react"

interface FlexRowProps {
  className?: string
  children: ReactNode
}

export function FlexRow({ className, children }: FlexRowProps) {
  return <div className={`flex ${className}`}>{children}</div>
}

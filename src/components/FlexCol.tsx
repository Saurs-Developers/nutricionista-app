import { ReactNode } from "react"

interface FlexColProps {
  className?: string
  children: ReactNode
}

export function FlexCol({ className, children }: FlexColProps) {
  return <div className={`flex flex-col ${className}`}>{children}</div>
}

import { ReactNode } from "react"

const buttonVariants = {
  filled: "bg-brand-primary text-white",
  outlined: "border-2 border-brand-primary text-brand-primary",
}

const baseStyles =
  "font-nunito rounded-md h-10 w-full px-4 focus:ring active:bg-brand-darker focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 transition outline-none"

interface ButtonProps {
  variant?: "filled" | "outlined"
  children: ReactNode
}

export function Button({ variant = "filled", children }: ButtonProps) {
  return (
    <button className={`${baseStyles} ${buttonVariants[variant!]}`}>
      {children}
    </button>
  )
}

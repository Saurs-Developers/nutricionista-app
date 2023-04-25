import { ReactNode } from "react"

const buttonVariants = {
  filled:
    "bg-brand-primary text-white active:bg-brand-darker focus:ring-brand-primary",
  outlined:
    "border-2 border-brand-primary text-brand-primary focus:ring-brand-primary",
  danger: "bg-red-500 text-white active:bg-danger-darker focus:ring-red-500",
}

const baseStyles =
  "flex items-center gap-2 justify-center font-nunito rounded-md h-10 w-full px-4 focus:ring focus:ring-2 focus:ring-offset-2 transition outline-none"

interface ButtonProps {
  variant?: "filled" | "outlined" | "danger"
  children: ReactNode
  className?: string
}

export function Button({
  variant = "filled",
  children,
  className,
}: ButtonProps) {
  return (
    <button
      className={`${baseStyles} ${buttonVariants[variant!]} ${className}`}
    >
      {children}
    </button>
  )
}

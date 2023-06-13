import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react"
import { CircleNotch } from "phosphor-react"

const buttonVariants = {
  filled:
    "bg-brand-primary text-white active:bg-brand-darker focus:ring-brand-primary",
  outlined:
    "border-2 border-brand-primary active:bg-slate-100/70 text-brand-primary focus:ring-brand-primary",
  danger: "bg-red-500 text-white active:bg-danger-darker focus:ring-red-500",
  "danger-outlined":
    "text-red-500 active:bg-slate-100/70 focus:ring-red-500 border-2 border-red-500 text-red-500",
  loading: "bg-brand-primary/80 text-white active:bg-brand-darker",
}

const baseStyles =
  "flex items-center gap-2 justify-center font-nunito rounded-md h-10 w-full px-2 focus:ring focus:ring-2 focus:ring-offset-2 transition outline-none disabled:opacity-70 disabled:pointer-events-none"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outlined" | "danger" | "danger-outlined" | "loading"
  children: ReactNode
  className?: string
}

export type ButtonRef = HTMLButtonElement

export const Button = forwardRef<ButtonRef, ButtonProps>(
  ({ variant, children, className, ...props }: ButtonProps, ref) => {
    return variant === "loading" ? (
      <button
        {...props}
        ref={ref}
        disabled
        className={`${baseStyles} ${buttonVariants[variant!]} ${
          className && className
        }`}
      >
        <CircleNotch className="animate-spin" />
        {children}
      </button>
    ) : (
      <button
        {...props}
        ref={ref}
        className={`${baseStyles} ${buttonVariants[variant!]} ${
          className && className
        }`}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = "Button"

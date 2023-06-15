import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react"
import { Slot } from "@radix-ui/react-slot"
import clsx from "clsx"
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
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, children, className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    return variant === "loading" ? (
      <Comp
        ref={ref}
        disabled
        className={clsx(
          baseStyles,
          buttonVariants[variant!],
          className && className,
        )}
        {...props}
      >
        <CircleNotch className="animate-spin" />
        {children}
      </Comp>
    ) : (
      <Comp
        ref={ref}
        className={clsx(
          baseStyles,
          buttonVariants[variant!],
          className && className,
        )}
        {...props}
      >
        {children}
      </Comp>
    )
  },
)

Button.displayName = "Button"

import { ReactNode } from "react"

const headingVariants = {
  xxl: "text-[3.5rem] font-bold leading-[1.2]",
  xl: "text-[3rem] font-bold leading-[1.2]",
  lg: "text-[2.5rem] font-bold leading-[1.2]",
  md: "text-[2rem] font-bold leading-[1.3]",
  sm: "text-[1.5rem] font-bold leading-[1.4]",
  xs: "text-[1.25rem] font-bold leading-[1.4]",
  xxs: "text-[1rem] font-bold leading-[1.4]",
}

const bodyVariants = {
  xl: "text-[1.375rem] font-normal leading-[1.4]",
  lg: "text-[1.125rem] font-normal leading-[1.3]",
  md: "text-[1rem] font-normal leading-[1.3]",
  sm: "text-[0.875rem] font-normal leading-[1.3]",
  xs: "text-[0.75rem] font-normal leading-[1.3]",
}

type HeadingVariants = keyof typeof headingVariants
type BodyVariants = keyof typeof bodyVariants

interface TypographyProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
  variant: HeadingVariants | BodyVariants
  children: ReactNode
  className?: string
  type: "heading" | "body"
}

export function Typography({
  as = "p",
  children,
  className,
  type = "body",
  variant,
}: TypographyProps) {
  const Component = as

  const variantClass =
    type === "heading"
      ? headingVariants[variant as HeadingVariants]
      : bodyVariants[variant as BodyVariants]

  return (
    <Component
      className={`font-nunito ${className && className} ${variantClass}`}
    >
      {children}
    </Component>
  )
}

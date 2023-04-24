import ReactNode from "react"

const typographyClasses = {
  headings: {
    xxl: 'text-xxl font-bold leading-6',
    xl: 'text-xl font-bold leading-6',
    l: 'text-l font-bold leading-6',
    m: 'text-m font-bold leading-7',
    s: 'text-s font-bold leading-8',
    xs: 'text-xs font-bold leading-8',
    xxs: 'text-xxs font-bold leading-8',
  },
  body: {
    xl: 'text-body-xl font-normal leading-8',
    l: 'text-body-l font-normal leading-7',
    m: 'text-body-m font-normal leading-7',
    s: 'text-body-s font-normal leading-7',
    xs: 'text-body-xs font-normal leading-7',
  }
};

interface TypographyProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
  children: ReactNode
}

export function Typography({ as = "p", children }: TypographyProps) {
  Component = as 
  
  return <Component>{children}</Component>
}
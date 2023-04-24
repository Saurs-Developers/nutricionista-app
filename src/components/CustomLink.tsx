import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom"

interface CustomLinkProps extends LinkProps {
  active: string
  base: string
  // eslint-disable-next-line no-undef
}

export function CustomLink({
  children,
  to,
  active,
  base,
  ...props
}: CustomLinkProps) {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: true })

  return (
    <Link className={`${base} ${match && active}`} to={to} {...props}>
      {children}
    </Link>
  )
}

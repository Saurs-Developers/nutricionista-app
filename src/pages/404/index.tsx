import { Typography } from "@/components/Typography"

export function NotFound() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <img className="w-72" src="../../404.png" alt="" />
      <Typography type="body" variant="xl">
        Ops... página não encontrada!
      </Typography>
    </div>
  )
}

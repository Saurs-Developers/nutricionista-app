import { Typography } from "@/components/Typography"

export function NotFound() {
  return (
    <div className="px-[1rem] py-[2rem] h-screen w-screen flex flex-col items-center justify-center">
      <img className="w-72" src="../../404.png" alt="" />
      <Typography type="body" variant="xl">
        Ops... página não encontrada!
      </Typography>
    </div>
  )
}

import { Typography } from "../../components/Typography"

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full pb-10">
      <img className="w-64" src="not_found.svg" alt="" />
      <Typography
        className="text-center text-neutral-700"
        type="body"
        variant="lg"
      >
        Página não encontrada, tem certeza que é aqui mesmo?!
      </Typography>
    </div>
  )
}

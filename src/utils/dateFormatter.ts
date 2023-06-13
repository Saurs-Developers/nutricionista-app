export const dateFormatter = (date: string) => {
  const sanitizedDate = new Date(date)

  const formattedDate = sanitizedDate.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  })

  return formattedDate
}

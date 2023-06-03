export type WeekDays =
  | "SEGUNDA"
  | "TERCA"
  | "QUARTA"
  | "QUINTA"
  | "SEXTA"
  | "SABADO"
  | "DOMINGO"

const weekDayEquivalents = {
  SEGUNDA: "Segunda",
  TERCA: "Terça",
  QUARTA: "Quarta",
  QUINTA: "Quinta",
  SEXTA: "Sexta",
  SABADO: "Sábado",
  DOMINGO: "Domingo",
}

export const weekdayChooser = (weekDays: WeekDays[]) => {
  const formattedWeekDays = weekDays.map((weekDay) => {
    return weekDayEquivalents[weekDay]
  })

  return formattedWeekDays.join(", ").toString()
}

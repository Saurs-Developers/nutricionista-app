export type MeasurementUnit =
  | "COLHER_CHA"
  | "COLHER_SOPA"
  | "GRAMA"
  | "MILILITRO"
  | "XICARA"
  | "UNIDADE"

const measurementUnitEquivalents = {
  COLHER_CHA: "Colher de chá",
  COLHER_SOPA: "Colher de sopa",
  GRAMA: "g",
  MILILITRO: "ml",
  XICARA: "Xícara",
  UNIDADE: "Unidade",
}

const measurementUnitEquivalentsPlural = {
  COLHER_CHA: "Colheres de chá",
  COLHER_SOPA: "Colheres de sopa",
  GRAMA: "g",
  MILILITRO: "ml",
  XICARA: "Xícaras",
  UNIDADE: "Unidades",
}

export const measurementUnitChooser = (
  measurementUnit: MeasurementUnit,
  amount: number,
) => {
  if (amount > 1) {
    return measurementUnitEquivalentsPlural[measurementUnit]
  }
  return measurementUnitEquivalents[measurementUnit]
}

import { useEffect } from "react"

interface Water {
  amount: number
  date: Date
}

export const useWaterConsumption = () => {
  const waterConsumption: Water = JSON.parse(
    localStorage.getItem("waterConsumption")!,
  )

  useEffect(() => {
    if (!waterConsumption || waterConsumption.date < new Date()) {
      localStorage.setItem(
        "waterConsumption",
        JSON.stringify({ amount: 0, date: new Date() }),
      )
    }

    if (
      waterConsumption &&
      new Date(waterConsumption.date).getDay() < new Date().getDay()
    ) {
      localStorage.setItem(
        "waterConsumption",
        JSON.stringify({ amount: 0, date: new Date() }),
      )
    }
  }, [waterConsumption])

  const addWater = (amount: number) => {
    const updatedWaterConsumption = {
      amount: amount,
      date: new Date(),
    }

    localStorage.setItem(
      "waterConsumption",
      JSON.stringify(updatedWaterConsumption),
    )
  }

  return { addWater }
}

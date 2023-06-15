import { useEffect, useState } from "react"

interface Water {
  amount: number
  date: number
}

export const useWaterConsumption = () => {
  const waterConsumption: Water = JSON.parse(
    localStorage.getItem("waterConsumption")!,
  )

  const [currentAmount, setCurrentAmount] = useState(() => {
    if (waterConsumption) {
      return waterConsumption.amount
    }

    return 0
  })

  useEffect(() => {
    if (!waterConsumption) {
      localStorage.setItem(
        "waterConsumption",
        JSON.stringify({ amount: 0, date: new Date().getDate() }),
      )
    }

    if (waterConsumption && waterConsumption.date < new Date().getDate()) {
      localStorage.setItem(
        "waterConsumption",
        JSON.stringify({ amount: 0, date: new Date().getDate() }),
      )
      setCurrentAmount(0)
    }
  }, [waterConsumption])

  const addWater = (amount: number) => {
    const updatedWaterConsumption = {
      amount: amount,
      date: waterConsumption.date,
    }

    localStorage.setItem(
      "waterConsumption",
      JSON.stringify(updatedWaterConsumption),
    )

    setCurrentAmount(amount)
  }

  return { addWater, currentAmount, setCurrentAmount }
}

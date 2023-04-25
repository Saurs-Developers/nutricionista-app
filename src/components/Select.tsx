import { CaretDown } from "phosphor-react"

interface SelectProps {
  id?: string
  label?: string
  options: any[]
}

export function Select({ id, label, options }: SelectProps) {
  return (
    <div className="max-w-2xl rounded-lg border-none outline-none mx-auto font-nunito">
      <label
        className="font-bold text-[0.875rem] text-neutral-600 mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          className="border-2 outline-none border-neutral-400 text-neutral-600 rounded-lg focus:border-brand-primary block w-full h-12 px-4"
        >
          <option hidden selected>
            Selecionar
          </option>
          {options}
        </select>
        <div className="bg-white">
          <CaretDown
            className="absolute right-4 text-brand-primary top-1/2 -translate-y-1/2"
            size={20}
            weight="bold"
          />
        </div>
      </div>
    </div>
  )
}

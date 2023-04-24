import { MagnifyingGlass } from "phosphor-react"

interface InputProps {
  id?: string
  placeholder: string
  label?: string
  searchIcon?: boolean
}

export function Input({ placeholder, id, label, searchIcon }: InputProps) {
  return (
    <div className="font-nunito">
      {label && (
        <label
          className="font-bold text-[0.875rem] text-neutral-600 mb-2"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div className="relative w-full">
        <input
          id={id}
          placeholder={placeholder}
          className={`border-2 border-neutral-400 w-full rounded-md h-12 p-4 outline-none focus:border-brand-primary transition text-neutral-700${
            searchIcon && "max-w-[100px]"
          }`}
          type="text"
        />
        <div className="absolute top-1/2 -translate-y-1/2 right-0 rounded-md h-full w-[15%] flex items-center justify-center">
          <MagnifyingGlass
            size={20}
            className="text-brand-primary"
            weight="bold"
          />
        </div>
      </div>
    </div>
  )
}

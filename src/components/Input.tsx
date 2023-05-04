import { ForwardRefRenderFunction, HTMLAttributes } from "react"
import { MagnifyingGlass } from "phosphor-react"

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  id?: string
  placeholder: string
  label?: string
  searchIcon?: boolean
}

export type InputRef = HTMLInputElement

export const InputComponent: ForwardRefRenderFunction<InputRef, InputProps> = (
  { placeholder, id, label, searchIcon }: InputProps,
  ref,
) => {
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
      <div className="flex items-center justify-between gap-2 border-2 h-12 px-4 rounded-md border-neutral-400 focus-within:border-brand-primary transition">
        <input
          ref={ref}
          placeholder={placeholder}
          className="flex-1 outline-none"
        />
        {searchIcon && (
          <MagnifyingGlass
            className="text-brand-primary"
            size={20}
            weight="bold"
          />
        )}
      </div>
    </div>
  )
}

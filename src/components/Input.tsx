import { forwardRef, InputHTMLAttributes } from "react"
import { MagnifyingGlass } from "phosphor-react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string
  placeholder: string
  label?: string
  searchIcon?: boolean
  error?: string
}

export type InputRef = HTMLInputElement

export const Input = forwardRef<InputRef, InputProps>(
  ({ id, placeholder, label, searchIcon, error, ...props }, ref) => {
    return (
      <div className="font-nunito w-full">
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
            {...props}
            id={id}
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
        {error && <span className="mt-2 text-red-500">{error}</span>}
      </div>
    )
  },
)

Input.displayName = "Input"

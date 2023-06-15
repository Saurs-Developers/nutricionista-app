import { forwardRef, TextareaHTMLAttributes } from "react"

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id?: string
  placeholder?: string
  label?: string
  error?: string
}

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, placeholder, id, error, ...props }, ref) => {
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
        <textarea
          {...props}
          id={id}
          ref={ref}
          placeholder={placeholder}
          className="w-full border-2 h-12 p-2 outline-none text-sm rounded-md border-neutral-400 focus-within:border-brand-primary transition min-h-[8rem] resize-none"
        />
        {error && <span className="mt-2 text-red-500">{error}</span>}
      </div>
    )
  },
)

TextArea.displayName = "TextArea"

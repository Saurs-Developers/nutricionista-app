import * as Progress from "@radix-ui/react-progress"

interface ProgressBarProps {
  value: number
}

export function ProgressBar({ value }: ProgressBarProps) {
  return (
    <Progress.Root
      value={value}
      className="shadow-sm relative overflow-hidden bg-brand-primary/40 rounded-full w-full h-5 z-0"
    >
      <Progress.Indicator
        style={{
          transform: `translateX(-${100 - value}%)`,
          transition: "transform 660ms cubic-bezier(0.65, 0, 0.35, 1)",
        }}
        className={`rounded-full bg-brand-primary w-full h-full`}
      />
    </Progress.Root>
  )
}

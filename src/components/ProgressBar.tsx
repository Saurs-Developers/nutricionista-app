import * as Progress from "@radix-ui/react-progress"

interface ProgressBarProps {
  value: number
}

export function ProgressBar({ value }: ProgressBarProps) {
  return (
    <Progress.Root
      value={value}
      className="relative overflow-hidden bg-brand-primary/40 rounded-full w-full h-5 z-0"
    >
      <Progress.Indicator
        style={{ transform: `translateX(-${100 - value}%)` }}
        className={`progress-transition rounded-full bg-brand-primary w-full h-full`}
      />
    </Progress.Root>
  )
}

import { ReactNode } from "react"
import * as DialogComponent from "@radix-ui/react-dialog"

import { Button } from "./Button"

interface DialogProps {
  trigger: string
  close: string
  children: ReactNode
}

export function Dialog({ trigger, close, children }: DialogProps) {
  return (
    <DialogComponent.Root>
      <DialogComponent.Trigger asChild>
        <Button variant="filled">{trigger}</Button>
      </DialogComponent.Trigger>
      <DialogComponent.Portal>
        <DialogComponent.Overlay
          style={{
            animation: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          className="bg-zinc-900/30 fixed inset-0"
        />
        <DialogComponent.Content
          style={{
            animation: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          className="flex flex-col justify-between bg-white rounded-lg shadow-md fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 max-w-[calc(100vw-32px)] w-full min-h-[12rem] p-4 border-2"
        >
          {children}
          <DialogComponent.Close asChild>
            <Button variant="filled">{close}</Button>
          </DialogComponent.Close>
        </DialogComponent.Content>
      </DialogComponent.Portal>
    </DialogComponent.Root>
  )
}

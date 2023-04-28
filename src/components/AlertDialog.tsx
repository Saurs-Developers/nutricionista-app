import { ReactNode } from "react"
import * as AlertDialogComponent from "@radix-ui/react-alert-dialog"

import { Button } from "./Button"

interface AlertDialogProps {
  trigger: string
  action: string
  cancel: string
  children: ReactNode
}

export function AlertDialog({
  trigger,
  cancel,
  action,
  children,
}: AlertDialogProps) {
  return (
    <AlertDialogComponent.Root>
      <AlertDialogComponent.Trigger asChild>
        <Button variant="danger">{trigger}</Button>
      </AlertDialogComponent.Trigger>
      <AlertDialogComponent.Portal>
        <AlertDialogComponent.Overlay
          style={{
            animation: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          className="bg-zinc-900/30 fixed inset-0"
        />
        <AlertDialogComponent.Content
          style={{
            animation: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          className="flex flex-col justify-between bg-white rounded-lg shadow-md fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 max-w-[calc(100vw-48px)] w-full min-h-[16rem] p-4"
        >
          {children}
          <div className="flex gap-4">
            <AlertDialogComponent.Cancel asChild>
              <Button variant="outlined">{cancel}</Button>
            </AlertDialogComponent.Cancel>
            <AlertDialogComponent.Action asChild>
              <Button variant="danger">{action}</Button>
            </AlertDialogComponent.Action>
          </div>
        </AlertDialogComponent.Content>
      </AlertDialogComponent.Portal>
    </AlertDialogComponent.Root>
  )
}

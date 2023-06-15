import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react"
import * as DialogComponent from "@radix-ui/react-dialog"
import clsx from "clsx"
import { X } from "phosphor-react"

const Dialog = DialogComponent.Root

const DialogTrigger = DialogComponent.Trigger

const DialogOverlay = forwardRef<
  ElementRef<typeof DialogComponent.Overlay>,
  ComponentPropsWithoutRef<typeof DialogComponent.Overlay>
>(({ className, ...props }, ref) => (
  <DialogComponent.Overlay
    ref={ref}
    style={{ animation: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)" }}
    className={clsx("bg-black/25 inset-0 fixed", className)}
    {...props}
  />
))
DialogOverlay.displayName = DialogComponent.Overlay.displayName

const DialogContent = forwardRef<
  ElementRef<typeof DialogComponent.Content>,
  ComponentPropsWithoutRef<typeof DialogComponent.Content>
>(({ className, children, ...props }, ref) => {
  return (
    <DialogComponent.Portal>
      <DialogOverlay />
      <DialogComponent.Content
        style={{
          animation: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className={clsx(
          className,
          "bg-white rounded-lg shadow-md fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 max-w-[calc(100vw-32px)] w-full p-4",
        )}
        ref={ref}
        {...props}
      >
        {children}
        {/* <DialogComponent.Close className="absolute right-4 top-4 cursor-pointer">
          <X className="h-4 w-4" />
        </DialogComponent.Close> */}
      </DialogComponent.Content>
    </DialogComponent.Portal>
  )
})

DialogContent.displayName = "Dialog.Content"

export { Dialog, DialogContent, DialogTrigger, DialogOverlay }

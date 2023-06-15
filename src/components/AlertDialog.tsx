import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react"
import * as AlertDialogComponent from "@radix-ui/react-alert-dialog"
import clsx from "clsx"

const AlertDialog = AlertDialogComponent.Root
const Cancel = AlertDialogComponent.Cancel
const Action = AlertDialogComponent.Action
const AlertDialogTrigger = AlertDialogComponent.Trigger

const AlertDialogOverlay = forwardRef<
  ElementRef<typeof AlertDialogComponent.Overlay>,
  ComponentPropsWithoutRef<typeof AlertDialogComponent.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogComponent.Overlay
    ref={ref}
    style={{ animation: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)" }}
    className={clsx("bg-zinc-900/30 inset-0 fixed", className)}
    {...props}
  />
))
AlertDialogOverlay.displayName = AlertDialogComponent.Overlay.displayName

const AlertDialogContent = forwardRef<
  ElementRef<typeof AlertDialogComponent.Content>,
  ComponentPropsWithoutRef<typeof AlertDialogComponent.Content>
>(({ className, children, ...props }, ref) => (
  <AlertDialogComponent.Portal>
    <AlertDialogOverlay />
    <AlertDialogComponent.Content
      style={{ animation: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)" }}
      className={clsx(
        className,
        "flex flex-col justify-between bg-white rounded-lg shadow-md fixed top-1/2 left-1/2 -translate-y-1/2 min-h-[10rem] -translate-x-1/2 max-w-[calc(100vw-48px)] w-full p-4",
      )}
      ref={ref}
      {...props}
    >
      {children}
    </AlertDialogComponent.Content>
  </AlertDialogComponent.Portal>
))
AlertDialogContent.displayName = AlertDialogComponent.Content.displayName

export {
  AlertDialog,
  Action,
  Cancel,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogOverlay,
}

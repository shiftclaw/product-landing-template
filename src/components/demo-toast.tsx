"use client"

import { X, CheckCircle2, Info, AlertCircle } from "lucide-react"
import { useDemo, type ToastVariant } from "@/lib/demo-context"
import { cn } from "@/lib/utils"

const variantStyles: Record<ToastVariant, string> = {
  success: "border-green-500/50 bg-green-500/10",
  info: "border-blue-500/50 bg-blue-500/10",
  error: "border-red-500/50 bg-red-500/10",
}

const variantIcons: Record<ToastVariant, typeof CheckCircle2> = {
  success: CheckCircle2,
  info: Info,
  error: AlertCircle,
}

const variantIconColors: Record<ToastVariant, string> = {
  success: "text-green-400",
  info: "text-blue-400",
  error: "text-red-400",
}

export function DemoToast() {
  const { toasts, removeToast } = useDemo()

  if (toasts.length === 0) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => {
        const Icon = variantIcons[toast.variant]
        return (
          <div
            key={toast.id}
            className={cn(
              "flex items-center gap-3 rounded-lg border px-4 py-3 shadow-lg backdrop-blur-sm animate-in slide-in-from-right-5 fade-in duration-200",
              variantStyles[toast.variant],
            )}
          >
            <Icon className={cn("h-4 w-4 shrink-0", variantIconColors[toast.variant])} />
            <p className="text-sm font-medium">{toast.message}</p>
            <button
              onClick={() => removeToast(toast.id)}
              className="ml-2 flex h-6 w-6 shrink-0 items-center justify-center rounded hover:bg-muted/50"
              aria-label="Close notification"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        )
      })}
    </div>
  )
}

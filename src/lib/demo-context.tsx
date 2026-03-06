"use client"

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react"
import { useRouter, usePathname } from "next/navigation"

// --- Toast types ---

export type ToastVariant = "success" | "info" | "error"

export interface Toast {
  id: number
  message: string
  variant: ToastVariant
}

// --- User type ---

export interface DemoUser {
  name: string
  initials: string
  email: string
  role: string
  roleLabel: string
}

// --- Demo state ---
// Add product-specific state fields here

interface DemoState {
  user: DemoUser | null
  toasts: Toast[]
  // Add product-specific state here (e.g. clockedIn, items, requests...)
}

interface DemoContextValue extends DemoState {
  login: (user: DemoUser) => void
  logout: () => void
  addToast: (message: string, variant: ToastVariant) => void
  removeToast: (id: number) => void
  // Add product-specific actions here (e.g. clockIn, approve, addItem...)
}

const DemoContext = createContext<DemoContextValue | null>(null)

let toastCounter = 0

export function DemoProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()

  const [state, setState] = useState<DemoState>({
    user: null,
    toasts: [],
    // Add product-specific initial state here
  })

  // Redirect guard: if not logged in and not on /demo, redirect
  useEffect(() => {
    if (!state.user && pathname !== "/demo") {
      router.replace("/demo")
    }
  }, [state.user, pathname, router])

  const addToast = useCallback((message: string, variant: ToastVariant) => {
    const id = ++toastCounter
    setState((prev) => ({
      ...prev,
      toasts: [...prev.toasts.slice(-2), { id, message, variant }],
    }))
    setTimeout(() => {
      setState((prev) => ({
        ...prev,
        toasts: prev.toasts.filter((t) => t.id !== id),
      }))
    }, 3000)
  }, [])

  const removeToast = useCallback((id: number) => {
    setState((prev) => ({
      ...prev,
      toasts: prev.toasts.filter((t) => t.id !== id),
    }))
  }, [])

  const login = useCallback(
    (user: DemoUser) => {
      setState((prev) => ({
        ...prev,
        user,
        // Seed product-specific state here based on user.role
        // e.g. items: user.role === "admin" ? adminItems : userItems
      }))
      router.push("/demo/dashboard")
    },
    [router],
  )

  const logout = useCallback(() => {
    setState({
      user: null,
      toasts: [],
      // Reset product-specific state here
    })
    router.push("/demo")
  }, [router])

  // Add product-specific actions here
  // Example:
  // const doSomething = useCallback(() => {
  //   setState((prev) => ({ ...prev, ... }))
  //   addToast("Action completed", "success")
  // }, [addToast])

  const value: DemoContextValue = {
    ...state,
    login,
    logout,
    addToast,
    removeToast,
    // Add product-specific actions to value here
  }

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>
}

export function useDemo(): DemoContextValue {
  const ctx = useContext(DemoContext)
  if (!ctx) {
    throw new Error("useDemo must be used within a DemoProvider")
  }
  return ctx
}

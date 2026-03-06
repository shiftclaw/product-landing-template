"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Menu,
  X,
  LogOut,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { DemoProvider, useDemo } from "@/lib/demo-context"
import { DemoToast } from "@/components/demo-toast"

// Replace with product-specific nav items
// Import icons from lucide-react as needed
const allNavItems = [
  { label: "Dashboard", href: "/demo/dashboard", icon: LayoutDashboard },
  // { label: "Feature 1", href: "/demo/feature-1", icon: SomeIcon },
  // { label: "Feature 2", href: "/demo/feature-2", icon: AnotherIcon },
  // { label: "Admin", href: "/demo/admin", icon: Shield, adminOnly: true },
]

function DemoLayoutInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const { user, logout } = useDemo()

  // If no user and on login page, render children without sidebar
  if (!user && pathname === "/demo") {
    return <>{children}</>
  }

  // If no user on other pages, the context redirect handles it
  if (!user) {
    return null
  }

  // Filter nav items based on role
  // Adjust the filter logic for your product's roles
  const navItems = allNavItems.filter(
    (item) => !("adminOnly" in item && item.adminOnly && user.role !== "admin"),
  )

  return (
    <div className="flex h-screen bg-background">
      {/* Desktop sidebar */}
      <aside className="hidden w-64 shrink-0 border-r border-border bg-card/50 lg:flex lg:flex-col">
        <div className="flex h-14 items-center border-b border-border px-6">
          <Link href="/" className="text-lg font-bold tracking-tight">
            {/* Replace with product name */}
            Product Name
          </Link>
        </div>
        <nav className="flex-1 space-y-1 p-4">
          {navItems.map((item) => {
            const isActive =
              item.href === "/demo/dashboard"
                ? pathname === "/demo/dashboard"
                : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            )
          })}
        </nav>
        <div className="border-t border-border p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-sm font-medium">
              {user.initials}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{user.name}</p>
              <p className="truncate text-xs text-muted-foreground">{user.roleLabel}</p>
            </div>
          </div>
          <button
            onClick={logout}
            className="mt-3 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <LogOut className="h-4 w-4" />
            Switch profile
          </button>
        </div>
      </aside>

      {/* Mobile header + overlay */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-14 items-center justify-between border-b border-border px-4 lg:hidden">
          <Link href="/" className="text-lg font-bold tracking-tight">
            Product Name
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">{user.name}</span>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-muted"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </header>

        {/* Mobile nav dropdown */}
        {mobileOpen && (
          <div className="border-b border-border bg-card p-4 lg:hidden">
            <nav className="space-y-1">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/demo/dashboard"
                    ? pathname === "/demo/dashboard"
                    : pathname.startsWith(item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                )
              })}
              <button
                onClick={() => {
                  setMobileOpen(false)
                  logout()
                }}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <LogOut className="h-4 w-4" />
                Switch profile
              </button>
            </nav>
          </div>
        )}

        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <DemoProvider>
      <DemoLayoutInner>{children}</DemoLayoutInner>
      <DemoToast />
    </DemoProvider>
  )
}

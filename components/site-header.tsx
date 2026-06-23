"use client"

import { useState } from "react"
import { Menu, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "The Fragrance", href: "#fragrance" },
  { label: "Notes", href: "#notes" },
  { label: "Our Story", href: "#story" },
  { label: "Reviews", href: "#reviews" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-md">
      <div className="border-b border-border/40 bg-primary/10 py-2 text-center">
        <p className="text-[11px] uppercase tracking-[0.25em] text-primary">
          By Youssef Manssouri
        </p>
      </div>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#"
          className="font-serif text-xl font-semibold tracking-[0.2em] text-foreground"
        >
          LUMI&Egrave;RE
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            className="rounded-none bg-primary px-6 text-xs uppercase tracking-[0.15em] text-primary-foreground hover:bg-primary/90"
          >
            <a href="#buy">
              <ShoppingBag className="size-4" />
              Shop Now
            </a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/40 bg-background md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="mt-3 rounded-none bg-primary text-xs uppercase tracking-[0.15em] text-primary-foreground hover:bg-primary/90"
            >
              <a href="#buy" onClick={() => setOpen(false)}>
                Shop Now
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

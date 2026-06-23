"use client"

import { useState } from "react"
import Image from "next/image"
import { Check, ShoppingBag, Truck, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

const sizes = [
  { size: "30ml", price: 95, label: "Travel" },
  { size: "50ml", price: 145, label: "Signature", popular: true },
  { size: "100ml", price: 210, label: "Grand" },
]

export function BuySection() {
  const [selected, setSelected] = useState(1)
  const active = sizes[selected]

  return (
    <section id="buy" className="border-t border-border/50">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
        <div className="relative order-2 aspect-square overflow-hidden lg:order-1">
          <Image
            src="/perfume-hero.png"
            alt="LUMIÈRE Noir Absolu perfume bottle"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 90vw, 45vw"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-primary">
            Add to Collection
          </p>
          <h2 className="font-serif text-4xl font-medium text-balance text-foreground lg:text-5xl">
            Noir Absolu
          </h2>
          <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
            Eau de Parfum
          </p>

          <p className="mt-4 font-serif text-4xl text-primary">
            ${active.price}
          </p>

          <fieldset className="mt-8">
            <legend className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Choose your size
            </legend>
            <div className="grid grid-cols-3 gap-3">
              {sizes.map((option, index) => (
                <button
                  key={option.size}
                  type="button"
                  onClick={() => setSelected(index)}
                  aria-pressed={selected === index}
                  className={`relative flex flex-col items-center border px-3 py-4 transition-colors ${
                    selected === index
                      ? "border-primary bg-primary/10"
                      : "border-border bg-transparent hover:border-primary/60"
                  }`}
                >
                  {option.popular && (
                    <span className="absolute -top-2 rounded-none bg-primary px-2 py-0.5 text-[10px] uppercase tracking-wider text-primary-foreground">
                      Popular
                    </span>
                  )}
                  <span className="font-serif text-lg text-foreground">
                    {option.size}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    {option.label}
                  </span>
                </button>
              ))}
            </div>
          </fieldset>

          <Button
            size="lg"
            className="mt-8 w-full rounded-none bg-primary text-xs uppercase tracking-[0.2em] text-primary-foreground hover:bg-primary/90"
          >
            <ShoppingBag className="size-4" />
            Add to Bag — ${active.price}
          </Button>

          <ul className="mt-8 grid gap-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-3">
              <Check className="size-4 text-primary" />
              Complimentary samples with every order
            </li>
            <li className="flex items-center gap-3">
              <Truck className="size-4 text-primary" />
              Free carbon-neutral shipping over $100
            </li>
            <li className="flex items-center gap-3">
              <RotateCcw className="size-4 text-primary" />
              30-day fragrance guarantee
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

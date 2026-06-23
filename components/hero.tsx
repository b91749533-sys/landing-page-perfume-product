import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 pb-16 pt-12 lg:grid-cols-2 lg:gap-4 lg:px-10 lg:pb-24 lg:pt-20">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-primary">
            New &mdash; Eau de Parfum
          </p>
          <h1 className="font-serif text-5xl font-medium leading-[1.05] text-balance text-foreground sm:text-6xl lg:text-7xl">
            Noir Absolu
          </h1>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
            An opulent composition of bergamot, night-blooming jasmine and warm
            amber. The scent of golden hour, captured and bottled for those who
            leave an impression.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-none bg-primary px-8 text-xs uppercase tracking-[0.18em] text-primary-foreground hover:bg-primary/90"
            >
              <a href="#buy">Shop the Fragrance</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-none border-border bg-transparent px-8 text-xs uppercase tracking-[0.18em] text-foreground hover:bg-secondary"
            >
              <a href="#notes">Discover the Notes</a>
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 border-t border-border/50 pt-8">
            <div>
              <p className="font-serif text-3xl text-primary">50ml</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Concentration
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl text-primary">12h+</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Longevity
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl text-primary">100%</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Vegan
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative order-1 lg:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden">
            <Image
              src="/perfume-hero.png"
              alt="LUMIÈRE Noir Absolu amber-gold faceted perfume bottle on a dark surface"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 40vw"
            />
          </div>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-4 top-1/2 hidden -translate-y-1/2 rotate-90 font-serif text-sm uppercase tracking-[0.4em] text-muted-foreground lg:block"
          >
            Maison de Parfum
          </span>
        </div>
      </div>
    </section>
  )
}

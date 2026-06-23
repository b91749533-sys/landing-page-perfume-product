import Image from "next/image"

export function BrandStory() {
  return (
    <section id="story" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/perfume-lifestyle.png"
          alt=""
          fill
          aria-hidden="true"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center lg:py-36">
        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-primary">
          Our Story
        </p>
        <blockquote className="font-serif text-3xl font-medium leading-snug text-balance text-foreground lg:text-4xl">
          &ldquo;We set out to bottle a feeling &mdash; that fleeting,
          golden moment when the light turns soft and anything feels
          possible.&rdquo;
        </blockquote>
        <p className="mx-auto mt-8 max-w-xl leading-relaxed text-muted-foreground">
          Crafted in Grasse, the historic heart of perfumery, LUMIÈRE blends
          rare natural ingredients with modern artistry. Every bottle is filled,
          sealed and inspected by hand. No shortcuts, no compromise &mdash; only
          a fragrance worthy of your skin.
        </p>
        <p className="mt-8 font-serif text-lg italic text-primary">
          — Élise Moreau, Master Perfumer
        </p>
      </div>
    </section>
  )
}

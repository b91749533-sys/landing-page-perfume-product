import { Star } from "lucide-react"

const reviews = [
  {
    quote:
      "I have worn fragrance for twenty years and nothing has earned more compliments. It lasts all day and smells expensive.",
    name: "Sofia R.",
    location: "Verified Buyer",
  },
  {
    quote:
      "The jasmine and amber together are unreal. It feels intimate and bold at once. My new signature scent, without question.",
    name: "Daniel K.",
    location: "Verified Buyer",
  },
  {
    quote:
      "Bought it as a gift and immediately ordered a second bottle for myself. The packaging alone feels like a luxury experience.",
    name: "Amara T.",
    location: "Verified Buyer",
  },
]

export function Reviews() {
  return (
    <section
      id="reviews"
      className="border-t border-border/50 bg-card/40"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-primary">
            Loved by Many
          </p>
          <h2 className="font-serif text-4xl font-medium text-balance text-foreground lg:text-5xl">
            Worn and adored
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col border border-border/60 bg-background/40 p-8"
            >
              <div className="mb-5 flex gap-1 text-primary" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="flex-1 leading-relaxed text-foreground/90">
                {review.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border/50 pt-4">
                <p className="font-serif text-base text-foreground">
                  {review.name}
                </p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {review.location}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"

const notes = [
  {
    stage: "Top Notes",
    title: "First Impression",
    items: ["Calabrian Bergamot", "Pink Pepper", "Mandarin Zest"],
    description:
      "A bright, effervescent opening that sparkles on the skin and draws you in.",
  },
  {
    stage: "Heart Notes",
    title: "The Soul",
    items: ["Night Jasmine", "Bulgarian Rose", "Orris Root"],
    description:
      "A floral heart that unfolds slowly, rich and intoxicating as the hours pass.",
  },
  {
    stage: "Base Notes",
    title: "Lasting Trail",
    items: ["Amber", "Sandalwood", "Vanilla Bourbon"],
    description:
      "A warm, sensual foundation that lingers long after you have left the room.",
  },
]

export function ScentNotes() {
  return (
    <section id="notes" className="border-t border-border/50 bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden lg:aspect-[4/5]">
            <Image
              src="/perfume-notes.png"
              alt="Flat lay of bergamot, jasmine, sandalwood and amber fragrance ingredients"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 45vw"
            />
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-primary">
              The Composition
            </p>
            <h2 className="font-serif text-4xl font-medium text-balance text-foreground lg:text-5xl">
              A journey in three movements
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              Each note is layered with intention by our master perfumer,
              evolving on your skin throughout the day.
            </p>

            <div className="mt-10 flex flex-col gap-8">
              {notes.map((note) => (
                <div
                  key={note.stage}
                  className="border-l border-primary/40 pl-6"
                >
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <span className="text-xs uppercase tracking-[0.25em] text-primary">
                      {note.stage}
                    </span>
                    <span className="font-serif text-lg text-foreground">
                      {note.title}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-foreground/90">
                    {note.items.join(" · ")}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {note.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

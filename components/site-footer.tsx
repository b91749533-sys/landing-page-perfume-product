import { Button } from "@/components/ui/button"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="font-serif text-2xl tracking-[0.2em] text-foreground">
              LUMI&Egrave;RE
            </p>
            <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">
              Join our list for early access to new fragrances, private events
              and a 10% welcome offer.
            </p>
            <form className="mt-6 flex max-w-sm gap-0">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="Your email"
                className="w-full border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <Button
                type="submit"
                className="rounded-none bg-primary px-6 text-xs uppercase tracking-[0.15em] text-primary-foreground hover:bg-primary/90"
              >
                Join
              </Button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <FooterColumn
              title="Shop"
              links={["All Fragrances", "Discovery Set", "Gift Cards", "Refills"]}
            />
            <FooterColumn
              title="Maison"
              links={["Our Story", "Sustainability", "Ingredients", "Journal"]}
            />
            <FooterColumn
              title="Support"
              links={["Contact", "Shipping", "Returns", "FAQ"]}
            />
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} LUMIÈRE Maison de Parfum. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-primary">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-xs uppercase tracking-[0.2em] text-primary">{title}</h3>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

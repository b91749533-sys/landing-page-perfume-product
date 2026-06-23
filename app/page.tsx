import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ScentNotes } from "@/components/scent-notes"
import { BrandStory } from "@/components/brand-story"
import { Reviews } from "@/components/reviews"
import { BuySection } from "@/components/buy-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="fragrance">
        <Hero />
        <ScentNotes />
        <BrandStory />
        <Reviews />
        <BuySection />
      </main>
      <SiteFooter />
    </>
  )
}

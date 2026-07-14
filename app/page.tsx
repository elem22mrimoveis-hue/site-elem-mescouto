import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Solutions } from "@/components/solutions"
import { SpeakingTopics } from "@/components/speaking-topics"
import { Testimonials } from "@/components/testimonials"
import { CtaSection } from "@/components/cta-section"

export default function Page() {
  return (
    <main>
      <Hero />

      <About />

      <Solutions />

      <SpeakingTopics />

      <Testimonials />

      <CtaSection />
    </main>
  )
}

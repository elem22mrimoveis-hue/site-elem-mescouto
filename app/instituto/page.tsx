import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Method } from "@/components/method"
import { Solutions } from "@/components/solutions"
import { SpeakingTopics } from "@/components/speaking-topics"
import { CtaSection } from "@/components/cta-section"

export default function Page() {
  return (
    <main>
      <Hero />

      <About />

      <Method />

      <Solutions />

      <SpeakingTopics />

      {/* Depoimentos serão publicados conforme autorização dos clientes. */}

      <CtaSection />
    </main>
  )
}

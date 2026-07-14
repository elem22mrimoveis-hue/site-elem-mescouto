import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SpeakingTopics } from "@/components/speaking-topics"
import { CtaSection } from "@/components/cta-section"
import { Building2, Users, GraduationCap } from "lucide-react"

export const metadata: Metadata = {
  title: "Palestras | Elem Mescouto",
  description:
    "Palestras corporativas inspiradoras sobre liderança, desenvolvimento humano, cultura organizacional e o futuro do trabalho.",
}

const audiences = [
  {
    icon: Building2,
    title: "Empresas e Corporações",
    description:
      "Eventos internos, convenções e encontros de liderança que precisam inspirar e mobilizar times.",
  },
  {
    icon: Users,
    title: "Fóruns de RH e Eventos",
    description:
      "Congressos, fóruns e encontros voltados a pessoas, cultura e gestão de talentos.",
  },
  {
    icon: GraduationCap,
    title: "Instituições de Ensino",
    description:
      "Palestras para estudantes, docentes e gestores sobre carreira, propósito e futuro do trabalho.",
  },
]

export default function PalestrasPage() {
  return (
    <main>
      <PageHero
        eyebrow="Palestras"
        title="Palestras que inspiram pessoas e movem organizações."
        description="Conteúdos que conectam propósito, liderança e resultados, desenhados para gerar reflexão e ação."
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-accent">
              Para quem
            </p>
            <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              Experiências sob medida para cada público
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="rounded-sm border border-border bg-card p-8"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-sm bg-accent/15 text-accent">
                  <audience.icon className="size-6" />
                </span>
                <h3 className="mt-6 font-serif text-xl font-semibold text-card-foreground">
                  {audience.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SpeakingTopics />
      <CtaSection />
    </main>
  )
}

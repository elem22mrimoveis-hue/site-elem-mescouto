import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Differentiators } from "@/components/differentiators"
import { CtaSection } from "@/components/cta-section"
import { GraduationCap, Heart, Lightbulb, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Sobre | Elem Mescouto",
  description:
    "Conheça a trajetória de Elem Mescouto: administradora, educadora, mentora e empreendedora dedicada ao desenvolvimento humano e à gestão estratégica.",
}

const values = [
  {
    icon: Heart,
    title: "Propósito",
    description:
      "Acredito que pessoas desenvolvidas transformam organizações e sociedades.",
  },
  {
    icon: Lightbulb,
    title: "Conhecimento",
    description:
      "A busca contínua por aprendizado é o motor do crescimento sustentável.",
  },
  {
    icon: Users,
    title: "Liderança Humanizada",
    description:
      "Líderes que cuidam das pessoas constroem resultados duradouros.",
  },
  {
    icon: GraduationCap,
    title: "Educação",
    description:
      "A educação é a ferramenta mais poderosa de transformação real.",
  },
]

export default function SobrePage() {
  return (
    <main>
      <PageHero
        eyebrow="Sobre Elem Mescouto"
        title="Uma trajetória construída por propósito, educação e transformação."
        description="Administradora, educadora, mentora e empreendedora — dedicada a conectar estratégia, aprendizagem e crescimento humano."
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-sm border border-border shadow-sm">
            <img
              src="/elem-mescouto.png"
              alt="Retrato de Elem Mescouto"
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>

          <div>
            <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              Minha história
            </h2>
            <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                Sou Elem Mescouto, administradora, educadora, mentora e
                empreendedora. Minha trajetória foi construída pela superação,
                pela busca contínua por conhecimento e pela convicção de que
                pessoas desenvolvidas transformam organizações e sociedades.
              </p>
              <p>
                Ao longo da minha caminhada, atuei no empreendedorismo, na
                educação superior, na formação de profissionais e no
                desenvolvimento de líderes, conectando estratégia, aprendizagem
                e crescimento humano.
              </p>
              <p>
                Hoje ajudo empresas, gestores e profissionais a desenvolver
                competências, fortalecer lideranças e construir resultados
                sustentáveis, sempre com uma abordagem que une rigor técnico e
                sensibilidade humana.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-accent">
              Meus valores
            </p>
            <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              Princípios que orientam meu trabalho
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-sm border border-border bg-card p-7"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-sm bg-accent/15 text-accent">
                  <value.icon className="size-5" />
                </span>
                <h3 className="mt-5 font-serif text-lg font-semibold text-card-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Differentiators />
      <CtaSection />
    </main>
  )
}

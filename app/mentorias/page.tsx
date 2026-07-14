import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { CtaSection } from "@/components/cta-section"
import {
  ArrowRight,
  Compass,
  Target,
  Users,
  CheckCircle2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Mentorias | Elem Mescouto",
  description:
    "Mentorias individuais e em grupo para gestores, líderes e profissionais que desejam crescer com propósito, estratégia e resultados.",
}

const programs = [
  {
    icon: Target,
    title: "Mentoria Executiva",
    description:
      "Acompanhamento individual para gestores e executivos que buscam alto desempenho, clareza estratégica e desenvolvimento de liderança.",
    points: [
      "Diagnóstico de competências e metas",
      "Encontros individuais estruturados",
      "Plano de desenvolvimento personalizado",
    ],
  },
  {
    icon: Users,
    title: "Mentoria de Lideranças",
    description:
      "Programa para times de liderança fortalecerem cultura, comunicação e tomada de decisão com base em propósito e resultados.",
    points: [
      "Encontros em grupo orientados a desafios",
      "Ferramentas práticas de gestão de pessoas",
      "Acompanhamento de evolução do time",
    ],
  },
  {
    icon: Compass,
    title: "Mentoria de Carreira",
    description:
      "Para profissionais que desejam direcionar a carreira com clareza, autoconhecimento e visão estratégica do próprio futuro.",
    points: [
      "Mapeamento de objetivos profissionais",
      "Desenvolvimento de competências-chave",
      "Estratégia de posicionamento e crescimento",
    ],
  },
]

const steps = [
  {
    number: "01",
    title: "Conversa inicial",
    description:
      "Entendemos seu momento, desafios e objetivos para definir o foco da mentoria.",
  },
  {
    number: "02",
    title: "Plano de desenvolvimento",
    description:
      "Desenhamos juntos um plano personalizado com metas claras e mensuráveis.",
  },
  {
    number: "03",
    title: "Encontros de mentoria",
    description:
      "Sessões estruturadas que combinam estratégia, prática e acompanhamento contínuo.",
  },
  {
    number: "04",
    title: "Evolução e resultados",
    description:
      "Acompanhamos os avanços e ajustamos a rota para garantir resultados sustentáveis.",
  },
]

export default function MentoriasPage() {
  return (
    <main>
      <PageHero
        eyebrow="Mentorias"
        title="Desenvolvimento com propósito, estratégia e resultados."
        description="Mentorias individuais e em grupo para gestores, líderes e profissionais que desejam crescer e gerar impacto real."
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {programs.map((program) => (
              <div
                key={program.title}
                className="flex flex-col rounded-sm border border-border bg-card p-8"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-sm bg-accent/15 text-accent">
                  <program.icon className="size-6" />
                </span>
                <h2 className="mt-6 font-serif text-xl font-semibold text-card-foreground">
                  {program.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {program.description}
                </p>
                <ul className="mt-6 space-y-3 border-t border-border pt-6">
                  {program.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-accent">
              Como funciona
            </p>
            <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              Uma jornada estruturada de evolução
            </h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number}>
                <span className="font-serif text-4xl font-semibold text-accent">
                  {step.number}
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a
              href="https://wa.me/5584986751530"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Quero iniciar minha mentoria
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  )
}

import {
  Building2,
  GraduationCap,
  HeartHandshake,
  Compass,
  Wrench,
  TrendingUp,
} from "lucide-react"

const differentiators = [
  {
    icon: Building2,
    title: "Experiência Empresarial Real",
    description:
      "Vivência prática no empreendedorismo e na gestão, conectando teoria aos desafios reais das organizações.",
  },
  {
    icon: GraduationCap,
    title: "Formação Acadêmica Multidisciplinar",
    description:
      "Base sólida em administração e educação, unindo conhecimento técnico e visão humana.",
  },
  {
    icon: HeartHandshake,
    title: "Liderança Humanizada",
    description:
      "Desenvolvimento de líderes que inspiram, engajam e cuidam das pessoas e dos resultados.",
  },
  {
    icon: Compass,
    title: "Visão Estratégica",
    description:
      "Programas que partem dos objetivos do negócio e se traduzem em indicadores claros.",
  },
  {
    icon: Wrench,
    title: "Aplicação Prática",
    description:
      "Metodologias ativas e vivenciais que geram aprendizagem aplicável ao dia a dia.",
  },
  {
    icon: TrendingUp,
    title: "Crescimento Sustentável",
    description:
      "Foco em resultados consistentes e duradouros para pessoas e organizações.",
  },
]

export function Differentiators() {
  return (
    <section id="diferenciais" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-accent">
              Diferenciais
            </p>
            <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              Por que escolher trabalhar com a Elem
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Um trabalho que une rigor técnico, sensibilidade humana e foco em
              resultados sustentáveis para a sua organização.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
            {differentiators.map((item) => (
              <div key={item.title} className="bg-card p-8">
                <span className="flex size-11 items-center justify-center rounded-sm bg-accent/15 text-accent">
                  <item.icon className="size-5" />
                </span>
                <h3 className="mt-5 font-serif text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

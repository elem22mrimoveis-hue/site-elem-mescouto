import {
  Briefcase,
  GraduationCap,
  Users,
  Presentation,
  Mic,
  Target,
} from "lucide-react"

const solutions = [
  {
    icon: Briefcase,
    title: "Mentoria Executiva",
    description:
      "Acompanhamento individual para gestores e executivos que buscam alto desempenho com propósito.",
  },
  {
    icon: GraduationCap,
    title: "Educação Corporativa",
    description:
      "Trilhas de aprendizagem e universidades corporativas alinhadas à estratégia do negócio.",
  },
  {
    icon: Users,
    title: "Desenvolvimento de Lideranças",
    description:
      "Formação de líderes que inspiram, engajam e constroem culturas organizacionais saudáveis.",
  },
  {
    icon: Presentation,
    title: "Treinamentos Corporativos",
    description:
      "Capacitações in company customizadas para times, áreas e desafios específicos.",
  },
  {
    icon: Mic,
    title: "Palestras Corporativas",
    description:
      "Palestras inspiradoras para empresas e eventos sobre pessoas, liderança e estratégia.",
  },
  {
    icon: Target,
    title: "Gestão Estratégica",
    description:
      "Planejamento e gestão de pessoas conectados a metas, indicadores e resultados sustentáveis.",
  },
]

export function Solutions() {
  return (
    <section id="solucoes" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-accent">
            Soluções
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Soluções para pessoas, líderes e organizações
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Programas e serviços desenhados para empresas, gestores,
            instituições de ensino e fóruns de RH que desejam evoluir através das
            pessoas.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col gap-4 bg-card p-8 transition-colors hover:bg-card/60"
            >
              <span className="flex size-12 items-center justify-center rounded-sm bg-accent/15 text-accent">
                <item.icon className="size-6" />
              </span>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
          <div className="flex flex-col justify-center gap-4 bg-primary p-8 text-primary-foreground">
            <h3 className="font-serif text-xl font-semibold">
              Vamos construir juntos?
            </h3>
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              Soluções personalizadas para o momento da sua organização.
            </p>
            <a
              href="#contato"
              className="mt-2 text-sm font-medium text-accent underline-offset-4 hover:underline"
            >
              Entre em contato →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

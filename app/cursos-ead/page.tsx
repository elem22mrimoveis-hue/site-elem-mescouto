import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { CtaSection } from "@/components/cta-section"
import {
  ArrowRight,
  Clock,
  PlayCircle,
  Award,
  Infinity as InfinityIcon,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Cursos EAD | Elem Mescouto",
  description:
    "Cursos online de liderança, desenvolvimento humano, gestão e educação corporativa para aprender no seu ritmo, com aplicação prática.",
}

const benefits = [
  {
    icon: PlayCircle,
    title: "100% online",
    description: "Acesse de qualquer lugar, no computador ou celular.",
  },
  {
    icon: Clock,
    title: "No seu ritmo",
    description: "Estude quando quiser, com flexibilidade total.",
  },
  {
    icon: Award,
    title: "Certificado",
    description: "Receba certificado de conclusão em cada curso.",
  },
  {
    icon: InfinityIcon,
    title: "Acesso vitalício",
    description: "Revise o conteúdo sempre que precisar.",
  },
]

const courses = [
  {
    tag: "Liderança",
    title: "Liderança Humanizada na Prática",
    description:
      "Desenvolva uma liderança que engaja, inspira e gera resultados sustentáveis com as pessoas.",
    level: "Intermediário",
    lessons: "24 aulas",
  },
  {
    tag: "Desenvolvimento",
    title: "Desenvolvimento Humano e Protagonismo",
    description:
      "Ferramentas de autoconhecimento e competências socioemocionais para crescer com propósito.",
    level: "Iniciante",
    lessons: "18 aulas",
  },
  {
    tag: "Gestão",
    title: "Gestão Estratégica de Pessoas",
    description:
      "Conecte a gestão de pessoas aos objetivos do negócio, com metas, indicadores e resultados.",
    level: "Avançado",
    lessons: "30 aulas",
  },
  {
    tag: "Educação",
    title: "Educação Corporativa do Zero",
    description:
      "Estruture trilhas de aprendizagem e programas de educação alinhados à estratégia da empresa.",
    level: "Intermediário",
    lessons: "22 aulas",
  },
]

export default function CursosEadPage() {
  return (
    <main>
      <PageHero
        eyebrow="Cursos EAD"
        title="Aprenda no seu ritmo e transforme sua trajetória."
        description="Cursos online de liderança, desenvolvimento humano, gestão e educação corporativa com aplicação prática e direta ao ponto."
      />

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex items-start gap-4 rounded-sm border border-border bg-card p-6"
              >
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-sm bg-accent/15 text-accent">
                  <benefit.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-serif text-base font-semibold text-card-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-accent">
              Catálogo
            </p>
            <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              Cursos disponíveis
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {courses.map((course) => (
              <article
                key={course.title}
                className="flex flex-col rounded-sm border border-border bg-card p-8"
              >
                <span className="inline-flex w-fit rounded-sm bg-accent/15 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
                  {course.tag}
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold text-card-foreground">
                  {course.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {course.description}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-5 text-xs text-muted-foreground">
                  <span>{course.level}</span>
                  <span>{course.lessons}</span>
                </div>
                <a
                  href="https://wa.me/5584986751530"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent underline-offset-4 hover:underline"
                >
                  Tenho interesse
                  <ArrowRight className="size-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  )
}

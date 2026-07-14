import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { CtaSection } from "@/components/cta-section"
import {
  Sprout,
  HandHeart,
  BookOpen,
  Users,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Instituto Futuro Humano | Elem Mescouto",
  description:
    "O Instituto Futuro Humano promove educação, desenvolvimento humano e oportunidades para transformar pessoas e comunidades.",
}

const pillars = [
  {
    icon: BookOpen,
    title: "Educação",
    description:
      "Programas educacionais que democratizam o acesso ao conhecimento e ao desenvolvimento.",
  },
  {
    icon: Sprout,
    title: "Desenvolvimento Humano",
    description:
      "Iniciativas que estimulam protagonismo, propósito e crescimento pessoal e profissional.",
  },
  {
    icon: Users,
    title: "Comunidade",
    description:
      "Ações que fortalecem pessoas e comunidades, gerando impacto social positivo e duradouro.",
  },
  {
    icon: HandHeart,
    title: "Oportunidade",
    description:
      "Conectamos pessoas a oportunidades de formação, capacitação e recolocação.",
  },
]

const stats = [
  { value: "+1.000", label: "Pessoas impactadas" },
  { value: "+30", label: "Programas realizados" },
  { value: "+10", label: "Parcerias ativas" },
]

export default function InstitutoPage() {
  return (
    <main>
      <PageHero
        eyebrow="Instituto Futuro Humano"
        title="Transformando vidas por meio da educação e do desenvolvimento humano."
        description="Um movimento dedicado a gerar oportunidades, formar pessoas e construir um futuro mais humano e consciente."
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-accent">
            Nossa missão
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Acreditamos que pessoas desenvolvidas transformam o mundo
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            O Instituto Futuro Humano nasce do propósito de levar educação,
            desenvolvimento e oportunidades a mais pessoas. Atuamos para que o
            conhecimento seja uma ponte real de transformação, ampliando o
            protagonismo de indivíduos e o impacto positivo nas comunidades.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-accent">
              Pilares
            </p>
            <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              Como atuamos
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-sm border border-border bg-card p-7"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-sm bg-accent/15 text-accent">
                  <pillar.icon className="size-5" />
                </span>
                <h3 className="mt-5 font-serif text-lg font-semibold text-card-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <dl className="grid gap-10 text-center sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-serif text-4xl font-semibold md:text-5xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-sm text-primary-foreground/65">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-14 text-center">
            <a
              href="https://wa.me/5584986751530"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Quero apoiar o Instituto
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  )
}

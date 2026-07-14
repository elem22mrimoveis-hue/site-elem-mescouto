import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { CtaSection } from "@/components/cta-section"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | Elem Mescouto",
  description:
    "Artigos e reflexões sobre liderança, desenvolvimento humano, educação corporativa, carreira e gestão estratégica.",
}

const featured = {
  category: "Liderança",
  date: "12 de junho de 2026",
  readTime: "6 min de leitura",
  title: "Liderança humanizada não é fragilidade — é estratégia",
  excerpt:
    "Por que líderes que cuidam das pessoas constroem times mais engajados, produtivos e preparados para os desafios do futuro do trabalho.",
}

const posts = [
  {
    category: "Desenvolvimento Humano",
    date: "5 de junho de 2026",
    readTime: "5 min",
    title: "Como desenvolver protagonismo nas equipes",
    excerpt:
      "Práticas para estimular autonomia, responsabilidade e propósito no dia a dia das organizações.",
  },
  {
    category: "Educação Corporativa",
    date: "28 de maio de 2026",
    readTime: "7 min",
    title: "Trilhas de aprendizagem que geram resultado",
    excerpt:
      "Como estruturar programas de educação corporativa conectados à estratégia do negócio.",
  },
  {
    category: "Carreira",
    date: "20 de maio de 2026",
    readTime: "4 min",
    title: "Crescer com propósito: o que isso significa na prática",
    excerpt:
      "Reflexões sobre direcionar a carreira com clareza, autoconhecimento e visão de futuro.",
  },
  {
    category: "Gestão",
    date: "14 de maio de 2026",
    readTime: "6 min",
    title: "Indicadores que realmente importam na gestão de pessoas",
    excerpt:
      "Métricas que conectam o desenvolvimento humano aos resultados sustentáveis da organização.",
  },
]

export default function BlogPage() {
  return (
    <main>
      <PageHero
        eyebrow="Blog"
        title="Ideias para transformar pessoas, líderes e organizações."
        description="Artigos e reflexões sobre liderança, desenvolvimento humano, educação corporativa, carreira e gestão estratégica."
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <article className="grid gap-8 rounded-sm border border-border bg-card p-8 md:grid-cols-2 md:p-10">
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-sm bg-accent/15 px-3 py-1 font-medium uppercase tracking-[0.2em] text-accent">
                  {featured.category}
                </span>
                <span>{featured.date}</span>
              </div>
              <h2 className="mt-5 text-balance font-serif text-2xl font-semibold leading-snug text-card-foreground md:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {featured.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                Ler artigo completo
                <ArrowRight className="size-4" />
              </span>
            </div>
            <div className="flex items-center justify-center rounded-sm bg-secondary p-10">
              <span className="font-serif text-xl font-semibold text-muted-foreground">
                {featured.readTime}
              </span>
            </div>
          </article>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.title}
                className="flex flex-col rounded-sm border border-border bg-card p-7 transition-colors hover:border-accent/40"
              >
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="font-medium uppercase tracking-[0.2em] text-accent">
                    {post.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold leading-snug text-card-foreground">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-5 text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <span className="inline-flex items-center gap-1.5 font-medium text-accent">
                    Ler mais
                    <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  )
}

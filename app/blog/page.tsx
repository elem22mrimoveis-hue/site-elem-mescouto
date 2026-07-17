import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Liderança, Gestão e Desenvolvimento Humano",
  description:
    "Artigos e reflexões sobre liderança, desenvolvimento humano, educação corporativa, carreira e gestão estratégica.",
}

export default function BlogPage() {
  const artigos = [
    {
      titulo: "Por que o futuro das empresas depende das pessoas?",
      categoria: "Liderança",
      descricao:
        "Uma reflexão sobre desenvolvimento humano como vantagem competitiva das organizações.",
      link: "/blog/futuro-das-empresas-depende-das-pessoas",
      tempo: "8 min",
    },
    {
      titulo: "Por que equipes perdem produtividade?",
      categoria: "Produtividade",
      descricao:
        "Entenda os principais fatores que reduzem a produtividade das equipes e como líderes podem transformar esse cenário.",
      link: "/blog/equipes-perdem-produtividade",
      tempo: "10 min",
    },
  ]

  return (
    <main className="bg-background">
      <section className="border-b border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">
            Instituto Futuro Humano
          </p>

          <h1 className="mt-4 font-serif text-5xl font-semibold text-foreground">
            Blog
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Artigos, pesquisas, tendências e reflexões sobre liderança,
            produtividade, desenvolvimento humano, estratégia,
            gestão de pessoas e Inteligência Artificial.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6">
          {artigos.map((artigo) => (
            <a
              key={artigo.titulo}
              href={artigo.link}
              className="rounded-sm border border-border bg-card p-10 transition hover:shadow-xl"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-accent">
                {artigo.categoria}
              </span>

              <h2 className="mt-3 text-3xl font-semibold text-foreground">
                {artigo.titulo}
              </h2>

              <p className="mt-5 leading-relaxed text-muted-foreground">
                {artigo.descricao}
              </p>

              <div className="mt-8 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Tempo de leitura: {artigo.tempo}
                </span>

                <span className="font-medium text-accent">Ler artigo →</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}

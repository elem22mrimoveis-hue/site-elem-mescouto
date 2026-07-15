import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { CtaSection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Portfólio | Elem Mescouto",
  description:
    "Projetos, programas e parcerias em desenvolvimento humano, educação corporativa, liderança e gestão estratégica.",
}

const projects = [
  {
    client: "Indústria · Liderança",
    title: "Programa de Desenvolvimento de Líderes",
    description:
      "Trilha de liderança humanizada para gestores, com encontros vivenciais e plano de desenvolvimento individual.",
    result: "+40% de engajamento das equipes",
  },
  {
    client: "Educação · Corporativo",
    title: "Universidade Corporativa",
    description:
      "Estruturação de uma universidade corporativa conectando aprendizagem à estratégia do negócio.",
    result: "Trilhas para +300 colaboradores",
  },
  {
    client: "Varejo · Gestão",
    title: "Gestão Estratégica de Pessoas",
    description:
      "Implantação de indicadores e rituais de gestão de pessoas alinhados às metas da empresa.",
    result: "Redução de turnover em 25%",
  },
  {
    client: "RH · Eventos",
    title: "Ciclo de Palestras Corporativas",
    description:
      "Série de palestras sobre cultura, propósito e futuro do trabalho para fóruns e convenções.",
    result: "+1.500 participantes impactados",
  },
  {
    client: "Serviços · Mentoria",
    title: "Mentoria Executiva para Gestores",
    description:
      "Acompanhamento individual de executivos em transição e expansão de responsabilidades.",
    result: "Promoções e novos desafios assumidos",
  },
  {
    client: "Social · Educação",
    title: "Projeto Futuro Humano",
    description:
      "Iniciativa social de formação e desenvolvimento humano em parceria com a comunidade.",
    result: "+1.000 pessoas alcançadas",
  },
]

export default function PortfolioPage() {
  return (
    <main>
      <PageHero
        eyebrow="Portfólio"
        title="Projetos que geraram impacto real em pessoas e organizações."
        description="Uma seleção de programas, parcerias e iniciativas em desenvolvimento humano, educação, liderança e gestão estratégica."
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col rounded-sm border border-border bg-card p-8"
              >
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
                  {project.client}
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold leading-snug text-card-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <p className="mt-6 border-t border-border pt-5 text-sm font-medium text-foreground">
                  {project.result}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos serão publicados conforme autorização dos clientes. */}
      <CtaSection />
    </main>
  )
}

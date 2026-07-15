import { CheckCircle2 } from "lucide-react"

const highlights = [
  "Empreendedorismo e visão de negócio",
  "Educação superior e formação de profissionais",
  "Desenvolvimento de líderes e equipes",
  "Estratégia, aprendizagem e crescimento humano",
]

export function About() {
  return (
    <section id="sobre" className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <div className="overflow-hidden rounded-sm">
            <img
              src="/elem-mescouto.png"
              alt="Retrato de Elem Mescouto"
              className="aspect-[3/4] w-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden max-w-[220px] rounded-sm border border-border bg-card p-6 shadow-lg sm:block">
            <p className="font-serif text-lg leading-snug text-foreground">
              &ldquo;Pessoas no centro de cada estratégia.&rdquo;
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-accent">
              Elem Mescouto
            </p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-accent">
            Sobre
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Uma trajetória construída por propósito, educação e transformação.
          </h2>
          <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              Sou Elem Mescouto, administradora, educadora, mentora, palestrante e
              especialista em desenvolvimento humano, liderança e gestão estratégica.
            </p>

            <p>
              Minha trajetória foi construída pela superação, pela educação e pela
              convicção de que pessoas transformadas constroem organizações mais fortes,
              equipes mais engajadas e resultados mais sustentáveis.
            </p>

            <p>
              Ao longo da minha caminhada atuei na educação superior, na formação de
              profissionais, no desenvolvimento de lideranças e no apoio a empresas que
              desejam crescer com propósito, estratégia e visão de futuro.
            </p>

            <p>
              Hoje ajudo gestores, empreendedores, instituições de ensino e equipes a
              desenvolver competências humanas, fortalecer lideranças e transformar
              desafios em oportunidades de crescimento.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                <span className="text-sm leading-snug text-foreground">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

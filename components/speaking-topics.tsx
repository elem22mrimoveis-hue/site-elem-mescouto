import { Mic } from "lucide-react"

const temas = [
  "Liderança Humanizada",
  "Produtividade com Propósito",
  "Desenvolvimento Humano nas Organizações",
  "O Futuro do Trabalho e da Aprendizagem",
  "Cultura Organizacional e Engajamento",
  "Inteligência Emocional para Líderes",
  "Equipes de Alta Performance",
]

export function SpeakingTopics() {
  return (
    <section id="palestras" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-accent">
            Temas de Palestras
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Palestras que inspiram pessoas e movem organizações
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Conteúdos desenhados para eventos corporativos, fóruns de RH e
            instituições de ensino, sempre conectando propósito, liderança e
            resultados.
          </p>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {temas.map((tema, index) => (
            <li
              key={tema}
              className="flex items-center gap-4 bg-card p-6 transition-colors hover:bg-card/60"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-accent/15 text-accent">
                <Mic className="size-5" />
              </span>
              <div>
                <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-lg font-semibold leading-snug text-foreground">
                  {tema}
                </h3>
              </div>
            </li>
          ))}
          <li className="flex flex-col justify-center gap-3 bg-primary p-6 text-primary-foreground">
            <h3 className="font-serif text-lg font-semibold">
              Quer um tema sob medida?
            </h3>
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              Palestras personalizadas para o contexto da sua organização.
            </p>
            <a
              href="#contato"
              className="text-sm font-medium text-accent underline-offset-4 hover:underline"
            >
              Solicitar palestra →
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

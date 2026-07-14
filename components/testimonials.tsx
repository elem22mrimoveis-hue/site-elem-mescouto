import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "O trabalho da Elem transformou a forma como nossos líderes enxergam pessoas e resultados. Ganhamos uma cultura mais madura e estratégica.",
    name: "Mariana Albuquerque",
    role: "Diretora de RH, Indústria",
  },
  {
    quote:
      "Conteúdo profundo aliado a uma condução leve e envolvente. Nossos times saíram dos treinamentos mais engajados e preparados.",
    name: "Rafael Tavares",
    role: "Gerente de Pessoas, Varejo",
  },
  {
    quote:
      "A mentoria executiva me deu clareza estratégica e segurança para liderar em um momento decisivo da empresa.",
    name: "Camila Nogueira",
    role: "CEO, Educação",
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-accent">
            Depoimentos
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Quem confia neste trabalho
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col rounded-sm border border-border bg-card p-8"
            >
              <Quote className="size-8 text-accent" />
              <blockquote className="mt-5 flex-1 text-pretty leading-relaxed text-foreground">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-5">
                <p className="font-serif text-base font-semibold text-foreground">
                  {item.name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {item.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

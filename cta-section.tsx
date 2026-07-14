import { MessageCircle, ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section id="contato" className="relative isolate overflow-hidden py-28 md:py-36">
      <img
        src="/cta-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-primary/90" />

      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-accent">
          Vamos conversar
        </p>
        <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-primary-foreground md:text-5xl">
          Pronto para transformar pessoas e resultados na sua organização?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-primary-foreground/75">
          Agende uma conversa para desenhar a solução ideal em desenvolvimento
          humano, educação corporativa, liderança e gestão estratégica.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/5584986751530"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            <MessageCircle className="size-4" />
            Falar no WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/elem-mescouto"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-primary-foreground/30 px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Conectar no LinkedIn
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

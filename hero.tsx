import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden">
      <img
        src="/hero-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/50" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 pt-28 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="max-w-2xl">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-accent">
            Mentoria em Gestão Estratégica Humanizada
          </p>
          <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.1] text-primary-foreground sm:text-5xl md:text-6xl">
            Desenvolvendo líderes e equipes para transformar desafios de gestão
            em resultados sustentáveis.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/75">
            Ajudo empresas e gestores a fortalecerem a liderança, aumentarem a
            produtividade e desenvolverem pessoas através de uma gestão mais
            humana, estratégica e orientada a resultados.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Agendar Conversa Estratégica
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center rounded-sm border border-primary-foreground/30 px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Conhecer Minha História
            </a>
          </div>

          <dl className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-primary-foreground/15 pt-8">
            {[
              { value: "15+", label: "Anos dedicados à educação e gestão" },
              { value: "7+", label: "Anos formando profissionais" },
              { value: "3", label: "Especializações em gestão e pessoas" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-serif text-3xl font-semibold text-primary-foreground">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-primary-foreground/60">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="overflow-hidden rounded-sm border border-primary-foreground/15 shadow-2xl">
            <img
              src="/elem-mescouto-profissional.jpeg"
              alt="Foto oficial de Elem Mescouto"
              className="aspect-[4/5] w-full object-cover"
              style={{ objectPosition: 'center' }}
            />
          </div>
          <div className="absolute -bottom-5 left-5 rounded-sm bg-card px-5 py-3 shadow-lg">
            <p className="font-serif text-base font-semibold leading-none text-foreground">
              Elem Mescouto
            </p>
            <p className="mt-1.5 text-[0.7rem] uppercase tracking-[0.2em] text-accent">
              Mentora Empresarial
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

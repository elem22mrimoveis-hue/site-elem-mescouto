type PageHeroProps = {
  eyebrow: string
  title: string
  description?: string
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-5xl px-6 pt-36 pb-16 text-center">
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-accent">
          {eyebrow}
        </p>
        <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.1] md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/75">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  )
}

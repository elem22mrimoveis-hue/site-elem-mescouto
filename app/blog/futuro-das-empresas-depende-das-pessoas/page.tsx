import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Por que o futuro das empresas depende das pessoas? | Blog",
  description:
    "Uma reflexão sobre desenvolvimento humano como vantagem competitiva das organizações.",
}

export default function ArticlePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <p className="text-sm uppercase tracking-[0.3em] text-accent">
        Liderança
      </p>

      <h1 className="mt-4 font-serif text-5xl font-semibold">
        Por que o futuro das empresas depende das pessoas?
      </h1>

      <p className="mt-8 text-xl leading-relaxed text-muted-foreground">
        Em um cenário marcado por Inteligência Artificial, transformação digital
        e mudanças aceleradas, o maior diferencial competitivo das organizações
        continua sendo o desenvolvimento das pessoas.
      </p>

      <div className="mt-16 space-y-8 leading-8 text-lg text-muted-foreground">
        <p>
          As empresas que investem apenas em tecnologia dificilmente alcançarão
          resultados sustentáveis se não desenvolverem suas lideranças,
          fortalecerem sua cultura organizacional e valorizarem o potencial humano.
        </p>

        <p>
          O futuro pertence às organizações capazes de unir estratégia,
          inovação e desenvolvimento humano.
        </p>

        <p>
          É exatamente essa visão que orienta o Método ELEM®, conectando
          Ser, Pensar e Agir para transformar pessoas, equipes e empresas.
        </p>
      </div>
    </main>
  )
}

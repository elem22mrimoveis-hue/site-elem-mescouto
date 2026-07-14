import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { ContactForm } from "@/components/contact-form"
import { InstagramIcon, LinkedinIcon } from "@/components/brand-icons"
import { Phone, Mail, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Contato | Elem Mescouto",
  description:
    "Entre em contato com Elem Mescouto para mentorias, palestras, cursos e parcerias em desenvolvimento humano e gestão estratégica.",
}

const channels = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "(84) 98675-1530",
    href: "https://wa.me/5584986751530",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "elem.m.escouto@hotmail.com",
    href: "mailto:elem.m.escouto@hotmail.com",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: "@elemmescouto",
    href: "https://instagram.com/elemmescouto",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "in/elem-mescouto",
    href: "https://www.linkedin.com/in/elem-mescouto",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Parnamirim - RN",
    href: undefined,
  },
]

export default function ContatoPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre o seu próximo passo."
        description="Mentorias, palestras, cursos ou parcerias — fale comigo e vamos desenhar a melhor solução juntos."
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
              Canais de contato
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Escolha o canal de sua preferência. Respondo pessoalmente cada
              mensagem para entender o seu momento e como posso ajudar.
            </p>

            <ul className="mt-10 space-y-4">
              {channels.map((channel) => {
                const content = (
                  <span className="flex items-center gap-4 rounded-sm border border-border bg-card p-5 transition-colors hover:border-accent/40">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-sm bg-accent/15 text-accent">
                      <channel.icon className="size-5" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {channel.label}
                      </span>
                      <span className="mt-1 text-sm font-medium text-card-foreground">
                        {channel.value}
                      </span>
                    </span>
                  </span>
                )
                return (
                  <li key={channel.label}>
                    {channel.href ? (
                      <a href={channel.href} target="_blank" rel="noreferrer">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="rounded-sm border border-border bg-card p-8 md:p-10">
            <h2 className="font-serif text-2xl font-semibold text-card-foreground">
              Envie uma mensagem
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Preencha o formulário abaixo e retornarei o mais breve possível.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

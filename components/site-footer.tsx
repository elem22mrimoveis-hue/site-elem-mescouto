import Link from "next/link"
import { Phone, MapPin, Mail } from "lucide-react"
import { InstagramIcon, LinkedinIcon } from "@/components/brand-icons"

const navLinks = [
  { label: "Sobre", href: "/sobre" },
  { label: "Mentorias", href: "/mentorias" },
  { label: "Palestras", href: "/palestras" },
  { label: "Cursos EAD", href: "/cursos-ead" },
  { label: "Instituto Futuro Humano", href: "/instituto" },
  { label: "Blog", href: "/blog" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Contato", href: "/contato" },
]

const contacts = [
  {
    icon: Phone,
    label: "(84) 98675-1530",
    href: "https://wa.me/5584986751530",
  },
  {
    icon: InstagramIcon,
    label: "@elemmescouto",
    href: "https://instagram.com/elemmescouto",
  },
  {
    icon: LinkedinIcon,
    label: "in/elem-mescouto",
    href: "https://www.linkedin.com/in/elem-mescouto",
  },
  {
    icon: Mail,
    label: "elem.m.escouto@hotmail.com",
    href: "mailto:elem.m.escouto@hotmail.com",
  },
  {
    icon: MapPin,
    label: "Parnamirim - RN",
    href: undefined,
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1.2fr]">
          <div>
            <span className="font-serif text-2xl font-semibold">
              Elem Mescouto
            </span>
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-primary-foreground/65">
              Desenvolvimento Humano • Educação Corporativa • Liderança • Gestão
              Estratégica.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-accent">
              Navegação
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-accent">
              Contato
            </h3>
            <ul className="mt-5 space-y-3">
              {contacts.map((item) => {
                const content = (
                  <span className="flex items-center gap-3 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                    <item.icon className="size-4 text-accent" />
                    {item.label}
                  </span>
                )
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer">
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
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Elem Mescouto. Todos os direitos
            reservados.
          </p>
          <p>Desenvolvimento Humano · Educação Corporativa · Gestão Estratégica</p>
        </div>
      </div>
    </footer>
  )
}

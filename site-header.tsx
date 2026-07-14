"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Mentorias", href: "/mentorias" },
  { label: "Palestras", href: "/palestras" },
  { label: "Cursos EAD", href: "/cursos-ead" },
  { label: "Instituto Futuro Humano", href: "/instituto" },
  { label: "Blog", href: "/blog" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Contato", href: "/contato" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-xl font-semibold tracking-tight text-foreground">
            Elem Mescouto
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.25em] text-accent">
            Desenvolvimento &amp; Estratégia
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[0.8rem] transition-colors hover:text-foreground ${
                isActive(link.href)
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://wa.me/5584986751530"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 xl:inline-block"
        >
          Fale comigo
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-foreground lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/40 bg-background px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm transition-colors hover:text-foreground ${
                  isActive(link.href)
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5584986751530"
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-sm bg-primary px-5 py-2.5 text-center text-sm font-medium text-primary-foreground"
            >
              Fale comigo
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

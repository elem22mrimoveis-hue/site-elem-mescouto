"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("Mentorias")
  const [message, setMessage] = useState("")

  const subjects = [
    "Mentorias",
    "Palestras",
    "Cursos EAD",
    "Instituto Futuro Humano",
    "Parcerias",
    "Outro assunto",
  ]

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const text = `Olá, Elem! Meu nome é ${name}.%0AAssunto: ${subject}.%0A%0A${message}%0A%0AE-mail para contato: ${email}`
    window.open(
      `https://wa.me/5584986751530?text=${text}`,
      "_blank",
      "noopener,noreferrer",
    )
  }

  const fieldClass =
    "w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Nome
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome completo"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-sm font-medium text-foreground">
          Assunto
        </label>
        <select
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={fieldClass}
        >
          {subjects.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Mensagem
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Conte um pouco sobre o que você precisa..."
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        <Send className="size-4" />
        Enviar mensagem
      </button>
      <p className="text-xs text-muted-foreground">
        Ao enviar, você será direcionado ao WhatsApp para concluir o contato.
      </p>
    </form>
  )
}

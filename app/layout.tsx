import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter, Playfair_Display, Geist_Mono } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://elemmescouto.com.br'),

  title: {
    default: 'Elem Mescouto | Mentoria em Gestão Estratégica Humanizada',
    template: '%s | Elem Mescouto',
  },

  description:
    'Mentoria empresarial, liderança, desenvolvimento humano e gestão estratégica para empresas, gestores e profissionais que desejam desenvolver pessoas, aumentar resultados e construir organizações mais fortes.',

  keywords: [
    'Elem Mescouto',
    'Mentoria Empresarial',
    'Gestão Estratégica',
    'Gestão Estratégica Humanizada',
    'Liderança',
    'Gestão de Pessoas',
    'Desenvolvimento Humano',
    'Educação Corporativa',
    'Consultoria Empresarial',
    'Planejamento Estratégico',
    'Produtividade',
    'Treinamento Empresarial',
    'Palestras Corporativas',
    'Natal',
    'Parnamirim',
    'Rio Grande do Norte',
  ],

  authors: [
    {
      name: 'Elem Mescouto',
    },
  ],

  creator: 'Elem Mescouto',
  publisher: 'Elem Mescouto',

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: 'https://elemmescouto.com.br',
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        url: '/icon-192.png',
        sizes: '192x192',
      },
      {
        rel: 'icon',
        url: '/icon-512.png',
        sizes: '512x512',
      },
    ],
  },

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://elemmescouto.com.br',
    siteName: 'Elem Mescouto',
    title: 'Elem Mescouto | Mentoria em Gestão Estratégica Humanizada',
    description:
      'Mentoria empresarial, liderança e desenvolvimento humano para organizações que desejam crescer com estratégia e resultados.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elem Mescouto',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Elem Mescouto',
    description: 'Mentoria empresarial e liderança estratégica.',
    images: ['/og-image.jpg'],
  },

  category: 'Business',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

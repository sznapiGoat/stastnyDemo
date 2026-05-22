import type { Metadata } from 'next'
import { DM_Sans, Fraunces } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
})

const fraunces = Fraunces({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
})

export const metadata: Metadata = {
  title: 'Autoškola Šťastný | Humpolec',
  description: 'Profesionální autoškola v Humpolci. Jiří Šťastný – zkušený instruktor s individuálním přístupem. Řidičské oprávnění skupiny B.',
  keywords: ['autoškola', 'Humpolec', 'řidičský průkaz', 'Jiří Šťastný', 'autoškola Humpolec'],
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png',  media: '(prefers-color-scheme: dark)'  },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" className="scroll-smooth">
      <body className={`${dmSans.variable} ${fraunces.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  )
}

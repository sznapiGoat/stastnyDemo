import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter"
});

const outfit = Outfit({ 
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit"
});

export const metadata: Metadata = {
  title: 'Autoškola Šťastný | Humpolec',
  description: 'Profesionální autoškola v Humpolci. Jiří Šťastný - zkušený instruktor s vysokou úspěšností. Řidičské oprávnění skupiny B.',
  keywords: ['autoškola', 'Humpolec', 'řidičský průkaz', 'Jiří Šťastný', 'autoškola Humpolec'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs" className="bg-background scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

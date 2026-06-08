import type { Metadata } from 'next'
import { DM_Sans, Fraunces } from 'next/font/google'
import './globals.css'
import { MotionProvider } from '@/components/motion-provider'

const dmSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const siteUrl = 'https://stastnyautoskola.cz'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Autoškola Šťastný Humpolec | Řidičský průkaz skupiny B',
    template: '%s | Autoškola Šťastný Humpolec',
  },
  description:
    'Autoškola Šťastný v Humpolci – řidičský průkaz skupiny B, kondiční jízdy, vrácení řidičského oprávnění. Instruktor Jiří Šťastný s individuálním přístupem a výukou na voze Hyundai i20.',
  keywords: [
    'autoškola Humpolec',
    'autoškola Šťastný',
    'řidičský průkaz Humpolec',
    'řidičák skupina B',
    'Jiří Šťastný instruktor',
    'kondiční jízdy Humpolec',
    'vrácení řidičského oprávnění',
    'autoškola skupina B',
  ],
  authors: [{ name: 'Jiří Šťastný' }],
  creator: 'Autoškola Šťastný',
  publisher: 'Autoškola Šťastný',
  alternates: {
    canonical: '/',
  },
  category: 'Autoškola',
  verification: {
    google: 'nlK4KezKpPncw1EIRKemwWKAEbtNpRn960XUmQ0IUtc',
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: siteUrl,
    siteName: 'Autoškola Šťastný Humpolec',
    title: 'Autoškola Šťastný Humpolec | Řidičský průkaz skupiny B',
    description:
      'Řidičský průkaz skupiny B v Humpolci. Zkušený instruktor Jiří Šťastný, individuální přístup, výuka na voze Hyundai i20.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autoškola Šťastný Humpolec | Řidičský průkaz skupiny B',
    description:
      'Řidičský průkaz skupiny B v Humpolci. Zkušený instruktor Jiří Šťastný, individuální přístup.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png',  media: '(prefers-color-scheme: dark)'  },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DrivingSchool',
  '@id': `${siteUrl}/#business`,
  name: 'Autoškola Šťastný',
  description:
    'Autoškola v Humpolci nabízející řidičský průkaz skupiny B, kondiční jízdy, vrácení řidičského oprávnění a školení začínajících řidičů.',
  url: siteUrl,
  telephone: '+420720077921',
  email: 'stastny.post@seznam.cz',
  image: `${siteUrl}/auto1.png`,
  priceRange: '$$',
  currenciesAccepted: 'CZK',
  paymentAccepted: 'Hotovost, Bankovní převod',
  founder: {
    '@type': 'Person',
    name: 'Jiří Šťastný',
    jobTitle: 'Instruktor autoškoly',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hálkova 591',
    addressLocality: 'Humpolec',
    postalCode: '396 01',
    addressCountry: 'CZ',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 49.5419,
    longitude: 15.3597,
  },
  areaServed: {
    '@type': 'City',
    name: 'Humpolec',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Služby autoškoly',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Kurz skupiny B' },
        price: '21000',
        priceCurrency: 'CZK',
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Kondiční jízdy' },
        price: '700',
        priceCurrency: 'CZK',
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Vrácení řidičského oprávnění' },
        price: '2400',
        priceCurrency: 'CZK',
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Školení začínajících řidičů' },
        price: '4000',
        priceCurrency: 'CZK',
      },
    ],
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${dmSans.variable} ${fraunces.variable} font-sans antialiased bg-background text-foreground`}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}

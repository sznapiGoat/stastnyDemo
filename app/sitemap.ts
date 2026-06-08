import type { MetadataRoute } from 'next'

const siteUrl = 'https://stastnyautoskola.cz'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...['sluzby', 'cenik', 'kontakt'].map((section) => ({
      url: `${siteUrl}/#${section}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}

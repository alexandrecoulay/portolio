import { meta_url } from '@/services/constante'
import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: meta_url,
    sitemap: `${meta_url}/sitemap.xml`,
  }
}
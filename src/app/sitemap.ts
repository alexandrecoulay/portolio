import { meta_url } from '@/services/constante'
import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: meta_url,
      lastModified: new Date()
    }
  ]
}
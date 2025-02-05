import { meta_description, meta_title } from '@/services/constante'
import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: meta_title,
    short_name: 'Alexandre COULAY',
    description: meta_description,
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      { "src": "/assets/icons/logos/favicon-16x16.png", "type": "image/x-icon", "sizes": "16x16" },
      { "src": "/assets/icons/logos/favicon-32x32.png", "type": "image/x-icon", "sizes": "32x32" },
      { "src": "/assets/icons/logos/android-chrome-192x192.png", "type": "image/png", "sizes": "192x192" },
      { "src": "/assets/icons/logos/android-chrome-512x512.png", "type": "image/png", "sizes": "512x512" },
      { "src": "/assets/icons/logos/apple-touch-icon.png", "type": "image/png", "sizes": "180x180" },
    ],
  }
}
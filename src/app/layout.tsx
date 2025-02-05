import { current_year, keywords, meta_app_title, meta_description, meta_image, meta_title, meta_url } from '@/services/constante';
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import '@/styles/globals.scss';

import Analytics from '@/context/Analytics';
import Provider from '@/context';

export const viewport = {
  width: 1,
  themeColor: '#000000'
}

export const metadata: Metadata = {
  title: meta_title,
  description: meta_description,
  icons: {
    icon: "/favicon.ico",
    apple: "/images/apple-touch-icon.png"
  },
  alternates: {
    canonical: "./"
  },
  keywords: keywords,
  appleWebApp: {
    capable: true
  },
  authors: {
    name: "Alexandre COULAY"
  },
  referrer: "origin",
  robots: {
    googleBot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  },
  openGraph: {
    type: "website",
    url: meta_url,
    description: meta_description,
    images: [{
      url: meta_image
    }],
    siteName: meta_app_title,
    title: meta_title,
    alternateLocale: "fr",
    locale: "en"
  },
  twitter: {
    card: "summary_large_image",
    creator: meta_app_title,
    description: meta_description,
    images: [{
      url: meta_image
    }],
    site: meta_url,
    title: meta_title
  },
  other: {
    bingbot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    robots: "index, follow, noyaca",
    "dc.Title": meta_title,
    "dc.creator": "Alexandre COULAY",
    "dc.description": meta_description,
    "dc.identifier": meta_url,
    "dc.relation": meta_url,
    "dc.source": meta_url,
    "dc.Coverage": current_year,
    "dc.Rights": `Copyright ${current_year}, Alexandre COULAY.`,
  }
}

const addJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": meta_app_title,
    "url": meta_url,
    "logo": `${meta_url}/apple-touch-icon.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@alexandrecoulay.fr",
      "contactType": "customer service"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": meta_url,
    "name": meta_app_title,
    "publisher": {
      "@type": "Organization",
      "logo": `${meta_url}/apple-touch-icon.png`,
      "name": "Alexandre COULAY",
      "url": meta_url
    },
    "inLanguage": "en"
  },
  {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": meta_title,
    "description": meta_description,
    "url": "htmeta_url",
    "image": `${meta_url}/apple-touch-icon.png`,
    "datePublished": "2025-01-01",
    "author": {
      "@type": "Organization",
      "name": meta_app_title
    }
  }
]

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en-US'>
      <head>
        {
          addJsonLd.map((data, idx) => <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />)
        }
      </head>
      <Analytics GA_TRACKING_ID='G-SS66GFP9CH' />
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}

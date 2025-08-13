import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "BareStack - Barebones Software",
  description: "Free, open-source tools that eliminate bloat. Stop paying for 68% of features you'll never use.",
  keywords: "open source, free software, productivity tools, bloat-free, minimal software, developer tools",
  authors: [{ name: "BareStack Team" }],
  creator: "BareStack",
  publisher: "BareStack",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://barestack.com",
    title: "BareStack - Barebones Software",
    description: "Free, open-source tools that eliminate bloat. Stop paying for 68% of features you'll never use.",
    siteName: "BareStack",
  },
  twitter: {
    card: "summary_large_image",
    title: "BareStack - Barebones Software",
    description: "Free, open-source tools that eliminate bloat. Stop paying for 68% of features you'll never use.",
    creator: "@barestack",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Source+Sans+Pro:wght@300;400;600&family=Varela+Round&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-parchment text-loam antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "BareStack",
              "description": "Free, open-source tools that eliminate bloat",
              "url": "https://barestack.com",
              "logo": "https://barestack.com/favicon.ico",
              "sameAs": [],
            }),
          }}
        />
        {children}
      </body>
    </html>
  )
}
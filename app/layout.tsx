import './globals.css'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://kbops.dev'),
  title: 'KB Ops - Business Automation That Scales With You',
  description: 'Save 10+ hours/week with simple, affordable automation tools. Zapier, Airtable, Shopify integrations and more.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kbops.dev',
    siteName: 'KB Ops',
    title: 'KB Ops - Business Automation That Scales With You',
    description: 'Save 10+ hours/week with simple, affordable automation tools. Zapier, Airtable, Shopify integrations and more.',
    images: [
      {
        url: 'https://kbops.dev/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KB Ops - Business Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KB Ops - Business Automation That Scales With You',
    description: 'Save 10+ hours/week with simple, affordable automation tools. Zapier, Airtable, Shopify integrations and more.',
    images: ['https://kbops.dev/og-image.jpg'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
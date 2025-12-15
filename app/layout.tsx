import type { Metadata, Viewport } from 'next'
import './globals.css'
import "./css/style.css";

export const metadata: Metadata = {
  title: 'STGI | Intelligent Lending Technology',
  description:
    'Trusted technology partner for banks transforming lending with automation, AI, cloud, and secure workflows across originations, underwriting, and servicing.',
  keywords: 'lending technology, banking automation, underwriting AI, lending workflows, STGI',
  authors: [{ name: 'STGI' }],
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-dark-900 text-white antialiased">
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import './globals.css'

export const metadata: Metadata = {
  title: 'Who again portfolio',
  description: 'web portfolio pkl',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html> 
  )
}

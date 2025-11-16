import type React from "react"
import type { Metadata } from "next"
import { Poppins, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import WhatsAppFab from "@/components/whatsapp-fab"
import FirstLoadSplash from "@/components/first-load-splash"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  fallback: ["system-ui", "sans-serif"],
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  fallback: ["Georgia", "serif"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://blissfullbites.com'),
  title: {
    default: "Blissful Bites | Handcrafted Baked Goods in Bangalore",
    template: "%s | Blissful Bites"
  },
  description:
    "FSSAI-approved home bakery offering artisanal baked goods for all occasions. Handcrafted sweetness, baked with heart.",
  keywords: [
    'bakery bangalore',
    'home bakery',
    'custom cakes bangalore',
    'fresh cupcakes',
    'handmade cookies',
    'FSSAI approved bakery',
    'birthday cakes',
    'desserts bangalore',
    'artisanal baked goods',
    'homemade bakery',
  ],
  authors: [{ name: 'Blissful Bites' }],
  creator: 'Blissful Bites',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'Blissful Bites',
    title: 'Blissful Bites | Handcrafted Baked Goods in Bangalore',
    description: 'FSSAI-approved home bakery offering artisanal baked goods for all occasions',
    images: [
      {
        url: '/Images/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Blissful Bites - Handcrafted Baked Goods',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blissful Bites | Handcrafted Baked Goods',
    description: 'FSSAI-approved home bakery offering artisanal baked goods',
    images: ['/Images/logo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Images/logo.jpeg" />
        <link rel="apple-touch-icon" href="/Images/logo.jpeg" />
      </head>
      <body className={`${poppins.variable} ${playfair.variable} font-sans antialiased`}>
        <FirstLoadSplash />
        {children}
        <WhatsAppFab />
        <Analytics />
      </body>
    </html>
  )
}

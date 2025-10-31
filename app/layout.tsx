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
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Blissful Bites | Handcrafted Baked Goods in Bangalore",
  description:
    "FSSAI-approved home bakery offering artisanal baked goods for all occasions. Handcrafted sweetness, baked with heart.",
  generator: "v0.app",
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

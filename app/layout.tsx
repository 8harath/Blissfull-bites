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
    default: "Blissful Bites | Best Home Bakery in Bangalore | Handcrafted Baked Goods",
    template: "%s | Blissful Bites - Bangalore's Premier Home Bakery"
  },
  description:
    "Blissful Bites - Bangalore's #1 FSSAI-approved home bakery. Order handcrafted cakes, cupcakes, cookies, brownies & more. Women-led, fresh baked goods delivered. Custom orders for birthdays, weddings & events. 48hr advance notice.",
  keywords: [
    'Blissful Bites',
    'Blissful Bites Bangalore',
    'Blissfull Bites',
    'home bakery Bangalore',
    'best bakery Bangalore',
    'FSSAI approved bakery Bangalore',
    'custom cakes Bangalore',
    'birthday cakes Bangalore',
    'wedding cakes Bangalore',
    'fresh cupcakes Bangalore',
    'handmade cookies Bangalore',
    'artisanal bakery Bangalore',
    'women-led bakery',
    'home baked goods Bangalore',
    'cake delivery Bangalore',
    'desserts Bangalore',
    'brownies Bangalore',
    'macarons Bangalore',
    'eggless cakes Bangalore',
    'custom bakery Bangalore',
    'best home bakery near me',
  ],
  authors: [{ name: 'Blissful Bites - Savitha & Poorvika' }],
  creator: 'Blissful Bites',
  publisher: 'Blissful Bites',
  category: 'Food & Beverage',
  classification: 'Bakery',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'Blissful Bites - Bangalore Home Bakery',
    title: 'Blissful Bites | Best Home Bakery in Bangalore | Handcrafted Baked Goods',
    description: 'Bangalore\'s #1 FSSAI-approved home bakery. Order handcrafted cakes, cupcakes, cookies & more. Women-led, fresh baked to order.',
    images: [
      {
        url: '/Images/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Blissful Bites - Bangalore\'s Premier Home Bakery',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@blissfullbites',
    creator: '@blissfullbites',
    title: 'Blissful Bites | Best Home Bakery in Bangalore',
    description: 'Bangalore\'s #1 FSSAI-approved home bakery. Handcrafted cakes, cupcakes, cookies & more.',
    images: ['/Images/logo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    other: {
      'facebook-domain-verification': 'your-facebook-verification-code',
    },
  },
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Bangalore',
    'geo.position': '12.9716;77.5946',
    'ICBM': '12.9716, 77.5946',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    '@id': 'https://blissfullbites.com/#organization',
    name: 'Blissful Bites',
    alternateName: 'Blissfull Bites',
    legalName: 'Blissful Bites Home Bakery',
    url: 'https://blissfullbites.com',
    logo: 'https://blissfullbites.com/Images/logo.jpeg',
    image: 'https://blissfullbites.com/Images/logo.jpeg',
    description: 'FSSAI-approved home bakery in Bangalore specializing in handcrafted cakes, cupcakes, cookies, brownies, and artisanal baked goods for all occasions.',
    foundingDate: '2020',
    founders: [
      {
        '@type': 'Person',
        name: 'Savitha',
        gender: 'Female',
      },
      {
        '@type': 'Person',
        name: 'Poorvika',
        gender: 'Female',
      }
    ],
    telephone: '+91-6362395980',
    email: 'blissfulbites291@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '12.9716',
      longitude: '77.5946',
    },
    areaServed: {
      '@type': 'City',
      name: 'Bangalore',
    },
    priceRange: '₹₹',
    servesCuisine: 'Baked Goods',
    hasMenu: 'https://blissfullbites.com/menu',
    acceptsReservations: 'False',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Bank Transfer',
    openingHours: 'Mo-Su 09:00-20:00',
    sameAs: [
      'https://www.instagram.com/blissfull_bites',
      'https://www.facebook.com/blissfullbites',
    ],
    knowsAbout: [
      'Custom Cakes',
      'Birthday Cakes',
      'Wedding Cakes',
      'Cupcakes',
      'Cookies',
      'Brownies',
      'Macarons',
      'Eggless Baking',
      'Artisanal Baking'
    ],
    slogan: 'Handcrafted Sweetness, Baked with Heart',
    award: 'FSSAI Certified Home Bakery',
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://blissfullbites.com/#localbusiness',
    name: 'Blissful Bites',
    image: 'https://blissfullbites.com/Images/logo.jpeg',
    telephone: '+916362395980',
    email: 'blissfulbites291@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bangalore',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      postalCode: '560001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 12.9716,
      longitude: 77.5946,
    },
    url: 'https://blissfullbites.com',
    priceRange: '₹₹',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '09:00',
      closes: '20:00',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://blissfullbites.com/#website',
    url: 'https://blissfullbites.com',
    name: 'Blissful Bites',
    description: 'Bangalore\'s Premier FSSAI-Approved Home Bakery',
    publisher: {
      '@id': 'https://blissfullbites.com/#organization',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://blissfullbites.com/menu?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-IN',
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Images/logo.jpeg" />
        <link rel="apple-touch-icon" href="/Images/logo.jpeg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${poppins.variable} ${playfair.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded focus:shadow-lg"
        >
          Skip to content
        </a>
        <FirstLoadSplash />
        <div id="main-content">
          {children}
        </div>
        <WhatsAppFab />
        <Analytics />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery - Blissful Bites Bangalore | Photos of Our Handcrafted Cakes & Baked Goods',
  description: 'Browse Blissful Bites gallery - stunning photos of handcrafted cakes, cupcakes, cookies, brownies, macarons & more. See our FSSAI-approved bakery creations for birthdays, weddings & special occasions in Bangalore. Custom designs available.',
  keywords: [
    'Blissful Bites gallery',
    'bakery gallery Bangalore',
    'cake photos Bangalore',
    'cupcake gallery',
    'cookie photos',
    'brownie photos',
    'macaron gallery',
    'custom cake designs',
    'bakery portfolio',
    'wedding cake photos',
    'birthday cake gallery',
    'Blissfull Bites photos',
  ],
  openGraph: {
    title: 'Blissful Bites Gallery - Handcrafted Baked Goods Bangalore',
    description: 'Browse our gallery of beautiful handcrafted baked goods - cakes, cupcakes, cookies & more',
    images: ['/Images/logo.jpeg'],
    url: '/gallery',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blissful Bites Gallery Bangalore',
    description: 'Gallery of handcrafted baked goods',
    images: ['/Images/logo.jpeg'],
  },
  alternates: {
    canonical: '/gallery',
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

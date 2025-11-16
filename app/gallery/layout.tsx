import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery - View Our Creations',
  description: 'Browse our gallery of handcrafted baked goods including cakes, cupcakes, cookies, brownies, macarons, and more. See what we can create for your special occasion.',
  keywords: [
    'bakery gallery bangalore',
    'cake photos',
    'cupcake gallery',
    'cookie photos',
    'brownie photos',
    'macaron gallery',
    'custom cake designs',
    'bakery portfolio',
  ],
  openGraph: {
    title: 'Blissful Bites Gallery - Our Handcrafted Creations',
    description: 'Browse our gallery of beautiful handcrafted baked goods',
    images: ['/Images/logo.jpeg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blissful Bites Gallery',
    description: 'Gallery of handcrafted baked goods',
    images: ['/Images/logo.jpeg'],
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

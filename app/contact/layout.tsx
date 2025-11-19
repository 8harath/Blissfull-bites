import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Blissful Bites Bangalore | Order Custom Cakes | WhatsApp +91 63623 95980',
  description: 'Contact Blissful Bites to place your order. Call or WhatsApp us at +91 63623 95980. Email: blissfulbites291@gmail.com. FSSAI-approved bakery in Bangalore. 48-hour advance notice required. Custom cakes, cupcakes, cookies & more.',
  keywords: [
    'contact Blissful Bites',
    'Blissful Bites Bangalore contact',
    'order bakery Bangalore',
    'WhatsApp bakery',
    'call bakery Bangalore',
    'place cake order',
    'bakery contact number',
    'Bangalore home bakery contact',
    '+91 63623 95980',
    'Blissfull Bites contact',
  ],
  openGraph: {
    title: 'Contact Blissful Bites Bangalore',
    description: 'Get in touch to place your order. WhatsApp or call us today!',
    images: ['/Images/logo.jpeg'],
    url: '/contact',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Blissful Bites',
    description: 'Get in touch to place your order',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

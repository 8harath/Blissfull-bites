import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch',
  description: 'Contact Blissful Bites to place your order. Call or WhatsApp us at +91 63623 95980. Email: blissfulbites291@gmail.com. 48-hour advance notice required for all orders.',
  keywords: [
    'contact blissful bites',
    'order bakery bangalore',
    'whatsapp bakery',
    'call bakery bangalore',
    'place order',
    'bakery contact number',
    'bangalore home bakery contact',
  ],
  openGraph: {
    title: 'Contact Blissful Bites',
    description: 'Get in touch to place your order. WhatsApp or call us today!',
    images: ['/Images/logo.jpeg'],
  },
  twitter: {
    card: 'summary',
    title: 'Contact Blissful Bites',
    description: 'Get in touch to place your order',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

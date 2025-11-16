import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions',
  description: 'Find answers to common questions about ordering from Blissful Bites. Learn about our ordering process, delivery, customization options, pricing, and food safety standards.',
  keywords: [
    'bakery faq',
    'ordering questions',
    'delivery information',
    'custom cake questions',
    'bakery pricing',
    'eggless options',
    'FSSAI questions',
    'bangalore bakery faq',
  ],
  openGraph: {
    title: 'Blissful Bites FAQ',
    description: 'Frequently asked questions about ordering from Blissful Bites',
    images: ['/Images/logo.jpeg'],
  },
  twitter: {
    card: 'summary',
    title: 'Blissful Bites FAQ',
    description: 'Common questions about our bakery and ordering',
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

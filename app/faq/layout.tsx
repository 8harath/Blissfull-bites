import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions About Blissful Bites Bangalore',
  description: 'Find answers to common questions about ordering from Blissful Bites. Learn about our ordering process, delivery, customization options, pricing, and food safety standards for our FSSAI-approved bakery in Bangalore.',
  keywords: [
    'Blissful Bites FAQ',
    'bakery faq Bangalore',
    'ordering questions',
    'delivery information',
    'custom cake questions',
    'bakery pricing Bangalore',
    'eggless options',
    'FSSAI questions',
    'home bakery faq',
    'Blissfull Bites questions',
  ],
  openGraph: {
    title: 'FAQ - Blissful Bites Bangalore',
    description: 'Frequently asked questions about ordering from Blissful Bites',
    images: ['/Images/logo.jpeg'],
  },
  twitter: {
    card: 'summary',
    title: 'Blissful Bites FAQ',
    description: 'Common questions about our bakery and ordering',
  },
  alternates: {
    canonical: '/faq',
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I place an order at Blissful Bites?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Orders can be placed via call or WhatsApp at +91 63623 95980. Share your requirements, occasion, and preferred pickup date. We\'ll get back to you with details and confirmation.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the minimum advance notice for orders?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We require at least 48 hours advance notice for all orders to ensure freshness and quality. This allows us to source the best ingredients and prepare everything fresh.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Blissful Bites offer delivery in Bangalore?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Currently, we operate on a pickup-only basis. Exact pickup location in Bangalore will be shared upon order confirmation.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I customize my cake order?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We love creating customized items. Share your preferences, dietary needs, or special requests, and we\'ll do our best to accommodate.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you make eggless cakes and baked goods?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer a wide range of eggless items including our special Eggless Blondies collection. Just mention your preference when ordering.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Blissful Bites FSSAI licensed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we are an FSSAI-approved home bakery in Bangalore, adhering to all food safety and hygiene standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'What payment methods do you accept?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We accept UPI, bank transfers, and cash on pickup. Payment details will be shared upon order confirmation.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is your cancellation policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cancellations made 48 hours before pickup are fully refundable. Cancellations within 48 hours may incur charges depending on preparation status.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}

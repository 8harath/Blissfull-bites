"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ChevronDown } from "lucide-react"

const faqItems = [
  {
    category: "Ordering & Delivery",
    items: [
      {
        q: "How do I place an order?",
        a: "Orders can be placed via call or WhatsApp. Share your requirements, occasion, and preferred pickup date. We'll get back to you with details and confirmation.",
      },
      {
        q: "What is the minimum advance notice for orders?",
        a: "We require at least 48 hours advance notice for all orders to ensure freshness and quality. This allows us to source the best ingredients and prepare everything fresh.",
      },
      {
        q: "Do you offer delivery?",
        a: "Currently, we operate on a pickup-only basis. Exact pickup location in Bangalore will be shared upon order confirmation.",
      },
      {
        q: "Can I order for same-day pickup?",
        a: "Unfortunately, we cannot accommodate same-day orders as we prepare everything fresh to order. The 48-hour advance notice ensures the best quality.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    items: [
      {
        q: "How much do your products cost?",
        a: "Prices vary by product and quantity. Please contact us with your specific requirements for a detailed quote.",
      },
      {
        q: "Do you offer discounts for bulk orders?",
        a: "Yes! Bulk order pricing is available. Reach out to us with your quantity needs for a customized quote.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept UPI, bank transfers, and cash on pickup. Payment details will be shared upon order confirmation.",
      },
    ],
  },
  {
    category: "Products & Customization",
    items: [
      {
        q: "Can I customize my order?",
        a: "We love creating customized items. Share your preferences, dietary needs, or special requests, and we'll do our best to accommodate.",
      },
      {
        q: "Do you make eggless options?",
        a: "Yes, we offer a wide range of eggless items including our special Eggless Blondies collection. Just mention your preference when ordering.",
      },
      {
        q: "Are your products suitable for people with dietary restrictions?",
        a: "We offer whole grain, millet-based, and healthier alternatives. Please inform us of any allergies or dietary needs when ordering so we can assist you better.",
      },
      {
        q: "How fresh are the products?",
        a: "Everything is baked fresh to order. We don't maintain pre-made inventory to ensure maximum freshness and quality.",
      },
    ],
  },
  {
    category: "Food Safety & Certification",
    items: [
      {
        q: "Is Blissful Bites licensed?",
        a: "Yes, we are an FSSAI-approved home bakery, adhering to all food safety and hygiene standards.",
      },
      {
        q: "What ingredients do you use?",
        a: "We use premium quality ingredients and bake in small batches to maintain quality and taste. We're happy to discuss specific ingredients upon request.",
      },
    ],
  },
  {
    category: "Cancellations & Changes",
    items: [
      {
        q: "Can I modify my order after placing it?",
        a: "Changes can be accommodated if requested at least 24 hours before pickup. Contact us as soon as possible if you need to make changes.",
      },
      {
        q: "What is your cancellation policy?",
        a: "Cancellations made 48 hours before pickup are fully refundable. Cancellations within 48 hours may incur charges depending on preparation status.",
      },
    ],
  },
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <>
      <Header />

      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="heading-lg mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-foreground/80">Everything you need to know about ordering from Blissful Bites</p>
          </div>

          <div className="space-y-8">
            {faqItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h2 className="heading-md text-secondary mb-6">{section.category}</h2>

                <div className="space-y-3">
                  {section.items.map((item, itemIdx) => {
                    const itemId = `${sectionIdx}-${itemIdx}`
                    const isOpen = openItems.includes(itemId)

                    return (
                      <div key={itemId} className="card-base border border-border">
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full flex items-start justify-between gap-4 text-left"
                        >
                          <span className="font-semibold text-foreground flex-1">{item.q}</span>
                          <ChevronDown
                            size={20}
                            className={`flex-shrink-0 text-secondary transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {isOpen && (
                          <div className="mt-4 pt-4 border-t border-border text-body text-foreground/80">{item.a}</div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 card-base border border-border bg-card text-center">
            <h3 className="heading-md mb-3">Still have questions?</h3>
            <p className="text-body mb-6">Feel free to reach out to us via call or WhatsApp.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/916362395980" className="btn-primary">
                WhatsApp Us
              </a>
              <a href="tel:+916362395980" className="btn-secondary">
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

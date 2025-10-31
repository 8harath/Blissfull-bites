"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react"

export default function ContactPage() {

  return (
    <>
      <Header />

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="heading-lg mb-4">Get in Touch</h1>
            <p className="text-lg text-foreground/80">To order, reach out via call or WhatsApp</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="heading-md mb-8 text-secondary">Contact Information</h2>

              <div className="space-y-6">
                <div className="card-base border border-border">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Call or WhatsApp</h3>
                      <div className="space-y-1">
                        <a
                          href="tel:+916362395980"
                          className="text-primary hover:text-secondary transition-colors block"
                        >
                          +91 63623 95980
                        </a>
                        <a
                          href="https://wa.me/916362395980"
                          className="text-primary hover:text-secondary transition-colors block"
                        >
                          Chat on WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-base border border-border">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:blissfulbites291@gmail.com"
                        className="text-primary hover:text-secondary transition-colors"
                      >
                        blissfulbites291@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card-base border border-border">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-foreground/80">Bangalore, India</p>
                      <p className="text-sm text-foreground/60 mt-2">Pickup Only</p>
                    </div>
                  </div>
                </div>

                <div className="card-base border border-border bg-card">
                  <div className="flex items-start gap-4">
                    <MessageCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Order Notice</h3>
                      <p className="text-sm text-foreground/80">Please place orders at least 48 hours in advance</p>
                    </div>
                  </div>
                </div>

                <div className="card-base border border-border">
                  <h3 className="font-semibold mb-2">FSSAI License</h3>
                  <p className="text-sm text-foreground/80">FSSAI Approved Home Bakery</p>
                  <p className="text-xs text-foreground/60 mt-2">
                    <a href="/FSSAI_Certificate.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-secondary">
                      View certificate (PDF)
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Simple Instructions (no form) */}
            <div>
              <h2 className="heading-md mb-8 text-secondary">Place an Order</h2>
              <div className="card-base border border-border bg-card">
                <p className="text-body">
                  To place an order, simply call or WhatsApp us at <a href="tel:+916362395980" className="text-primary hover:text-secondary">+91 63623 95980</a>.
                  You can also email your requirements to <a href="mailto:blissfulbites291@gmail.com" className="text-primary hover:text-secondary">blissfulbites291@gmail.com</a>.
                  Please share your occasion, items, quantity, and preferred pickup date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orderType: "individual",
    occasion: "birthday",
    message: "",
    date: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send to a backend
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        orderType: "individual",
        occasion: "birthday",
        message: "",
        date: "",
      })
    }, 3000)
  }

  return (
    <>
      <Header />

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="heading-lg mb-4">Get in Touch</h1>
            <p className="text-lg text-foreground/80">We'd love to hear from you</p>
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
                      <h3 className="font-semibold mb-1">WhatsApp</h3>
                      <a
                        href="https://wa.me/919876543210"
                        className="text-primary hover:text-secondary transition-colors"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card-base border border-border">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:contact@blissfulbytes.com"
                        className="text-primary hover:text-secondary transition-colors"
                      >
                        contact@blissfulbytes.com
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
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="heading-md mb-8 text-secondary">Send us a Message</h2>

              {submitted ? (
                <div className="card-base border border-primary bg-primary/10 text-center py-12">
                  <div className="text-4xl mb-4">✓</div>
                  <h3 className="heading-md mb-2 text-primary">Thank You!</h3>
                  <p className="text-body">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Order Type *</label>
                      <select
                        name="orderType"
                        value={formData.orderType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      >
                        <option value="individual">Individual Order</option>
                        <option value="bulk">Bulk Order</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Occasion *</label>
                      <select
                        name="occasion"
                        value={formData.occasion}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      >
                        <option value="birthday">Birthday</option>
                        <option value="wedding">Wedding</option>
                        <option value="corporate">Corporate</option>
                        <option value="festival">Festival</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Pickup Date *</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message/Requirements *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      placeholder="Tell us about your order..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Heart, Users, Sparkles, Cake, Gem, Building2, PartyPopper, Home, Star } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: 'About Blissful Bites | Women-Led Home Bakery Bangalore | Our Story',
  description: 'Discover Blissful Bites - Bangalore\'s premier women-led FSSAI-approved home bakery. Founded by Savitha & Poorvika, we create handcrafted baked goods with love, premium ingredients, and artisanal techniques for all occasions.',
  keywords: [
    'about Blissful Bites',
    'Blissful Bites Bangalore',
    'women-led bakery Bangalore',
    'FSSAI approved bakery',
    'home bakery story',
    'Savitha Poorvika bakery',
    'Bangalore home bakery',
    'artisanal bakery story',
    'women entrepreneurs bakery',
    'Blissfull Bites about',
  ],
  openGraph: {
    title: 'About Blissful Bites - Women-Led Home Bakery in Bangalore',
    description: 'Meet Savitha & Poorvika - founders of Bangalore\'s FSSAI-approved home bakery crafting handmade baked goods',
    images: ['/Images/logo.jpeg'],
    url: '/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Blissful Bites Bangalore',
    description: 'Women-led FSSAI-approved home bakery in Bangalore',
    images: ['/Images/logo.jpeg'],
  },
  alternates: {
    canonical: '/about',
  },
}

const occasions = [
  { icon: Cake, label: "Birthdays" },
  { icon: Gem, label: "Weddings" },
  { icon: Building2, label: "Corporate Events" },
  { icon: PartyPopper, label: "Festivals" },
  { icon: Home, label: "House Parties" },
  { icon: Star, label: "Just Because" },
]

export default function AboutPage() {
  return (
    <>
      <Header />

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <h1 className="heading-lg text-center mb-12">About Blissful Bites</h1>

          {/* Story Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <h2 className="heading-md mb-6 text-secondary">Our Story</h2>
              <div className="space-y-4 text-body">
                <p>
                  Blissful Bites began with a simple belief: that the best baked goods are made with heart, not haste.
                  Founded by Savitha & Poorvika, our women-led home bakery in Bangalore is dedicated to creating handcrafted baked
                  goods that turn your special moments into sweet memories.
                </p>
                <p>
                  Every cookie, cake, and pastry that leaves our kitchen is a labor of love, crafted fresh to order
                  using premium ingredients and time-honored techniques. We believe in the power of homemade quality—the
                  kind that only comes from passion and dedication.
                </p>
                <p>
                  As an FSSAI-approved home bakery, we maintain the highest standards of food safety while preserving
                  the warmth and personal touch that only a home kitchen can offer. We're proud to be a women-led
                  business supporting our local community, one delicious treat at a time.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image src="/woman-baker-in-kitchen.jpg" alt="Savitha & Poorvika in the bakery" fill className="object-cover" />
            </div>
          </div>

          {/* Mission & Values */}
          <div className="mb-16">
            <h2 className="heading-md text-center mb-12 text-secondary">What We Believe In</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-base border border-border text-center">
                <div className="flex justify-center mb-4 text-secondary">
                  <Heart className="w-12 h-12" />
                </div>
                <h3 className="heading-md mb-3">Quality First</h3>
                <p className="text-body text-foreground/80">
                  Premium ingredients, no compromises. Every item is crafted with the finest materials.
                </p>
              </div>
              <div className="card-base border border-border text-center">
                <div className="flex justify-center mb-4 text-secondary">
                  <Sparkles className="w-12 h-12" />
                </div>
                <h3 className="heading-md mb-3">Made with Love</h3>
                <p className="text-body text-foreground/80">
                  Every item is crafted with personal attention and care, baked fresh to order.
                </p>
              </div>
              <div className="card-base border border-border text-center">
                <div className="flex justify-center mb-4 text-secondary">
                  <Users className="w-12 h-12" />
                </div>
                <h3 className="heading-md mb-3">Customer Joy</h3>
                <p className="text-body text-foreground/80">
                  Your celebrations are our inspiration. We're here to make your moments sweeter.
                </p>
              </div>
            </div>
          </div>

          {/* FSSAI Certification */}
          <div className="card-base border border-border bg-card text-center mb-16">
            <h3 className="heading-md mb-3 text-secondary">Licensed & Certified</h3>
            <p className="text-body mb-4">
              Blissful Bites is a certified home bakery, adhering to all food safety and hygiene standards set by FSSAI.
              Your trust and safety are our top priorities.
            </p>
            <div className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold">
              FSSAI Approved Home Bakery
            </div>
          </div>

          {/* Occasions */}
          <div>
            <h2 className="heading-md text-center mb-12 text-secondary">Perfect for Every Celebration</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {occasions.map((occasion, idx) => (
                <div
                  key={idx}
                  className="card-base border border-accent text-center hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="flex justify-center mb-3 text-secondary">
                    <occasion.icon className="w-10 h-10" />
                  </div>
                  <p className="font-medium text-foreground">{occasion.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowRight, Award, Clock, Leaf } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const categories = [
    { name: "Cookies & Brownies", image: "/chocolate-cookies-and-brownies.jpg" },
    { name: "Cakes & Pastries", image: "/elegant-cakes-and-pastries.jpg" },
    { name: "Macarons & Cupcakes", image: "/colorful-macarons-and-cupcakes.jpg" },
    { name: "Artisan Donuts", image: "/gourmet-artisan-donuts.jpg" },
    { name: "Specialty Items", image: "/financiers-and-madeleines.jpg" },
    { name: "Healthy Options", image: "/whole-grain-millet-baked-goods.jpg" },
  ]

  const whyChoose = [
    {
      icon: <Leaf className="w-12 h-12" />,
      title: "Homemade Quality",
      description: "Crafted in small batches with premium ingredients",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "FSSAI Certified",
      description: "Licensed and approved home bakery following highest standards",
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Made to Order",
      description: "Fresh baked goods prepared specially for you",
    },
  ]

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-card overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h1 className="heading-xl mb-4 text-balance">Blissful Bites</h1>
          <p className="text-xl md:text-2xl text-secondary font-medium mb-2">Handcrafted sweetness, baked with heart</p>
          <p className="text-base md:text-lg text-foreground/80 mb-8">FSSAI-Approved Home Bakery | Bangalore</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu" className="btn-primary">
              Explore Our Menu
              <ArrowRight className="inline ml-2 w-5 h-5" />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="card-base border border-border">
            <h2 className="heading-lg mb-6 text-center">Welcome to Blissful Bites</h2>
            <div className="space-y-4 text-body">
              <p>
                Welcome to Blissful Bites, where every bite tells a story of love, care, and artisanal craftsmanship.
                Founded by Savitha & Poorvika, we're a women-led, FSSAI-certified home bakery based in Bangalore, dedicated to
                creating handcrafted baked goods that turn your special moments into sweet memories.
              </p>
              <p>
                Blissful Bites began with a simple belief: that the best baked goods are made with heart, not haste.
                Every cookie, cake, and pastry that leaves our kitchen is a labor of love, crafted fresh to order using
                premium ingredients and time-honored techniques.
              </p>
              <p>
                As an FSSAI-approved home bakery, we maintain the highest standards of food safety while preserving the
                warmth and personal touch that only a home kitchen can offer. Whether you're celebrating a birthday,
                planning a corporate event, or simply craving something special, we're here to make your moments
                sweeter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-lg text-center mb-12">Our Specialties</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {categories.map((category) => (
              <div
                key={category.name}
                className="card-base border border-accent overflow-hidden hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="relative h-48 mb-4 -mx-6 -mt-6">
                  <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
                </div>
                <h3 className="heading-md mb-2">{category.name}</h3>
                <p className="text-sm text-foreground/70">Explore our collection</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/menu" className="btn-primary">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-lg text-center mb-12">Why Blissful Bites?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChoose.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4 text-secondary">{item.icon}</div>
                <h3 className="heading-md mb-3">{item.title}</h3>
                <p className="text-body text-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary text-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-4">Ready to Order?</h2>
          <p className="text-lg mb-8 opacity-90">
            Orders require 48 hours advance notice. Reach out via call or WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/916362395980"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              WhatsApp Us
            </a>
            <a
              href="tel:+916362395980"
              className="border-2 border-card text-card px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-card hover:text-secondary"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

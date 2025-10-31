"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { X } from "lucide-react"

const galleryImages = [
  // Cookies
  { id: 1, category: "cookies", alt: "Chunky filled cookies", src: "/Images/chunky filled cookies.JPG" },
  { id: 2, category: "cookies", alt: "Choco chip cookie", src: "/Images/chocochip cookie.JPG" },
  { id: 3, category: "cookies", alt: "Cookies box", src: "/Images/cookies.jpg" },

  // Cakes & Pastries
  { id: 10, category: "cakes", alt: "Custom black forest cake", src: "/Images/custom black forest.jpg" },
  { id: 11, category: "cakes", alt: "Custom cake", src: "/Images/custom cake.JPG" },
  { id: 12, category: "cakes", alt: "Custom cake 7", src: "/Images/custom cake 7.jpg" },
  { id: 13, category: "cakes", alt: "Fruit cake", src: "/Images/fruit cake.JPG" },
  { id: 14, category: "cakes", alt: "Plum cake", src: "/Images/plum cake.jpg" },
  { id: 15, category: "pastries", alt: "Tiramisu pastry", src: "/Images/tiramisu pastry.JPG" },
  { id: 16, category: "pastries", alt: "White forest pastry", src: "/Images/white forest pastry.JPG" },
  { id: 17, category: "pastries", alt: "Blueberry cream cheese pastry", src: "/Images/blueberry cream cheese pastry.JPG" },
  { id: 18, category: "pastries", alt: "Blueberry pastry", src: "/Images/blueberry pastry.jpg" },
  { id: 19, category: "pastries", alt: "Custom vanilla pastry", src: "/Images/custom vanilla pastry.JPEG" },
  { id: 20, category: "pastries", alt: "Ferrero rocher pastry", src: "/Images/ferrero rocher pastry.JPG" },
  { id: 21, category: "pastries", alt: "Butterscotch pastry", src: "/Images/butterscotch pastry.JPG" },
  { id: 22, category: "pastries", alt: "Pineapple lychee pastry", src: "/Images/pineapple lychee pastry.JPG" },
  { id: 23, category: "pastries", alt: "Custom lychee pastry", src: "/Images/custom lychee pastry.JPG" },
  { id: 24, category: "pastries", alt: "Tiramisu", src: "/Images/tiramisu.JPG" },

  // Brownies & Blondies
  { id: 30, category: "brownies", alt: "Custom brownies", src: "/Images/custom brownies.JPG" },
  { id: 31, category: "brownies", alt: "Red velvet brownie", src: "/Images/red velvet brownie.JPG" },
  { id: 32, category: "brownies", alt: "Hazelnut brownie", src: "/Images/hazelnut brownie.jpg" },
  { id: 33, category: "brownies", alt: "Redvelvet brownie", src: "/Images/redvelvet brownie.JPG" },

  // Cupcakes
  { id: 40, category: "cupcakes", alt: "Red velvet cupcakes", src: "/Images/red velvet cream cheese cupcakes.JPG" },
  { id: 41, category: "cupcakes", alt: "Red velvet cupcake", src: "/Images/redvelvet cupcake.jpg" },
  { id: 42, category: "cupcakes", alt: "Chocolate & vanilla cupcakes", src: "/Images/chocolate & vanilla cupcake.JPG" },
  { id: 43, category: "cupcakes", alt: "Cupcake", src: "/Images/cupcake.JPG" },

  // Donuts / Berliners / Bombolonis
  { id: 50, category: "donuts", alt: "Bomboloni", src: "/Images/bomboloni.JPG" },
  { id: 51, category: "donuts", alt: "Chocolate bombolonis", src: "/Images/chocolate bombolonis.JPG" },

  // Macarons
  { id: 60, category: "macarons", alt: "Creme de citron macaron", src: "/Images/Creme de citron macaron.heic" },

  // Special Treats
  { id: 70, category: "specialty", alt: "Madeleines", src: "/Images/madeleines.jpg" },
  { id: 71, category: "specialty", alt: "Peanut financiers", src: "/Images/peanut financiers.jpg" },
  { id: 72, category: "specialty", alt: "Pista financiers", src: "/Images/pista financiers.jpg" },

  // Cheesecakes
  { id: 80, category: "cakes", alt: "Chocolate cheesecake", src: "/Images/chocolate cheesecake.JPG" },
  { id: 81, category: "cakes", alt: "Oreo cheesecake", src: "/Images/oreo cheesecake.HEIC" },

  // Cloud / Other
  { id: 90, category: "cakes", alt: "Vanilla noir de madagascar", src: "/Images/vanilla noir de madagascar.heic" },
]

const categories = ["All", "Cookies", "Cakes", "Brownies", "Macarons", "Pastries", "Cupcakes", "Donuts", "Specialty"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory.toLowerCase())

  return (
    <>
      <Header />

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="heading-lg mb-4">Our Gallery</h1>
            <p className="text-lg text-foreground/80">A glimpse into our handcrafted creations</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-foreground hover:border-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image.id)}
                className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-2xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-primary transition-colors"
            >
              <X size={32} />
            </button>
            <Image
              src={galleryImages.find((img) => img.id === selectedImage)?.src || "/Images/logo.jpeg"}
              alt="Gallery image"
              width={600}
              height={600}
              className="w-full rounded-lg object-cover"
            />
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}

"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { X } from "lucide-react"

const galleryImages = [
  { id: 1, category: "cookies", alt: "Assorted cookies", query: "assorted homemade cookies" },
  { id: 2, category: "cakes", alt: "Elegant chocolate cake", query: "elegant chocolate layer cake" },
  { id: 3, category: "brownies", alt: "Fudgy brownies", query: "fudgy chocolate brownies" },
  { id: 4, category: "macarons", alt: "Colorful macarons", query: "colorful french macarons" },
  { id: 5, category: "pastries", alt: "Fresh pastries", query: "fresh baked pastries" },
  { id: 6, category: "cupcakes", alt: "Decorated cupcakes", query: "decorated cupcakes" },
  { id: 7, category: "donuts", alt: "Artisan donuts", query: "gourmet artisan donuts" },
  { id: 8, category: "specialty", alt: "Specialty items", query: "specialty baked goods" },
  { id: 9, category: "cookies", alt: "Cookie collection", query: "cookie collection display" },
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
                  src={`/.jpg?height=400&width=400&query=${image.query}`}
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
              src={`/.jpg?height=600&width=600&query=${galleryImages.find((img) => img.id === selectedImage)?.query}`}
              alt="Gallery image"
              width={600}
              height={600}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}

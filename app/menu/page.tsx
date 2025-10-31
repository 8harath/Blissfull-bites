import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

const menuCategories = [
  {
    name: "Cookies",
    priceRange: "₹700-900 per box",
    items: ["Butter Cookies", "Chocolate Chip", "Pistachio", "Hazelnut Chocolate", "Almond Biscotti"],
  },
  {
    name: "Chunky Centre Filled Cookies",
    priceRange: "₹800-1000 per box",
    items: ["Nutella Filled", "Caramel Filled", "Chocolate Fudge", "Peanut Butter"],
  },
  {
    name: "Pastries",
    priceRange: "₹600-800 per piece",
    items: ["Croissants", "Danish Pastries", "Éclairs", "Tarts"],
  },
  {
    name: "Cakes",
    priceRange: "₹1200-2000 per cake",
    items: ["Chocolate Cake", "Vanilla Cake", "Red Velvet", "Carrot Cake", "Black Forest"],
  },
  {
    name: "Cloud Cakes",
    priceRange: "₹1500-2500 per cake",
    items: ["Strawberry Cloud", "Mango Cloud", "Blueberry Cloud", "Vanilla Cloud"],
  },
  {
    name: "Brownies",
    priceRange: "₹500-700 per box",
    items: ["Classic Brownie", "Fudgy Brownie", "Walnut Brownie", "Double Chocolate"],
  },
  {
    name: "Blondies",
    priceRange: "₹500-700 per box",
    items: ["Classic Blondie", "Chocolate Chip", "Caramel Blondie", "Macadamia Nut"],
  },
  {
    name: "Eggless Blondies",
    priceRange: "₹550-750 per box",
    items: ["Eggless Classic", "Eggless Chocolate Chip", "Eggless Caramel"],
  },
  {
    name: "Cupcakes",
    priceRange: "₹150-250 per piece",
    items: ["Vanilla", "Chocolate", "Red Velvet", "Lemon", "Strawberry"],
  },
  {
    name: "Macarons",
    priceRange: "₹100-150 per piece",
    items: ["Pistachio", "Raspberry", "Chocolate", "Matcha", "Lavender"],
  },
  {
    name: "Donuts & Berliners",
    priceRange: "₹80-120 per piece",
    items: ["Glazed Donut", "Chocolate Donut", "Jam Filled", "Berliner"],
  },
  {
    name: "Financiers (Special Range)",
    priceRange: "₹80-100 per piece",
    items: ["Almond Financier", "Pistachio Financier", "Chocolate Financier"],
  },
  {
    name: "Madeleines (Special Range)",
    priceRange: "₹60-80 per piece",
    items: ["Classic Madeleine", "Lemon Madeleine", "Chocolate Madeleine"],
  },
  {
    name: "Petit Cakes",
    priceRange: "₹150-200 per piece",
    items: ["Chocolate Petit", "Vanilla Petit", "Fruit Petit"],
  },
  {
    name: "Whole Grain Brownies",
    priceRange: "₹600-800 per box",
    items: ["Jaggery & Brown Sugar", "Whole Wheat Chocolate", "Millet Brownie"],
  },
  {
    name: "Tres Leches",
    priceRange: "₹1800-2500 per cake",
    items: ["Classic Tres Leches", "Strawberry Tres Leches"],
  },
  {
    name: "Iyengar Bakery Tea Cakes",
    priceRange: "₹400-600 per box",
    items: ["Traditional Tea Cake", "Cardamom Tea Cake", "Coconut Tea Cake"],
  },
]

export default function MenuPage() {
  const itemImageMap: Record<string, string> = {
    // Cookies
    "Chocolate Chip": "/Images/chocochip cookie.JPG",
    "Pistachio": "/Images/pista financiers.jpg", // closest relevant image
    "Hazelnut Chocolate": "/Images/hazelnut brownie.jpg",

    // Chunky Centre Filled Cookies
    "Nutella Filled": "/Images/chunky filled cookies.JPG",
    "Caramel Filled": "/Images/chunky filled cookies.JPG",
    "Chocolate Fudge": "/Images/chunky filled cookies.JPG",
    "Peanut Butter": "/Images/chunky filled cookies.JPG",

    // Cakes
    "Chocolate Cake": "/Images/chocolate truffle.JPG",
    "Vanilla Cake": "/Images/custom vanilla pastry.JPEG",
    "Red Velvet": "/Images/redvelvet .JPG",
    "Black Forest": "/Images/custom black forest.jpg",
    "Fruit Petit": "/Images/fruit cake.JPG",

    // Tres Leches
    "Classic Tres Leches": "/Images/mango tresleches.JPEG",
    "Strawberry Tres Leches": "/Images/mango tres leches.JPEG",

    // Cupcakes
    "Red Velvet": "/Images/redvelvet cupcake.jpg",
    "Vanilla": "/Images/cupcake.JPG",
    "Chocolate": "/Images/chocolate & vanilla cupcake.JPG",

    // Macarons
    "Pistachio": "/Images/Creme de citron macaron.heic",

    // Donuts & Berliners
    "Berliner": "/Images/bomboloni.JPG",
    "Jam Filled": "/Images/chocolate bombolonis.JPG",

    // Financiers (Special Range)
    "Almond Financier": "/Images/peanut financiers.jpg",
    "Pistachio Financier": "/Images/pista financiers.jpg",

    // Madeleines
    "Classic Madeleine": "/Images/madeleines.jpg",

    // Brownies
    "Classic Brownie": "/Images/custom brownies.JPG",
    "Walnut Brownie": "/Images/custom brownies.JPG",
    "Red Velvet Brownie": "/Images/red velvet brownie.JPG",

    // Iyengar Bakery Tea Cakes
    "Traditional Tea Cake": "/Images/tea cake.JPG",
  }
  return (
    <>
      <Header />

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="heading-lg mb-4">Our Menu</h1>
            <p className="text-lg text-foreground/80 mb-2">Handcrafted treats for every occasion</p>
            <p className="text-sm text-foreground/60">
              Prices available upon request. Orders require 48 hours advance notice.
            </p>
          </div>

          <div className="space-y-12">
            {menuCategories.map((category, idx) => (
              <div key={idx} className="border-b border-border pb-8 last:border-b-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h2 className="heading-md text-secondary">{category.name}</h2>
                  <span className="text-sm text-foreground/70 mt-2 md:mt-0">{category.priceRange}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="card-base border border-accent overflow-hidden">
                      {itemImageMap[item] ? (
                        <div className="relative h-36 -mx-6 -mt-6 mb-3">
                          <Image
                            src={itemImageMap[item]}
                            alt={item}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : null}
                      <p className="font-medium text-foreground">{item}</p>
                      <p className="text-xs text-foreground/60 mt-1">Available on request</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="card-base border border-border bg-card">
              <h3 className="heading-md mb-3">Interested in custom orders or bulk quantities?</h3>
              <p className="text-body mb-6">We love creating customized items for special occasions and bulk orders.</p>
              <Link href="/contact" className="btn-primary">
                Contact Us for Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Column */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Blissful Bites</h3>
            <p className="text-sm leading-relaxed opacity-90">
              Handcrafted sweetness, baked with heart. FSSAI-approved home bakery creating artisanal baked goods for all
              occasions.
            </p>
            <p className="text-xs mt-4 opacity-75">Women-led • Bangalore-based • Made to Order</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Menu", href: "/menu" },
                { label: "About Us", href: "/about" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact", href: "/contact" },
                { label: "FAQ", href: "/faq" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Get in Touch</h3>
            <div className="space-y-3 text-sm">
              <a
                href="https://wa.me/919876543210"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone size={16} />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="mailto:contact@blissfulBites.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail size={16} />
                <span>contact@blissfulBites.com</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-card/20 pt-8 text-center text-xs opacity-75">
          <p>© 2025 Blissful Bites. All rights reserved.</p>
          <p className="mt-2"></p>
        </div>
      </div>
    </footer>
  )
}

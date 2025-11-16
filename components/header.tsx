"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

/**
 * Navigation item interface
 */
interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
]

/**
 * Header Component
 *
 * Responsive navigation header with mobile menu and auto-hide on scroll.
 * Features:
 * - Desktop horizontal navigation
 * - Mobile hamburger menu
 * - Auto-hide on scroll down, show on scroll up
 * - Logo with brand image
 *
 * @component
 * @example
 * ```tsx
 * <Header />
 * ```
 *
 * @returns {JSX.Element} The navigation header
 */
export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const currentY = window.scrollY
      const isScrollingDown = currentY > lastY && currentY > 10
      setIsHidden(isScrollingDown)
      lastY = currentY
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header className={`sticky top-0 z-50 bg-background shadow-sm transition-transform duration-300 ${isHidden ? "-translate-y-full" : "translate-y-0"}`}>
        <nav className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/Images/logo.jpeg"
            alt="Blissful Bites logo"
            width={56}
            height={56}
            className="rounded-full object-cover"
          />
          <span className="font-serif text-2xl md:text-3xl font-bold text-foreground group-hover:text-secondary transition-colors">
            Blissful Bites
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground font-medium hover:text-secondary transition-colors relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* spacer for desktop right side */}

        {/* Mobile Navigation */}
      </nav>
      </header>

      {/* Mobile: Centered logo in header by auto margins */}
      <style jsx global>{`
        @media (max-width: 767px) {
          header nav > a:first-of-type { justify-content: center; margin-left: auto; margin-right: auto; }
        }
      `}</style>

      {/* Floating hamburger outside transforming header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed right-4 top-3 z-[70] h-10 w-10 flex items-center justify-center rounded-full border border-border bg-card/80 backdrop-blur shadow-md hover:shadow-lg transition-all"
        aria-label="Toggle navigation"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Navigation Overlay with slide-in panel */}
      <div className={`md:hidden fixed inset-0 z-[60] ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!isOpen}
      >
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-background/70 dark:bg-background/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        />
        <div
          className={`absolute right-0 top-0 h-full w-4/5 max-w-sm bg-card/80 dark:bg-card/70 backdrop-blur-md border-l border-border/50 dark:border-border/40 shadow-xl p-6 pt-20 flex flex-col gap-3 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="mb-3 text-foreground/70 text-sm">Menu</div>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground text-lg font-medium py-3 px-2 rounded-lg hover:bg-muted/20 hover:text-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

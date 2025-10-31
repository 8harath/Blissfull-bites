"use client"

import Link from "next/link"

export default function WhatsAppFab() {
  return (
    <Link
      href="https://wa.me/916362395980"
      target="_blank"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 bottom-4 z-[70] h-14 w-14 rounded-full flex items-center justify-center bg-secondary text-secondary-foreground border border-border shadow-md hover:shadow-lg ring-1 ring-primary/20 transition-all"
    >
      {/* Traditional, professional glyph matching theme (uses currentColor) */}
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19.11 17.23c-.29-.14-1.69-.83-1.95-.92-.26-.1-.45-.14-.64.14-.19.29-.74.92-.91 1.11-.17.19-.34.21-.63.07-.29-.14-1.22-.45-2.32-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.64-1.54-.87-2.11-.23-.55-.47-.48-.64-.48-.17 0-.36-.02-.55-.02-.19 0-.51.07-.78.36-.26.29-1.01.98-1.01 2.39 0 1.41 1.04 2.77 1.18 2.96.14.19 2.05 3.14 4.97 4.39.69.3 1.22.48 1.64.62.69.22 1.31.19 1.8.12.55-.08 1.69-.69 1.93-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z"
          fill="currentColor"
        />
        <path
          d="M26.6 5.4C23.8 2.6 20.1 1 16.2 1 7.9 1 1.2 7.7 1.2 16c0 2.6.7 5.1 2.1 7.4L1 31l7.8-2.1c2.2 1.2 4.6 1.8 7.2 1.8 8.3 0 15-6.7 15-14.9 0-3.9-1.6-7.6-4.4-10.4zM16 28.3c-2.3 0-4.6-.6-6.6-1.8l-.47-.28-4.6 1.2 1.2-4.5-.3-.48C3 20.4 2.4 18.2 2.4 16 2.4 8.4 8.4 2.4 16 2.4c3.6 0 7 1.4 9.5 4 2.5 2.5 4 5.9 4 9.5 0 7.6-6 12.4-13.5 12.4z"
          fill="currentColor"
        />
      </svg>
    </Link>
  )
}



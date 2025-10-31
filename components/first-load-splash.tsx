"use client"

import React from "react"

function useFirstLoadGate(key: string, durationMs: number) {
  const [visible, setVisible] = React.useState(false)
  const [fading, setFading] = React.useState(false)

  React.useEffect(() => {
    try {
      const hasSeen = typeof window !== "undefined" && localStorage.getItem(key)
      if (!hasSeen) {
        setVisible(true)
        const fadeTimer = window.setTimeout(() => {
          setFading(true)
        }, Math.max(0, durationMs - 500))
        const timer = window.setTimeout(() => {
          setVisible(false)
          localStorage.setItem(key, "1")
        }, durationMs)
        return () => {
          window.clearTimeout(timer)
          window.clearTimeout(fadeTimer)
        }
      }
    } catch {
      // no-op: if storage fails, just don't show the splash next time
    }
  }, [key, durationMs])

  return { visible, fading }
}

export default function FirstLoadSplash() {
  const { visible, fading } = useFirstLoadGate("blissful-splash-seen", 2600)
  if (!visible) return null

  return (
    <div
      className={
        "fixed inset-0 z-[1000] flex items-center justify-center bg-[var(--background)] text-[var(--foreground)] transition-opacity duration-500 " +
        (fading ? "opacity-0" : "opacity-100")
      }
    >
      <div className="relative flex flex-col items-center">
        {/* Logo mark: a simple cupcake with rising steam and chocolate drip */}
        <svg
          className="h-28 w-28 md:h-36 md:w-36" viewBox="0 0 120 120" fill="none" aria-hidden
        >
          {/* Base shadow */}
          <ellipse cx="60" cy="98" rx="26" ry="6" fill="rgba(0,0,0,0.08)" className="animate-bb-pulse" />

          {/* Wrapper (cup) */}
          <path
            d="M32 76c0-4 3-7 7-7h42c4 0 7 3 7 7l-5 16a10 10 0 0 1-9 7H46a10 10 0 0 1-9-7L32 76Z"
            fill="var(--secondary)"
          />
          <path d="M40 79h40" stroke="var(--secondary-foreground)" strokeOpacity=".25" strokeWidth="2" />
          <path d="M38 84h44" stroke="var(--secondary-foreground)" strokeOpacity=".18" strokeWidth="2" />

          {/* Frosting */}
          <path
            d="M38 70c0-8 9-14 22-14s22 6 22 14c0 2-1 4-2 6H40c-1-2-2-4-2-6Z"
            fill="var(--card)"
          />

          {/* Chocolate drip */}
          <path
            className="animate-bb-drip"
            d="M44 68c6-4 34-4 40 0v2c-3 3-6 4-9 2-2-1-3 1-4 3-1 3-5 5-9 2-2-2-4-2-6 0-4 3-8 1-9-2-1-2-2-4-4-3-3 2-6 1-9-2v-2Z"
            fill="var(--chocolate-brown)"
          />

          {/* Sprinkles */}
          {[...Array(10)].map((_, i) => (
            <circle
              key={i}
              className="animate-bb-crumb"
              cx={60 + Math.cos((i / 10) * Math.PI * 2) * 10}
              cy={58 + Math.sin((i / 10) * Math.PI * 2) * 4}
              r="1.7"
              fill={i % 2 ? "var(--primary)" : "var(--accent)"}
            />
          ))}

          {/* Steam */}
          <path
            className="animate-bb-steam"
            d="M58 40c-4-6 4-8 0-14M66 38c-4-6 4-8 0-14"
            stroke="var(--muted)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        <div className="mt-5 text-center">
          <div className="font-serif text-xl md:text-2xl">Blissful Bites</div>
          <div className="text-sm md:text-base text-[var(--muted-foreground)]">Handcrafted sweetness, baked with heart</div>
        </div>
      </div>
    </div>
  )
}



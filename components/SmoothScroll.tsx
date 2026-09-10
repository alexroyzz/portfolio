"use client"

import { useEffect } from "react"

/** Lenis smooth scrolling, disabled when the user prefers reduced motion. */
export default function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) return

    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null
    let frame = 0

    const start = async () => {
      const Lenis = (await import("lenis")).default
      lenis = new Lenis({ duration: 1.05, smoothWheel: true })
      const raf = (time: number) => {
        lenis?.raf(time)
        frame = requestAnimationFrame(raf)
      }
      frame = requestAnimationFrame(raf)
    }

    void start()

    return () => {
      cancelAnimationFrame(frame)
      lenis?.destroy()
    }
  }, [])

  return null
}

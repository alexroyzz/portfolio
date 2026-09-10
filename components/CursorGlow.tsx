"use client"

import { useEffect, useRef } from "react"

/** Soft accent glow that lags behind the pointer. Desktop + fine pointer only. */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!fine || reduced) return

    const el = ref.current
    if (!el) return

    let tx = window.innerWidth / 2
    let ty = window.innerHeight / 2
    let x = tx
    let y = ty
    let frame = 0

    const onMove = (e: PointerEvent) => {
      tx = e.clientX
      ty = e.clientY
      el.style.opacity = "1"
    }

    const loop = () => {
      x += (tx - x) * 0.09
      y += (ty - y) * 0.09
      el.style.transform = `translate3d(${x - 320}px, ${y - 320}px, 0)`
      frame = requestAnimationFrame(loop)
    }

    window.addEventListener("pointermove", onMove, { passive: true })
    frame = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener("pointermove", onMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 h-[640px] w-[640px] rounded-full opacity-0 blur-[100px] transition-opacity duration-700"
      style={{ background: "radial-gradient(circle, rgba(110,168,255,.09), transparent 62%)" }}
    />
  )
}

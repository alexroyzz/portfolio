"use client"

import { useRef, type ReactNode } from "react"

type Props = {
  children: ReactNode
  strength?: number
  className?: string
}

/** Wraps a child and pulls it gently toward the cursor (desktop only). */
export default function Magnetic({ children, strength = 0.24, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null)

  const move = (e: React.PointerEvent<HTMLSpanElement>) => {
    const el = ref.current
    if (!el) return
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - (r.left + r.width / 2)) * strength
    const y = (e.clientY - (r.top + r.height / 2)) * strength
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`
  }

  const reset = () => {
    const el = ref.current
    if (el) el.style.transform = "translate3d(0,0,0)"
  }

  return (
    <span
      ref={ref}
      onPointerMove={move}
      onPointerLeave={reset}
      className={`inline-block transition-transform duration-500 ease-smooth ${className ?? ""}`}
    >
      {children}
    </span>
  )
}

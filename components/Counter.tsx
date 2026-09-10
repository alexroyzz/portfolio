"use client"

import { useEffect, useRef, useState } from "react"
import { useInView, useReducedMotion } from "framer-motion"

type Props = { to: number; suffix?: string; duration?: number }

/** Animated number counter that runs once when scrolled into view. */
export default function Counter({ to, suffix, duration = 1500 }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-15% 0px" })
  const reduced = useReducedMotion()
  const [value, setValue] = useState(reduced ? to : 0)

  useEffect(() => {
    if (reduced) {
      setValue(to)
      return
    }
    if (!inView) return

    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(to * eased))
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, to, duration, reduced])

  return (
    <span ref={ref}>
      {value}
      {suffix ? <span className="text-accent">{suffix}</span> : null}
    </span>
  )
}

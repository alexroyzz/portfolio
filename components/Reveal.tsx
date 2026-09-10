"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

type Props = {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: "div" | "section" | "li" | "article" | "header"
}

/** Scroll-triggered fade + rise. Honours prefers-reduced-motion. */
export default function Reveal({ children, delay = 0, y = 26, className, as = "div" }: Props) {
  const reduced = useReducedMotion()
  const MotionTag = motion[as] as typeof motion.div

  if (reduced) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -8% 0px" }}
      transition={{ duration: 0.78, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}

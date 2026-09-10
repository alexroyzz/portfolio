"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 260, damping: 40, restDelta: 0.001 })

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[9999] h-[2px] w-full origin-left bg-gradient-to-r from-accent to-mint"
    />
  )
}

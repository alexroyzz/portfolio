"use client"

import { motion, useReducedMotion } from "framer-motion"

const WORDS = ["DESIGN.", "BUILD.", "DEPLOY."]

export default function Statement() {
  const reduced = useReducedMotion()

  return (
    <section className="section border-y border-line">
      <div className="shell">
        <h2 className="h-display flex flex-wrap gap-x-[0.3em] gap-y-1">
          {WORDS.map((w, i) => (
            <motion.span
              key={w}
              className="inline-block"
              initial={reduced ? false : { opacity: 0.12, filter: "blur(10px)", y: 18 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 0.8, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
            >
              {w}
            </motion.span>
          ))}
        </h2>
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="lead mt-8"
        >
          Every project on this page went through all three.
        </motion.p>
      </div>
    </section>
  )
}

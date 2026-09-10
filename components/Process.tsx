"use client"

import { useEffect, useRef } from "react"
import { process } from "@/data/site"
import Reveal from "./Reveal"

/** Process timeline with a GSAP ScrollTrigger line that fills as you scroll. */
export default function Process() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const fillRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (fillRef.current) fillRef.current.style.height = "100%"
      return
    }

    let ctx: { revert: () => void } | null = null

    const run = async () => {
      const gsapMod = await import("gsap")
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")
      const gsap = gsapMod.gsap ?? gsapMod.default
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        gsap.fromTo(
          fillRef.current,
          { height: "0%" },
          {
            height: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: wrapRef.current,
              start: "top 72%",
              end: "bottom 62%",
              scrub: 0.4,
            },
          },
        )
      }, wrapRef)
    }

    void run()
    return () => ctx?.revert()
  }, [])

  return (
    <section className="section border-t border-line">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">How I work</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="h1 gradient-text mt-6 max-w-[16ch]">A process that ends in production.</h2>
        </Reveal>

        <div ref={wrapRef} className="relative mt-12">
          <span aria-hidden className="absolute bottom-3 left-[23px] top-3 w-px bg-line">
            <span
              ref={fillRef}
              className="absolute left-0 top-0 block h-0 w-px bg-gradient-to-b from-accent to-mint"
            />
          </span>

          <ol>
            {process.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 0.04} className="relative flex max-w-[900px] gap-7 py-6">
                <span className="z-[1] flex h-[47px] w-[47px] flex-none items-center justify-center rounded-full border border-line bg-bg font-mono text-[12.5px] text-tx3">
                  {s.n}
                </span>
                <div className="pt-2">
                  <h3 className="h3">{s.title}</h3>
                  <p className="mt-[7px] max-w-[76ch] text-[15px] leading-[1.62] text-tx2">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

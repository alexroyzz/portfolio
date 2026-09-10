"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { site } from "@/data/site"

/**
 * Cinematic intro: 12 greetings (~170ms each ≈ 2.05s), then the name card,
 * then a vertical clip-path reveal into the portfolio.
 *
 * Skipped entirely for reduced-motion users and on repeat visits in the same
 * session, so recruiters never wait twice. Clicking or pressing Esc/Enter/Space
 * exits immediately.
 */
const GREETINGS = [
  "HELLO",
  "नमस्ते",
  "HOLA",
  "BONJOUR",
  "CIAO",
  "HALLO",
  "OLÁ",
  "こんにちは",
  "你好",
  "안녕하세요",
  "مرحبا",
  "WELCOME",
]

const STEP = 170
const EASE = [0.22, 1, 0.36, 1] as const

export default function Intro() {
  const reduced = useReducedMotion()
  const [phase, setPhase] = useState<"idle" | "greetings" | "name" | "done">("idle")
  const [index, setIndex] = useState(0)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  const finish = useCallback(() => {
    timers.current.forEach(clearTimeout)
    timers.current = []
    setPhase("done")
    document.documentElement.classList.remove("intro-lock")
    try {
      sessionStorage.setItem("introSeen", "1")
    } catch {
      /* private mode — intro simply plays again */
    }
  }, [])

  useEffect(() => {
    let seen = false
    try {
      seen = sessionStorage.getItem("introSeen") === "1"
    } catch {
      seen = false
    }

    if (reduced || seen) {
      document.documentElement.classList.remove("intro-lock")
      setPhase("done")
      return
    }

    document.documentElement.classList.add("intro-lock")
    setPhase("greetings")

    const push = (fn: () => void, ms: number) => {
      timers.current.push(setTimeout(fn, ms))
    }

    GREETINGS.forEach((_, i) => {
      if (i === 0) return
      push(() => setIndex(i), i * STEP)
    })

    const total = GREETINGS.length * STEP
    push(() => setPhase("name"), total)
    push(finish, total + 820)

    return () => {
      timers.current.forEach(clearTimeout)
      timers.current = []
      document.documentElement.classList.remove("intro-lock")
    }
  }, [reduced, finish])

  useEffect(() => {
    if (phase === "done" || phase === "idle") return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") finish()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [phase, finish])

  const active = phase === "greetings" || phase === "name"
  const progress = phase === "name" ? 1 : (index + 1) / GREETINGS.length

  return (
    <AnimatePresence>
      {active ? (
        <motion.div
          key="intro"
          role="presentation"
          aria-hidden
          onClick={finish}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-bg"
          initial={{ clipPath: "inset(0 0 0 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)", scale: 1.03, opacity: 0.65 }}
          transition={{ duration: 1, ease: EASE }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute h-[760px] w-[760px] rounded-full blur-[90px]"
            style={{ background: "radial-gradient(circle, rgba(110,168,255,.13), transparent 62%)" }}
          />

          {phase === "greetings" ? (
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                dir={GREETINGS[index] === "مرحبا" ? "rtl" : undefined}
                className="relative whitespace-nowrap px-5 text-center font-display text-[clamp(38px,7vw,86px)] font-semibold leading-none tracking-[-0.035em]"
                initial={{ opacity: 0, filter: "blur(14px)", y: 16, scale: 0.94 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0, scale: 1 }}
                exit={{ opacity: 0, filter: "blur(14px)", y: -16, scale: 1.05 }}
                transition={{ duration: 0.2, ease: EASE }}
              >
                {GREETINGS[index]}
              </motion.span>
            </AnimatePresence>
          ) : (
            <motion.div
              className="relative text-center"
              initial={{ opacity: 0, y: 18, scale: 0.97, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <p className="font-display text-[clamp(44px,9vw,112px)] font-semibold leading-[0.98] tracking-[-0.045em]">
                DEEPAK
              </p>
              <p className="mt-4 font-mono text-[clamp(11px,1.5vw,14px)] uppercase tracking-[0.34em] text-tx3">
                {site.title}
              </p>
            </motion.div>
          )}

          <motion.span
            aria-hidden
            className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-accent to-mint"
            animate={{ width: `${progress * 100}%` }}
            transition={{ duration: 0.15, ease: "linear" }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, MapPin, Code2, GraduationCap } from "lucide-react"
import { site } from "@/data/site"
import Magnetic from "./Magnetic"

const words = (site.headline.before + site.headline.accent).split(" ")
const accentFrom = site.headline.before.trim().split(" ").length

export default function Hero() {
  const reduced = useReducedMotion()

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pb-[104px] pt-[124px]">
      <div
        aria-hidden
        className="animate-floaty pointer-events-none absolute -left-[8%] top-[8%] h-[520px] w-[520px] rounded-full blur-[110px]"
        style={{ background: "radial-gradient(circle, rgba(110,168,255,.14), transparent 65%)" }}
      />
      <div
        aria-hidden
        className="animate-floaty-slow pointer-events-none absolute -right-[6%] bottom-[6%] h-[440px] w-[440px] rounded-full blur-[110px]"
        style={{ background: "radial-gradient(circle, rgba(114,188,143,.10), transparent 65%)" }}
      />

      <div className="shell relative z-10">
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-[10px] rounded-full border border-line bg-white/[.03] px-[15px] py-2 text-[13px] text-tx2"
        >
          <span className="relative flex h-[7px] w-[7px]">
            <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-mint" />
            <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-mint" />
          </span>
          {site.availability}
        </motion.p>

        <h1 className="h-display max-w-[16ch]">
          {words.map((w, i) => (
            <motion.span
              key={`${w}-${i}`}
              className={`mr-[0.24em] inline-block ${i >= accentFrom ? "text-accent" : ""}`}
              initial={reduced ? false : { opacity: 0, y: "0.5em", filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.055, ease: [0.22, 1, 0.36, 1] }}
            >
              {w}
            </motion.span>
          ))}
        </h1>

        <motion.ul
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 font-mono text-[12.5px] text-tx3"
        >
          <li className="flex items-center gap-2"><MapPin size={14} /> {site.location}</li>
          <li className="flex items-center gap-2"><Code2 size={14} /> {site.title}</li>
          <li className="flex items-center gap-2"><GraduationCap size={14} /> {site.education}</li>
        </motion.ul>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="lead mt-7"
        >
          {site.intro}
        </motion.p>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          className="mt-11 flex flex-wrap items-center gap-3"
        >
          <Magnetic>
            <a href="#work" className="btn btn-primary">
              View My Work <ArrowRight size={16} />
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#contact" className="btn btn-secondary">
              Let&apos;s Work Together
            </a>
          </Magnetic>

          <div className="ml-1 flex items-center gap-2">
            {[
              { href: site.github, label: "GitHub", Icon: Github },
              { href: site.linkedin, label: "LinkedIn", Icon: Linkedin },
              { href: `mailto:${site.email}`, label: "Email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-tx2 transition-all duration-300 hover:-translate-y-[2px] hover:border-line2 hover:text-tx"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

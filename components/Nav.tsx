"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { navLinks, site } from "@/data/site"
import Magnetic from "./Magnetic"

export default function Nav() {
  const [stuck, setStuck] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[900] transition-all duration-500 ease-smooth ${
        stuck ? "border-b border-line bg-bg/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="shell flex items-center justify-between py-[18px]" aria-label="Primary">
        <a href="#top" className="flex items-center gap-[9px] font-display text-[17px] font-semibold tracking-tight">
          <span className="h-[7px] w-[7px] rounded-full bg-mint" />
          {site.name}
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[14px] text-tx2 transition-colors duration-300 hover:text-tx"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Magnetic>
            <a href="#contact" className="btn btn-secondary !py-[10px] !text-[13.5px]">
              Let&apos;s Talk
            </a>
          </Magnetic>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-tx lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-line bg-bg/95 backdrop-blur-xl lg:hidden">
          <ul className="shell flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-2 py-3 text-[17px] text-tx2 transition-colors hover:text-tx"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary w-full justify-center">
                Let&apos;s Talk
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  )
}

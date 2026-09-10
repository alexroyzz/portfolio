import { ArrowUpRight, Mail } from "lucide-react"
import { site } from "@/data/site"
import Reveal from "./Reveal"
import Magnetic from "./Magnetic"

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line py-[clamp(92px,12vw,168px)]">
      <div
        aria-hidden
        className="animate-floaty pointer-events-none absolute left-1/2 top-1/2 h-[660px] w-[660px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
        style={{ background: "rgba(110,168,255,.11)" }}
      />
      <div className="shell relative z-[2] text-center">
        <Reveal>
          <h2 className="h-display">Have a project in mind?</h2>
        </Reveal>
        <Reveal delay={0.07}>
          <p className="h-display" style={{ color: "rgba(245,245,247,.60)" }}>
            Let&apos;s build it.
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="lead mx-auto mt-8 text-center">
            Whether it&apos;s a business website, an e-commerce platform, an internal tool or an API &mdash; I can take it
            from idea to a live URL.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Magnetic>
              <a href={`mailto:${site.email}`} className="btn btn-primary">
                Let&apos;s Work Together <ArrowUpRight size={16} />
              </a>
            </Magnetic>
            <Magnetic>
              <a href={`mailto:${site.email}`} className="btn btn-secondary">
                <Mail size={16} /> Email Me
              </a>
            </Magnetic>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[16px] border border-line bg-line text-left sm:grid-cols-3">
            <div className="bg-surface p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-tx3">Email</p>
              <a href={`mailto:${site.email}`} className="mt-3 block break-all text-[15px] hover:text-accent">
                {site.email}
              </a>
            </div>
            <div className="bg-surface p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-tx3">LinkedIn</p>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-[6px] text-[15px] hover:text-accent"
              >
                Deepak Kumar <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="bg-surface p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-tx3">GitHub</p>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-[6px] text-[15px] hover:text-accent"
              >
                {site.githubHandle} <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

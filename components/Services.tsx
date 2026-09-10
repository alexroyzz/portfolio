import { Code, Database, Monitor, Rocket } from "lucide-react"
import { services } from "@/data/site"
import Reveal from "./Reveal"

const ICONS = { monitor: Monitor, code: Code, database: Database, rocket: Rocket } as const

export default function Services() {
  return (
    <section id="skills" className="section">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">What I do</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="h1 gradient-text mt-6 max-w-[20ch]">Full-stack, from the schema to the deploy.</h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS]
            return (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="group h-full rounded-[20px] border border-line bg-surface p-8 transition-all duration-500 ease-smooth hover:-translate-y-[3px] hover:border-line2 hover:bg-raised">
                  <span className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-line bg-white/[.03] text-accent transition-colors duration-500 group-hover:border-accent/40">
                    <Icon size={20} />
                  </span>
                  <h3 className="h3 mt-7">{s.title}</h3>
                  <p className="mt-4 text-[15px] leading-[1.62] text-tx2">{s.body}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.chips.map((c) => (
                      <li key={c} className="rounded-lg border border-line px-[10px] py-[6px] font-mono text-[11.5px] text-tx3">
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

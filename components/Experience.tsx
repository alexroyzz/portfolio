import { experience } from "@/data/site"
import Reveal from "./Reveal"

export default function Experience() {
  return (
    <section id="experience" className="section border-t border-line">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Experience</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="h1 gradient-text mt-6 max-w-[16ch]">Real clients, real deadlines.</h2>
        </Reveal>

        <div className="mt-12">
          {experience.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.06}>
              <div className="grid gap-6 border-t border-line py-9 transition-colors duration-500 first:border-t-0 md:grid-cols-[180px_1fr]">
                <div>
                  <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-tx2">{e.when}</p>
                  <p className="mt-2 font-mono text-[11.5px] text-tx3">{e.place}</p>
                </div>
                <div>
                  <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-accent">{e.role}</p>
                  <h3 className="h3 mt-3">{e.title}</h3>
                  <p className="mt-4 max-w-[70ch] text-[15px] leading-[1.62] text-tx2">{e.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import { stats } from "@/data/site"
import Counter from "./Counter"
import Reveal from "./Reveal"

export default function Impact() {
  return (
    <section id="about" className="section">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Proof of work</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="h1 gradient-text mt-6 max-w-[18ch]">Shipped to production, used by real customers.</h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="lead mt-6">
            Not tutorial projects. These are live client platforms I designed, built, integrated and deployed end to end.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-[18px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07} className="bg-surface p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-tx3">{s.kicker}</p>
              <p className="h1 mt-5">
                <Counter to={s.value} suffix={"suffix" in s ? (s as { suffix?: string }).suffix : undefined} />
              </p>
              <p className="mt-4 text-[14px] leading-[1.55] text-tx2">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

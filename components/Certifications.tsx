import { GraduationCap, Award } from "lucide-react"
import { certifications } from "@/data/site"
import Reveal from "./Reveal"

export default function Certifications() {
  return (
    <section className="section border-t border-line">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Certifications & education</p>
        </Reveal>

        <div className="mt-10 grid gap-px overflow-hidden rounded-[18px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => {
            const Icon = "education" in c && c.education ? GraduationCap : Award
            return (
              <Reveal key={c.title} delay={i * 0.04} className="flex gap-4 bg-surface p-6">
                <Icon size={17} className="mt-[3px] flex-none text-tx3" />
                <div>
                  <p className="text-[14.5px] font-medium leading-[1.4]">{c.title}</p>
                  <p className="mt-[6px] font-mono text-[11.5px] text-tx3">{c.issuer}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { ArrowUpRight, Github } from "lucide-react"
import { moreProjects, site } from "@/data/site"
import Reveal from "./Reveal"
import Magnetic from "./Magnetic"

export default function MoreProjects() {
  return (
    <section className="section border-t border-line">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">More things I&apos;ve built</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="h2 mt-6 max-w-[22ch]">Smaller builds, experiments and practice projects.</h2>
        </Reveal>

        <div className="mt-11 grid gap-6 md:grid-cols-3">
          {moreProjects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-[18px] border border-line bg-surface p-7 transition-all duration-500 ease-smooth hover:-translate-y-[3px] hover:border-line2 hover:bg-raised"
              >
                <span className="font-mono text-[11.5px] text-tx3">{p.n}</span>
                <h3 className="h3 mt-5">{p.title}</h3>
                <p className="mt-3 flex-1 text-[14.5px] leading-[1.6] text-tx2">{p.body}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[13.5px] text-tx2 transition-colors group-hover:text-tx">
                  View on GitHub <ArrowUpRight size={15} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-[20px] border border-line bg-surface p-8 md:flex-row md:items-center">
            <div>
              <h3 className="h3">Code, commits and everything in between.</h3>
              <p className="mt-3 max-w-[52ch] text-[14.5px] leading-[1.6] text-tx2">
                Project source, experiments and work in progress all live on my GitHub. Have a look at how I structure
                components, APIs and data models.
              </p>
            </div>
            <Magnetic>
              <a href={site.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
                <Github size={16} /> {site.githubHandle}
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

"use client"

import { ArrowUpRight, Check, Github } from "lucide-react"
import type { Project } from "@/data/projects"
import BrowserFrame from "./BrowserFrame"
import Reveal from "./Reveal"
import Magnetic from "./Magnetic"

function Header({ project }: { project: Project }) {
  return (
    <>
      <Reveal className="flex items-center gap-4">
        <span className="font-mono text-[13px] text-tx3">{project.index}</span>
        <span className="rounded-full border border-line bg-white/[.03] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-warm">
          {project.badge}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h3 className="h1 mt-6">{project.title}</h3>
      </Reveal>
      <Reveal delay={0.09}>
        <p className="mt-3 font-mono text-[15px] text-accent">{project.subtitle}</p>
      </Reveal>
      <Reveal delay={0.13}>
        <p className="lead mt-6">{project.description}</p>
      </Reveal>
    </>
  )
}

function Features({ items }: { items: string[] }) {
  return (
    <ul className="mt-7 grid gap-[10px] sm:grid-cols-2">
      {items.map((f) => (
        <li key={f} className="flex gap-[10px] text-[14.5px] leading-[1.5] text-tx2">
          <Check size={16} className="mt-[3px] flex-none text-mint" />
          {f}
        </li>
      ))}
    </ul>
  )
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="mt-7 flex flex-wrap gap-[10px]">
      {items.map((t) => (
        <li key={t} className="tag">
          {t}
        </li>
      ))}
    </ul>
  )
}

function Links({ project }: { project: Project }) {
  return (
    <div className="mt-9 flex flex-wrap gap-3">
      {project.liveUrl ? (
        <Magnetic>
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
            {project.githubUrl ? "Live demo" : "Visit live site"} <ArrowUpRight size={16} />
          </a>
        </Magnetic>
      ) : null}
      {project.githubUrl ? (
        <Magnetic>
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
            <Github size={16} /> Source code
          </a>
        </Magnetic>
      ) : null}
    </div>
  )
}

export default function ProjectSection({ project, priority }: { project: Project; priority?: boolean }) {
  const { layout } = project

  return (
    <article className="border-t border-line py-[clamp(60px,7vw,110px)] first:border-t-0">
      <div className="shell">
        <Header project={project} />
        {layout === "split" ? null : <Features items={project.features} />}

        {/* Hero shot */}
        <Reveal delay={0.08} className="mt-11">
          <BrowserFrame
            src={project.hero.src}
            alt={project.hero.alt}
            url={project.hero.browserUrl}
            priority={priority}
          />
          {project.hero.caption ? <figcaption className="caption">{project.hero.caption}</figcaption> : null}
        </Reveal>

        {/* Flow (AI product) */}
        {project.flow ? (
          <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center gap-3">
            {project.flow.map((step, i) => (
              <span key={step} className="flex items-center gap-3">
                <span className="flex items-center gap-[10px] rounded-full border border-line bg-surface px-[18px] py-[11px] text-[14px]">
                  <span className="font-mono text-[11px] text-accent">{String(i + 1).padStart(2, "0")}</span>
                  {step}
                </span>
                {i < project.flow!.length - 1 ? <span className="text-tx3">&rarr;</span> : null}
              </span>
            ))}
          </Reveal>
        ) : null}

        {/* Gallery */}
        <div
          className={`mt-10 grid gap-6 ${
            layout === "grid" || project.gallery.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2"
          }`}
        >
          {project.gallery.map((shot, i) => (
            <Reveal key={shot.src} delay={0.05 * i}>
              <BrowserFrame src={shot.src} alt={shot.alt} url={shot.browserUrl} sizes="(max-width: 760px) 92vw, 560px" />
              {shot.caption ? <figcaption className="caption">{shot.caption}</figcaption> : null}
            </Reveal>
          ))}
        </div>

        {layout === "split" ? (
          <>
            <Features items={project.features} />
          </>
        ) : null}

        {/* Detail block (admin story) */}
        {project.detail ? (
          <div className="mt-[clamp(48px,6vw,84px)]">
            <Reveal>
              <p className="eyebrow">{project.detail.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h4 className="h2 mt-5 max-w-[22ch]">{project.detail.heading}</h4>
            </Reveal>
            <Reveal delay={0.09}>
              <p className="lead mt-5">{project.detail.body}</p>
            </Reveal>
            <div className="mt-9 grid gap-6 md:grid-cols-2">
              {project.detail.shots.map((shot, i) => (
                <Reveal key={shot.src} delay={0.05 * i}>
                  <BrowserFrame src={shot.src} alt={shot.alt} sizes="(max-width: 760px) 92vw, 560px" />
                </Reveal>
              ))}
            </div>
          </div>
        ) : null}

        {/* Result */}
        {project.result ? (
          <Reveal delay={0.05}>
            <div className="mt-10 rounded-[18px] border border-mint/25 bg-mint/[.07] p-7">
              <p className="h3 text-mint">{project.result.value}</p>
              <p className="mt-2 max-w-[62ch] text-[15px] leading-[1.6] text-tx2">{project.result.text}</p>
            </div>
          </Reveal>
        ) : null}

        <Tags items={project.technologies} />
        <Links project={project} />
      </div>
    </article>
  )
}

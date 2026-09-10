import Hero from "@/components/Hero"
import Marquee from "@/components/Marquee"
import Impact from "@/components/Impact"
import ProjectSection from "@/components/ProjectSection"
import Statement from "@/components/Statement"
import Services from "@/components/Services"
import Process from "@/components/Process"
import Experience from "@/components/Experience"
import Certifications from "@/components/Certifications"
import MoreProjects from "@/components/MoreProjects"
import Contact from "@/components/Contact"
import Reveal from "@/components/Reveal"
import { projects } from "@/data/projects"

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Impact />

      <section id="work" className="pt-[clamp(40px,5vw,80px)]">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Selected work</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="h1 gradient-text mt-6 max-w-[18ch]">Products I designed, built and deployed.</h2>
          </Reveal>
        </div>

        <div className="mt-[clamp(48px,6vw,86px)]">
          {projects.map((project, i) => (
            <ProjectSection key={project.id} project={project} priority={i === 0} />
          ))}
        </div>
      </section>

      <Statement />
      <Services />
      <Process />
      <Experience />
      <Certifications />
      <MoreProjects />
      <Contact />
    </>
  )
}

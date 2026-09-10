import { ArrowUp } from "lucide-react"
import { site } from "@/data/site"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line py-8">
      <div className="shell flex flex-col items-center justify-between gap-4 text-[13px] text-tx3 sm:flex-row">
        <p>
          &copy; {year} {site.name} &mdash; {site.title}
        </p>
        <p>{site.location}</p>
        <a href="#top" className="inline-flex items-center gap-2 transition-colors hover:text-tx">
          Back to top <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  )
}

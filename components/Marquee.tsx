import { tech } from "@/data/site"

export default function Marquee() {
  const items = [...tech, ...tech]

  return (
    <div className="overflow-hidden border-y border-line py-[18px]" aria-hidden>
      <div className="animate-marquee flex w-max gap-12">
        {items.map((t, i) => (
          <span key={`${t}-${i}`} className="flex items-center gap-12 font-mono text-[13px] text-tx3">
            {t}
            <span className="h-1 w-1 rounded-full bg-white/20" />
          </span>
        ))}
      </div>
    </div>
  )
}

import Image from "next/image"

type Props = {
  src: string
  alt: string
  url?: string
  priority?: boolean
  className?: string
  sizes?: string
}

/** Screenshot inside a minimal browser chrome. */
export default function BrowserFrame({ src, alt, url, priority, className, sizes = "(max-width: 760px) 92vw, 1100px" }: Props) {
  return (
    <figure
      className={`overflow-hidden rounded-[18px] border border-line bg-surface transition-transform duration-700 ease-smooth ${className ?? ""}`}
    >
      <div className="flex items-center gap-2 border-b border-line bg-[#111114] px-4 py-[10px]">
        <span className="h-[9px] w-[9px] rounded-full bg-white/15" />
        <span className="h-[9px] w-[9px] rounded-full bg-white/15" />
        <span className="h-[9px] w-[9px] rounded-full bg-white/15" />
        {url ? (
          <span className="ml-3 min-w-0 truncate font-mono text-[11px] text-tx3">{url}</span>
        ) : null}
      </div>
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={900}
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className="h-auto w-full"
      />
    </figure>
  )
}

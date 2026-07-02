import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  className,
}: {
  eyebrow?: string
  title: string
  className?: string
}) {
  return (
    <div className={cn('text-center', className)}>
      {eyebrow ? (
        <span className="inline-block rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-accent-foreground">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-3 text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
    </div>
  )
}

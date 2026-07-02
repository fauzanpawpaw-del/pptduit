import { Flame } from 'lucide-react'

export function PromoBar() {
  return (
    <div className="sticky top-0 z-40 bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-3xl items-center justify-center gap-2 px-4 py-2 text-center text-xs font-semibold sm:text-sm">
        <Flame className="size-4 shrink-0" aria-hidden="true" />
        <span className="text-balance">
          Promo Terbatas — Harga Normal{' '}
          <span className="line-through opacity-80">Rp 180.000</span>{' '}
          <span className="rounded bg-primary-foreground px-1.5 py-0.5 text-primary">
            HEMAT 45%
          </span>
        </span>
      </div>
    </div>
  )
}

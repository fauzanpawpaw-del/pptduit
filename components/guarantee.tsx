import { ShieldCheck } from 'lucide-react'

export function Guarantee() {
  return (
    <section className="mx-auto max-w-2xl px-4 pb-4">
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center sm:flex-row sm:text-left">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <ShieldCheck className="size-7" aria-hidden="true" />
        </div>
        <div>
          <p className="text-base font-extrabold text-foreground">
            Jaminan Kepuasan Pembeli
          </p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            File tidak terkirim atau tidak sesuai? Kami siap bantu sampai
            masalah terselesaikan. Kepuasan kamu adalah prioritas utama kami.
          </p>
        </div>
      </div>
    </section>
  )
}

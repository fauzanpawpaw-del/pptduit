import { Button } from '@/components/ui/button'

export function FinalCta() {
  return (
    <section className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-2xl px-4 py-14 text-center sm:py-20">
        <h2 className="text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
          Siap Tampil Profesional dan Bikin Semua Orang{' '}
          <span className="text-primary">Kagum?</span>
        </h2>
        <p className="mx-auto mt-3 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
          Bergabung dengan 2.400+ orang yang sudah tampil percaya diri dengan
          MEGA PACK Template PPT Profesional.
        </p>
        <Button
          asChild
          size="lg"
          className="mt-6 h-auto rounded-xl px-8 py-4 text-base font-bold"
        >
          <a href="#order-form">Ambil Paket Sekarang — Rp 99.000</a>
        </Button>
      </div>
    </section>
  )
}

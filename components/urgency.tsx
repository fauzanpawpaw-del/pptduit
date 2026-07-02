import { Button } from '@/components/ui/button'

export function Urgency() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-12 sm:py-16">
      <div className="rounded-2xl border-2 border-dashed border-primary/40 bg-accent/40 p-6 text-center sm:p-8">
        <h2 className="text-balance text-2xl font-extrabold tracking-tight text-foreground">
          Jangan Tunda Lagi — Harga Ini Tidak Akan Bertahan Lama!
        </h2>
        <p className="mx-auto mt-3 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
          Promo Rp 99.000 hanya berlaku waktu terbatas. Setelah promo berakhir,
          harga kembali ke Rp 180.000.
        </p>
        <Button
          asChild
          size="lg"
          className="mt-6 h-auto rounded-xl px-8 py-4 text-base font-bold"
        >
          <a href="#order-form">Ambil Sekarang Sebelum Harga Naik</a>
        </Button>
      </div>
    </section>
  )
}

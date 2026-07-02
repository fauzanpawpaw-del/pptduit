import { Check, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'

const includes = [
  'Template PPT Skripsi & Sempro Aesthetic',
  'Template PPT Bisnis Profesional Meeting',
  '300+ Template PPT Aesthetic Kekinian',
  'Animasi & Transisi Profesional',
  'Fully Editable — Tanpa Watermark',
  'Lifetime Access + Free Update',
  'Panduan Penggunaan Lengkap',
]

const methods = ['QRIS', 'BCA', 'Mandiri', 'GoPay', 'OVO', 'Dana']

export function Pricing() {
  return (
    <section className="bg-accent/40">
      <div className="mx-auto max-w-lg px-4 py-12 sm:py-16">
        <SectionHeading
          eyebrow="Pilihan Paket"
          title="Investasi Sekali, Digunakan Seumur Hidup"
        />
        <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-card">
          <div className="bg-primary px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-primary-foreground">
            Harga Spesial Terbatas
          </div>
          <div className="p-6 text-center">
            <p className="text-lg font-semibold text-muted-foreground line-through">
              Rp 180.000
            </p>
            <p className="text-5xl font-extrabold tracking-tight text-primary">
              Rp 99.000
            </p>
            <p className="mt-2 text-xs font-medium text-muted-foreground">
              Bayar sekali · Akses selamanya · Langsung download
            </p>

            <ul className="mt-6 space-y-2.5 text-left">
              {includes.map((i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  {i}
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="mt-6 h-auto w-full rounded-xl px-6 py-4 text-base font-bold"
            >
              <a href="#order-form">YA, SAYA PESAN SEKARANG!</a>
            </Button>

            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs font-medium text-muted-foreground">
              <Lock className="size-3.5" aria-hidden="true" />
              Pembayaran 100% Aman · Garansi Kepuasan
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {methods.map((m) => (
                <span
                  key={m}
                  className="rounded-md border border-border bg-secondary px-2.5 py-1 text-[11px] font-semibold text-secondary-foreground"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Check } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const benefits = [
  {
    title: 'Presentasi Siap dalam 5 Menit',
    desc: 'Pilih template, ganti teks, langsung presentasi. Tidak perlu design dari nol atau pusing atur layout berjam-jam.',
  },
  {
    title: 'Animasi Profesional yang Buat Audiens Terpukau',
    desc: 'Efek transisi dan animasi smooth yang bikin presentasimu beda dan terkesan digarap serius.',
  },
  {
    title: 'Cover Semua Kebutuhan Sekaligus',
    desc: 'Skripsi, bisnis, konten sehari-hari — semuanya ada. Tidak perlu beli template berbeda.',
  },
  {
    title: 'Editable 100% — Tidak Ada Watermark',
    desc: 'Warna, font, gambar, teks — bebas diubah sesuai kebutuhan tanpa batasan apapun.',
  },
  {
    title: 'Lifetime Access + Update Gratis Selamanya',
    desc: 'Bayar sekali, dapat selamanya. Setiap ada template baru, langsung kamu dapatkan gratis.',
  },
]

export function Benefits() {
  return (
    <section className="bg-accent/40">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <SectionHeading
          eyebrow="Kenapa Pilih Ini"
          title="Yang Kamu Rasakan Setelah Pakai MEGA PACK Ini"
        />
        <div className="mt-8 space-y-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="flex gap-3 rounded-xl border border-border bg-card p-4"
            >
              <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="size-4" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{b.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

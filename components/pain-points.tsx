import { SectionHeading } from '@/components/section-heading'
import { Frown, Annoyed, Clock, Angry } from 'lucide-react'

const pains = [
  {
    icon: Frown,
    title: 'Sidang besok, PPT masih polos dan membosankan.',
    desc: 'Udah begadang berjam-jam tapi hasilnya tetap terlihat "ala kadarnya".',
  },
  {
    icon: Annoyed,
    title: 'Presentasi ke atasan atau klien malah bikin malu.',
    desc: 'Template seadanya bikin kamu terlihat tidak profesional — padahal materinya bagus.',
  },
  {
    icon: Clock,
    title: 'Bikin PPT dari nol butuh waktu berjam-jam.',
    desc: 'Pilih warna, atur layout, cari font — padahal konten yang harusnya jadi fokus.',
  },
  {
    icon: Angry,
    title: 'Template gratis di internet itu gitu-gitu aja.',
    desc: 'Sama semua, ketinggalan zaman, dan ada watermark yang tidak bisa dihapus.',
  },
]

export function PainPoints() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <SectionHeading
        eyebrow="Kenali Masalahmu"
        title="Pernah Ngerasain Salah Satu dari Ini?"
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {pains.map((p) => (
          <div
            key={p.title}
            className="flex gap-3 rounded-xl border border-border bg-card p-4"
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <p.icon className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">{p.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border-l-2 border-primary bg-card p-6 text-center">
        <p className="text-balance text-lg font-extrabold text-foreground sm:text-xl">
          Kenyataannya — Penampilan Presentasi Menentukan{' '}
          <span className="text-primary">50% Keberhasilan</span> Kamu.
        </p>
        <p className="mx-auto mt-3 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
          Dosen, atasan, dan klien menilai kamu dari kesan pertama. Slide yang
          rapi dan profesional bukan cuma soal estetika — tapi soal seberapa
          serius kamu dipandang.
        </p>
      </div>
    </section>
  )
}

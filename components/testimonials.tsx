import { Star } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const reviews = [
  {
    initial: 'A',
    name: 'Aditya R.',
    role: 'Mahasiswa Teknik Informatika — Lulus Sidang',
    text: 'Pakai template skripsinya buat sidang kemarin, dosen langsung komen "PPT-nya bagus banget." Padahal saya cuma edit 30 menit. Lulus tanpa revisi!',
  },
  {
    initial: 'S',
    name: 'Sarah M.',
    role: 'Marketing Manager — Perusahaan FMCG',
    text: 'Setelah pakai template bisnis ini, bos langsung bilang presentasi saya jauh lebih profesional. Worth it banget untuk harga segini!',
  },
  {
    initial: 'D',
    name: 'Dina K.',
    role: 'Content Creator & Freelancer',
    text: '300+ template dan semuanya aesthetic! Tidak nyangka harganya semurah ini tapi kualitasnya premium. Sudah dipakai 5 presentasi, semua dapat pujian!',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="Rating 5 dari 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-primary text-primary" aria-hidden="true" />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
      <SectionHeading eyebrow="Kata Mereka" title="Ribuan Orang Sudah Merasakannya" />
      <p className="mt-3 text-center text-sm font-semibold text-muted-foreground">
        Rating 4.9 dari 2.400+ pembeli puas
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {reviews.map((r) => (
          <figure
            key={r.name}
            className="flex flex-col rounded-2xl border border-border bg-card p-5"
          >
            <Stars />
            <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground">
              {r.text}
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3 border-t border-border pt-4">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {r.initial}
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{r.name}</p>
                <p className="text-xs leading-tight text-muted-foreground">
                  {r.role}
                </p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

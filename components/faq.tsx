'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const faqs = [
  {
    q: 'Format file apa yang saya dapat?',
    a: 'File format .PPTX yang bisa dibuka di Microsoft PowerPoint, Google Slides, dan Canva. Semua 100% editable.',
  },
  {
    q: 'Bagaimana cara mendapatkan filenya?',
    a: 'Setelah pembayaran berhasil, link download langsung dikirim ke WhatsApp atau email kamu. Instant — tidak perlu menunggu.',
  },
  {
    q: 'Apakah template bisa diedit?',
    a: '100% bisa! Teks, warna, gambar, font — bebas diubah. Tidak ada watermark atau elemen yang dikunci.',
  },
  {
    q: 'Ada biaya tambahan setelah beli?',
    a: 'Tidak ada! Bayar sekali, akses selamanya termasuk semua update template baru di masa depan.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="mx-auto max-w-2xl px-4 py-12 sm:py-16">
      <SectionHeading eyebrow="FAQ" title="Pertanyaan yang Sering Ditanyakan" />
      <div className="mt-8 space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i
          return (
            <div
              key={f.q}
              className="overflow-hidden rounded-xl border border-border bg-card"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-3 p-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-sm font-bold text-foreground">{f.q}</span>
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  {isOpen ? (
                    <Minus className="size-4" aria-hidden="true" />
                  ) : (
                    <Plus className="size-4" aria-hidden="true" />
                  )}
                </span>
              </button>
              {isOpen ? (
                <p className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              ) : null}
            </div>
          )
        })}
      </div>
    </section>
  )
}

import Image from 'next/image'
import {
  Star,
  Users,
  Zap,
  RefreshCw,
  Download,
  GraduationCap,
  Briefcase,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const badges = [
  { icon: Star, label: 'Rating 4.9/5' },
  { icon: Users, label: '2.400+ Pembeli' },
  { icon: Zap, label: 'Instant Download' },
  { icon: RefreshCw, label: 'Free Update' },
]

const categories = [
  { title: 'Skripsi', icon: GraduationCap, sub: 'Sidang & Sempro' },
  { title: 'Bisnis', icon: Briefcase, sub: 'Meeting & Profesional' },
  { title: 'Aesthetic', icon: Sparkles, sub: 'Kekinian Modern' },
]

export function Hero() {
  return (
    <section className="relative border-b border-border bg-background">
      <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:py-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
          <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
          Sudah 2.400+ pembeli puas
        </div>

        <h1 className="mt-6 text-balance text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
          Presentasi Bikin Minder?{' '}
          <span className="text-primary">Tampil Profesional</span> dalam 5 Menit.
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          MEGA PACK Template PPT lengkap — untuk Skripsi, Meeting Bisnis, hingga
          Presentasi Aesthetic — semua dalam satu paket harga terjangkau.
        </p>

        <div className="mt-7 flex flex-col items-center gap-3">
          <Button
            asChild
            size="lg"
            className="h-auto w-full max-w-sm rounded-xl px-6 py-4 text-base font-bold"
          >
            <a href="#order-form">Ambil Paket Sekarang — Rp 99.000</a>
          </Button>
          <p className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <Download className="size-3.5" aria-hidden="true" />
            Instant download setelah pembayaran berhasil
          </p>
        </div>

        <div className="relative mt-9">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <Image
              src="/hero-templates.png"
              alt="Koleksi template PowerPoint profesional dalam MEGA PACK"
              width={1200}
              height={800}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {categories.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-border bg-card p-3 text-center"
            >
              <c.icon className="mx-auto size-5 text-primary" aria-hidden="true" />
              <p className="mt-2 text-sm font-bold text-foreground">{c.title}</p>
              <p className="text-[11px] leading-tight text-muted-foreground">
                {c.sub}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs font-medium text-muted-foreground">
          dan masih 300+ template lainnya...
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex items-center justify-center gap-1.5 rounded-lg border border-border bg-card px-2 py-2 text-xs font-semibold text-foreground"
            >
              <b.icon className="size-4 text-primary" aria-hidden="true" />
              {b.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

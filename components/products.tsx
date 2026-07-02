import Image from 'next/image'
import { Check, GraduationCap, Briefcase, Sparkles } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const products = [
  {
    tag: 'PRODUK 01',
    badge: 'TERLARIS',
    icon: GraduationCap,
    image: '/product-skripsi.png',
    title: 'Template PPT Sidang Skripsi & Sempro Aesthetic',
    desc: 'Desain modern dengan animasi smooth yang langsung bikin dosen terkesan. Mudah diedit, cocok untuk semua jurusan.',
    features: ['Animasi Smooth', 'Semua Jurusan', 'Sempro & Sidang', 'Edit <10 Menit'],
  },
  {
    tag: 'PRODUK 02',
    icon: Briefcase,
    image: '/product-business.png',
    title: 'Template PPT Bisnis Profesional — Meeting & Kantoran',
    desc: 'Tampil percaya diri di depan atasan dan klien. Desain clean, beranimasi — cocok untuk laporan, proposal, dan pitching bisnis.',
    features: ['Desain Profesional', 'Animasi Elegan', 'Meeting & Pitch', 'Editable Penuh'],
  },
  {
    tag: 'PRODUK 03',
    icon: Sparkles,
    image: '/product-aesthetic.png',
    title: '300+ Template PPT Aesthetic Kekinian',
    desc: 'Library template terbesar — berbagai gaya dan tema. Dari minimalis clean sampai colorful bold. Semua siap pakai!',
    features: ['300+ Template', 'Berbagai Tema', 'Aesthetic & Kekinian', 'Free Update'],
  },
]

export function Products() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
      <SectionHeading
        eyebrow="Isi Paket"
        title="Kamu Dapat Semua Ini dalam 1 Paket"
      />
      <div className="mt-8 space-y-5">
        {products.map((p) => (
          <div
            key={p.tag}
            className="overflow-hidden rounded-2xl border border-border bg-card sm:flex"
          >
            <div className="relative sm:w-2/5">
              <Image
                src={p.image || '/placeholder.svg'}
                alt={p.title}
                width={600}
                height={450}
                className="h-48 w-full object-cover sm:h-full"
              />
              {p.badge ? (
                <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[11px] font-bold text-primary-foreground">
                  {p.badge}
                </span>
              ) : null}
            </div>
            <div className="flex-1 p-5">
              <div className="flex items-center gap-2">
                <p.icon className="size-4 text-primary" aria-hidden="true" />
                <span className="text-[11px] font-bold uppercase tracking-wide text-primary">
                  {p.tag}
                </span>
              </div>
              <h3 className="mt-2 text-lg font-extrabold leading-snug text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-2">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-1.5 text-xs font-medium text-foreground"
                  >
                    <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

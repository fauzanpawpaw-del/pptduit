import { SectionHeading } from '@/components/section-heading'

export function Solution() {
  return (
    <section className="bg-accent/40">
      <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:py-16">
        <SectionHeading
          eyebrow="Solusinya Ada Disini"
          title="Kenalkan — MEGA PACK Template PPT Profesional All-in-One untuk Semua Kebutuhanmu"
        />
        <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          Satu paket lengkap yang cover semua momen presentasi kamu — dari
          sidang skripsi sampai rapat direksi. Tinggal pilih, edit, langsung
          tampil percaya diri!
        </p>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-3xl px-4 py-8 text-center">
        <p className="text-sm font-extrabold text-foreground">
          MEGA PACK Template PPT Profesional
        </p>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          All-in-One untuk Skripsi, Bisnis, dan Presentasi Aesthetic. Instant
          download · Editable penuh · Lifetime access.
        </p>
        <p className="mt-4 text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} MEGA PACK Template. Semua hak dilindungi.
        </p>
      </div>
    </footer>
  )
}

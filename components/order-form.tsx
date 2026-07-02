'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const paymentMethods = [
  'Dana',
  'GoPay',
  'LinkAja',
  'OVO',
  'QRIS',
  'ShopeePay',
  'BNI Virtual Account',
  'BRI Virtual Account',
  'Bank Mandiri Virtual Account',
]

export function OrderForm() {
  const [payment, setPayment] = useState('QRIS')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="order-form"
      className="scroll-mt-16 border-y border-border bg-secondary/40 py-12 sm:py-16"
    >
      <div className="mx-auto max-w-lg px-4">
        <p className="text-center text-lg font-extrabold uppercase leading-tight text-foreground">
          Isi Form di Bawah untuk Dapatkan{' '}
          <span className="text-primary">Promo Terbatasnya</span>
        </p>

        <div className="mt-6 rounded-3xl border border-border bg-card p-5 sm:p-6">
          {submitted ? (
            <div className="py-8 text-center">
              <CheckCircle2 className="mx-auto size-14 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-extrabold text-foreground">
                Pesanan Diterima!
              </h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                Terima kasih! Instruksi pembayaran via {payment} akan dikirim ke
                WhatsApp dan email kamu. Cek pesan masuk ya.
              </p>
              <Button
                className="mt-6 rounded-xl font-bold"
                onClick={() => setSubmitted(false)}
              >
                Pesan Lagi
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                  Pilih Paket
                </p>
                <div className="mt-2 flex items-center justify-between rounded-xl border-2 border-primary bg-accent/50 p-3">
                  <span className="text-sm font-semibold text-foreground">
                    300++ MEGA PACK Template PPT All in One
                  </span>
                  <span className="shrink-0 pl-2 text-sm font-extrabold text-primary">
                    Rp 99.000
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                  Lengkapi Data
                </p>
                <Field id="name" label="Nama Lengkap" required>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Nama kamu"
                    className="input-base"
                  />
                </Field>
                <Field id="phone" label="No. WhatsApp" required>
                  <div className="flex">
                    <span className="flex items-center rounded-l-lg border border-r-0 border-input bg-secondary px-3 text-sm font-semibold text-secondary-foreground">
                      +62
                    </span>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="8123456789"
                      className="input-base rounded-l-none"
                    />
                  </div>
                </Field>
                <Field id="email" label="Email" required>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="email@kamu.com"
                    className="input-base"
                  />
                </Field>
              </div>

              <div>
                <label
                  htmlFor="payment"
                  className="text-xs font-bold uppercase tracking-wide text-muted-foreground"
                >
                  Metode Pembayaran
                </label>
                <div className="relative mt-2">
                  <select
                    id="payment"
                    name="payment"
                    value={payment}
                    onChange={(e) => setPayment(e.target.value)}
                    className="input-base appearance-none pr-10"
                  >
                    {paymentMethods.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-secondary/60 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                  Rincian Pesanan
                </p>
                <div className="mt-2 flex items-center justify-between text-sm text-foreground">
                  <span>MEGA PACK Template PPT All in One</span>
                  <span className="font-semibold">Rp 99.000</span>
                </div>
                <div className="mt-2 flex items-center justify-between border-t border-border pt-2 text-base font-extrabold text-foreground">
                  <span>Total</span>
                  <span className="text-primary">Rp 99.000</span>
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="h-auto w-full rounded-xl px-6 py-4 text-base font-bold"
              >
                YA, SAYA PESAN SEKARANG!
              </Button>
              <p className="text-center text-[11px] leading-relaxed text-muted-foreground">
                Data kamu aman. Pembayaran diproses dengan enkripsi standar
                industri.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label} {required ? <span className="text-primary">*</span> : null}
      </label>
      <div className="mt-1.5">{children}</div>
    </div>
  )
}

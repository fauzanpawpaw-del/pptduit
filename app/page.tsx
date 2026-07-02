import { PromoBar } from '@/components/promo-bar'
import { Hero } from '@/components/hero'
import { PainPoints } from '@/components/pain-points'
import { Solution } from '@/components/solution'
import { Products } from '@/components/products'
import { Benefits } from '@/components/benefits'
import { Testimonials } from '@/components/testimonials'
import { Pricing } from '@/components/pricing'
import { OrderForm } from '@/components/order-form'
import { Urgency } from '@/components/urgency'
import { Guarantee } from '@/components/guarantee'
import { Faq } from '@/components/faq'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'
import { StickyCta } from '@/components/sticky-cta'

export default function Page() {
  return (
    <div className="min-h-dvh bg-background">
      <PromoBar />
      <main>
        <Hero />
        <PainPoints />
        <Solution />
        <Products />
        <Benefits />
        <Testimonials />
        <Pricing />
        <OrderForm />
        <Urgency />
        <Guarantee />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <StickyCta />
    </div>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export function StickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 600)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 backdrop-blur transition-transform duration-300 sm:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div>
          <p className="text-[11px] font-medium text-muted-foreground line-through">
            Rp 180.000
          </p>
          <p className="text-lg font-extrabold leading-none text-primary">
            Rp 99.000
          </p>
        </div>
        <Button asChild className="flex-1 rounded-xl font-bold">
          <a href="#order-form">Pesan Sekarang</a>
        </Button>
      </div>
    </div>
  )
}

'use client'

import type { ReactNode } from 'react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

export function PageShell({
  title,
  description,
  actions,
  children,
}: {
  title: string
  description?: string
  actions?: ReactNode
  children?: ReactNode
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavbarShell />
      <main>
        <section className="border-b border-white/10 bg-black">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">{title}</h1>
                {description && <p className="mt-2 max-w-2xl text-zinc-400">{description}</p>}
              </div>
              {actions && <div className="flex flex-wrap gap-3 text-white">{actions}</div>}
            </div>
          </div>
        </section>
        <section className="min-h-[40vh] bg-white text-zinc-900">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">{children}</div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

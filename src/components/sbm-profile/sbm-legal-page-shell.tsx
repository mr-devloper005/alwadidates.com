import type { ReactNode } from 'react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SbmBrandLogo } from '@/components/sbm-profile/sbm-brand-logo'

const panel = 'border border-white/10 bg-white/5'

type SbmLegalPageShellProps = {
  label: string
  title: string
  description: string
  lastUpdated: string
  children: ReactNode
}

export function SbmLegalPageShell({ label, title, description, lastUpdated, children }: SbmLegalPageShellProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavbarShell />
      <div className="relative overflow-hidden bg-black">
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(90deg,rgba(56,189,248,0.12)_0%,rgba(191,255,0,0.1)_50%,rgba(34,197,94,0.08)_100%)] blur-2xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 pt-8 pb-10 sm:px-6 lg:px-8">
          <section className={`mb-0 rounded-[2.2rem] p-6 sm:p-8 ${panel} shadow-[0_24px_70px_rgba(0,0,0,0.35)]`}>
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className={`flex min-h-[180px] items-center justify-center rounded-[2rem] p-6 sm:min-h-[220px] ${panel}`}>
                <SbmBrandLogo className="text-white" size="lg" showWordmark />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{label}</p>
                <h1 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">{title}</h1>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">{description}</p>
                <p className="mt-3 text-xs text-zinc-500">Last updated: {lastUpdated}</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="bg-white text-zinc-900">
        <div className="mx-auto max-w-4xl space-y-6 px-4 py-10 sm:px-6 lg:space-y-8 lg:px-8 lg:py-14">{children}</div>
      </div>
      <Footer />
    </div>
  )
}

export const legalSectionClass =
  'rounded-[1.5rem] border border-zinc-200 bg-zinc-50/90 p-6 sm:rounded-2xl sm:p-8'

export const legalH2 = 'text-lg font-bold tracking-[-0.02em] text-zinc-900 sm:text-xl'
export const legalH3 = 'text-base font-semibold text-zinc-900 sm:text-lg'
export const legalP = 'text-sm leading-7 text-zinc-600 sm:text-base'
export const legalList = 'list-inside list-disc space-y-2 text-sm leading-7 text-zinc-600 sm:text-base'

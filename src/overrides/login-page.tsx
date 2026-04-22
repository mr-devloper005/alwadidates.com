import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SbmProfileLoginForm, SbmProfileLoginLinks } from '@/components/sbm-profile/sbm-profile-login-form'
import { SbmBrandLogo } from '@/components/sbm-profile/sbm-brand-logo'

export const LOGIN_PAGE_OVERRIDE_ENABLED = true

export function LoginPageOverride() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:gap-12">
          <div className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-900/90 to-black p-8 sm:p-10">
            <div>
              <SbmBrandLogo className="text-white" size="lg" />
              <h1 className="mt-6 text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl">Sign in to your workspace</h1>
              <p className="mt-4 text-sm leading-7 text-zinc-400">
                Access your dashboard, keep your public profile in sync, and see activity in one place. Your sign-in
                state is stored locally in this browser for a seamless return visit.
              </p>
            </div>
            <ul className="mt-8 grid gap-3 sm:mt-0">
              {['Role-aware dashboard entry', 'Profile and appearance controls', 'Session kept on this device only'].map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200"
                >
                  {item}
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-500" />
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-zinc-500 sm:mt-8">
              New here?{' '}
              <Link href="/register" className="font-medium text-[#BFFF00] hover:underline">
                Create a free account
              </Link>
            </p>
          </div>

          <div className="flex flex-col justify-center rounded-[2rem] border border-white/10 bg-zinc-950/80 p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Welcome back</p>
            <SbmProfileLoginForm />
            <SbmProfileLoginLinks />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

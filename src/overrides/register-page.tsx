import Link from 'next/link'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SbmRegisterForm } from '@/components/sbm-profile/sbm-register-form'
import { SbmBrandLogo } from '@/components/sbm-profile/sbm-brand-logo'

export const REGISTER_PAGE_OVERRIDE_ENABLED = true

const points = [
  'One public profile, tuned for first impressions and follow-up',
  'On-device session so you can return without re-entering credentials in this browser',
  'A calmer path from signup to your dashboard and profile editor',
] as const

export function RegisterPageOverride() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-10 text-center sm:mb-12">
          <SbmBrandLogo className="justify-center text-white" size="xl" />
          <h1 className="mt-6 text-3xl font-bold tracking-[-0.04em] sm:text-4xl md:text-5xl">Create your Alwadidates Profile</h1>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400 sm:text-lg">
            Join in minutes. You will be signed in automatically with your data saved locally in this browser—ready to
            open profile setup and your dashboard.
          </p>
        </div>
        <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-900/90 to-zinc-950 p-8 sm:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Why open an account</p>
              <h2 className="mt-4 text-2xl font-bold leading-tight tracking-[-0.02em] sm:text-3xl">Professional presence, without a pile of tools</h2>
            </div>
            <ul className="mt-8 space-y-3 sm:mt-10">
              {points.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#BFFF00]" />
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-zinc-500">
              By continuing you agree to the{' '}
              <Link href="/terms" className="text-[#BFFF00] hover:underline">
                Terms
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-[#BFFF00] hover:underline">
                Privacy
              </Link>{' '}
              policies.
            </p>
          </div>
          <div className="flex flex-col justify-center rounded-[2rem] border border-white/10 bg-zinc-950/80 p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Get started</p>
            <h2 className="mt-2 text-2xl font-bold">Create account</h2>
            <p className="mt-2 text-sm text-zinc-400">Use a work email you check regularly so we can reach you.</p>
            <SbmRegisterForm />
            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-zinc-500">
              Need help first?
              <Link href="/contact" className="font-medium text-[#BFFF00] hover:underline">
                Contact
                <ArrowUpRight className="ml-0.5 inline h-3.5 w-3.5" />
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

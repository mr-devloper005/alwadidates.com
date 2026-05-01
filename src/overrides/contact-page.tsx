import Link from 'next/link'
import { Headphones, MessageSquare, Rocket } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SbmContactForm } from '@/components/sbm-profile/sbm-contact-form'
import { SbmBrandLogo } from '@/components/sbm-profile/sbm-brand-logo'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

const lanes = [
  {
    icon: Rocket,
    title: 'Profile & onboarding',
    body: 'Questions about first-time setup, fields, and how your public Alwadidates profile appears to visitors.',
  },
  {
    icon: MessageSquare,
    title: 'Partners & teams',
    body: 'We help organizations roll out a consistent professional presence—without generic directory clutter.',
  },
  {
    icon: Headphones,
    title: 'Account support',
    body: 'Billing, access, and follow-up. Tell us your goal and we will point you to the right next step.',
  },
] as const

export function ContactPageOverride() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavbarShell />
      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(90deg,rgba(56,189,248,0.12)_0%,rgba(191,255,0,0.12)_50%,rgba(34,197,94,0.08)_100%)] blur-2xl"
            aria-hidden
          />
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <SbmBrandLogo className="justify-center text-white" size="lg" />
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">Contact</p>
              <h1 className="mt-3 text-4xl font-bold tracking-[-0.04em] sm:text-5xl md:text-6xl">Let&apos;s build your professional line of sight</h1>
              <p className="mt-5 text-balance text-zinc-400 sm:text-lg">
                Share what you are trying to launch—profile polish, a team rollout, or a partnership conversation. We
                read every message and reply with a clear, human next step.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white text-black">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
            <div>
              <h2 className="text-2xl font-bold tracking-[-0.03em] sm:text-3xl">Ways we can help</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Alwadidates is built for a single, credible public surface. Pick the lane that is closest, then add
                context in the form—no ticket roulette.
              </p>
              <ul className="mt-8 space-y-4">
                {lanes.map((lane) => (
                  <li
                    key={lane.title}
                    className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-5 transition hover:border-zinc-300"
                  >
                    <lane.icon className="h-5 w-5 text-zinc-800" strokeWidth={1.75} />
                    <h3 className="mt-3 text-lg font-semibold">{lane.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-zinc-600">{lane.body}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-zinc-500">
                Prefer self-serve?{' '}
                <Link href="/help" className="font-semibold text-zinc-900 underline-offset-2 hover:underline">
                  Browse the Help Center
                </Link>
              </p>
            </div>
            <div className="h-fit rounded-[2rem] border border-white/10 bg-zinc-950 p-8 text-white sm:p-10">
              <h2 className="text-2xl font-bold tracking-[-0.02em]">Send a message</h2>
              <p className="mt-2 text-sm leading-7 text-zinc-400">We usually respond within two business days.</p>
              <SbmContactForm className="mt-6" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

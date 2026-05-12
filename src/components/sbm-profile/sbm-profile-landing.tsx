import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  Link2,
  Palette,
  ShieldCheck,
  Sparkles,
  UserRound,
  Users,
} from 'lucide-react'
import { SbmBrandLogo } from '@/components/sbm-profile/sbm-brand-logo'

const LIME = '#BFFF00'

const iconCloud = [
  { Icon: UserRound, className: 'bg-gradient-to-br from-sky-400/80 to-cyan-500/80' },
  { Icon: Palette, className: 'bg-gradient-to-br from-violet-400/80 to-fuchsia-500/80' },
  { Icon: BarChart3, className: 'bg-gradient-to-br from-emerald-400/80 to-lime-500/80' },
  { Icon: ShieldCheck, className: 'bg-gradient-to-br from-amber-400/80 to-orange-500/80' },
  { Icon: Users, className: 'bg-gradient-to-br from-blue-400/80 to-indigo-500/80' },
  { Icon: Link2, className: 'bg-gradient-to-br from-rose-400/80 to-pink-500/80' },
  { Icon: Sparkles, className: 'bg-gradient-to-br from-teal-400/80 to-emerald-500/80' },
]

const featureList = [
  'PROFILE CUSTOMIZATION',
  'NETWORK BUILDING',
  'TRUST & VERIFICATION',
  'INSIGHTS & ANALYTICS',
  'PUBLISH & SHARE',
]

export function SbmProfileLanding() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black text-white">
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(90deg,rgba(56,189,248,0.12)_0%,rgba(191,255,0,0.15)_50%,rgba(34,197,94,0.1)_100%)] blur-2xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28 lg:pt-12">
          <SbmBrandLogo className="mx-auto justify-center text-white" size="xl" />
          <div className="mx-auto max-w-3xl pt-10 text-center sm:pt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-white/40"
            >
              <span className="text-zinc-500">Hurry!</span>
              <span>Profile launch — early access</span>
              <span className="text-[#BFFF00]">Claim now</span>
              <ArrowRight className="h-3.5 w-3.5 text-[#BFFF00]" />
            </Link>
            <h1 className="mt-8 text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">Shaping the future</span>
              <span className="block text-zinc-100">of your professional Alwadidates profile.</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-zinc-400 sm:text-lg">
              One place to build a credible profile, grow your network, and present your brand with the clarity
              that partners and clients expect—without the noise of generic business feeds.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Let&apos;s connect
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>

          <div className="mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-6">
            <div className="order-2 lg:order-1">
              <div className="relative mx-auto w-full max-w-sm rounded-[2rem] border border-white/10 bg-zinc-900/80 p-4 shadow-[0_40px_100px_rgba(0,0,0,0.5)] backdrop-blur">
                <div className="mx-auto h-2 w-16 rounded-full bg-zinc-700" />
                <div className="mt-4 space-y-3 rounded-2xl bg-gradient-to-b from-zinc-800 to-black p-6">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#BFFF00] to-lime-600" />
                    <div>
                      <p className="text-sm font-semibold">Your Alwadidates profile</p>
                      <p className="text-xs text-zinc-500">Public · Verified</p>
                    </div>
                  </div>
                  <div className="h-2 w-3/4 rounded bg-zinc-600" />
                  <div className="h-2 w-full rounded bg-zinc-700" />
                  <div className="h-2 w-5/6 rounded bg-zinc-700" />
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="h-16 rounded-lg bg-zinc-700/80" />
                    <div className="h-16 rounded-lg bg-zinc-700/50" />
                    <div className="h-16 rounded-lg bg-zinc-600/50" />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 space-y-4 text-center lg:order-2 lg:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">Why Alwadidates</p>
              <h2 className="text-2xl font-bold tracking-[-0.03em] sm:text-3xl">Built for people who outgrow a basic link-in-bio.</h2>
              <p className="text-sm leading-7 text-zinc-400">
                Structured fields, a polished public page, and analytics that show who engages—so you can invest time
                where it matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Light section: benefits + icon cloud */}
      <section className="bg-white text-black">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <h2 className="mx-auto max-w-4xl text-center text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl md:text-5xl">
            We are digital-natives,{' '}
            <span style={{ color: LIME }} className="[text-shadow:0_0_1px_rgba(0,0,0,0.08)]">
              bringing structure
            </span>{' '}
            to how you show up online.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-zinc-600">
            Alwadidates turns scattered bios and files into a single, credible presence you control—tuned for trust,
            discovery, and long-term relationship building.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {iconCloud.map(({ Icon, className }, i) => (
              <div
                key={i}
                className={`flex h-14 w-14 items-center justify-center rounded-full text-white shadow-sm ${className}`}
              >
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
            ))}
          </div>

          <div className="mt-20 grid gap-12 border-t border-zinc-200 pt-16 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div>
              <span
                className="inline-block rounded-full px-3 py-1 text-xs font-semibold text-black"
                style={{ backgroundColor: LIME }}
              >
                Platform
              </span>
              <h3 className="mt-4 text-2xl font-bold tracking-[-0.02em]">Everything in one professional surface.</h3>
              <ul className="mt-6 space-y-4 text-zinc-600">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: LIME }} />
                  Brand-aligned layout with room for your story, proof points, and contact paths.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                  Sharable public URL designed for first impressions in email, chat, and search.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                  Lightweight analytics so you see visits and engagement at a glance.
                </li>
              </ul>
            </div>
            <div>
              <span
                className="inline-block rounded-full px-3 py-1 text-xs font-semibold text-black"
                style={{ backgroundColor: LIME }}
              >
                Our work
              </span>
              <ul className="mt-4 space-y-1 font-bold uppercase leading-[1.35] tracking-[-0.02em] sm:text-lg md:text-2xl">
                {featureList.map((line) => (
                  <li key={line} className="py-1">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase cards */}
      <section className="bg-zinc-50 text-black">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Showcase</span>
            <h2 className="mt-2 text-3xl font-bold tracking-[-0.03em]">Experiences that read as serious.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'Clarity first',
                body: 'A calm layout with hero, highlights, and proof—so new contacts understand you in seconds.',
                tone: 'bg-black text-white',
              },
              {
                title: 'Network-ready',
                body: 'Connect touchpoints, links, and calls-to-action in one place instead of a pile of different tools.',
                tone: 'bg-white text-black ring-1 ring-zinc-200',
              },
            ].map((card) => (
              <div
                key={card.title}
                className={`overflow-hidden rounded-3xl p-8 min-h-[220px] ${card.tone}`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Feature</p>
                <h3 className="mt-3 text-2xl font-bold">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 opacity-85">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

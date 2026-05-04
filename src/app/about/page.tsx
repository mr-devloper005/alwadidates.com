import Link from "next/link"
import { ArrowRight, Compass, Shield, Sparkles, Target } from "lucide-react"
import { NavbarShell } from "@/components/shared/navbar-shell"
import { Footer } from "@/components/shared/footer"
import { SbmBrandLogo } from "@/components/sbm-profile/sbm-brand-logo"
import { SITE_CONFIG } from "@/lib/site-config"

const stats = [
  { label: "Resources shared", value: "10k+" },
  { label: "Pages published", value: "2.4k+" },
  { label: "Monthly visitors", value: "50k+" },
]

const principles = [
  {
    title: "Clarity over noise",
    body: "Your page should answer who you are, what you do, and how to take the next step—without burying that under feeds or ads.",
    icon: Target,
  },
  {
    title: "Trust you can see",
    body: "Verification cues, structured fields, and a layout that looks intentional, not like a default template.",
    icon: Shield,
  },
  {
    title: "Room to grow",
    body: "As your role or business evolves, your presence can stretch with you: new resources, proof points, links, and story—same URL.",
    icon: Compass,
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <NavbarShell />
      <main>
        <section className="relative overflow-hidden bg-black text-white">
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(90deg,rgba(56,189,248,0.1)_0%,rgba(191,255,0,0.12)_50%,rgba(34,197,94,0.08)_100%)] blur-2xl"
            aria-hidden
          />
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <SbmBrandLogo className="text-white" size="lg" />
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">About Alwadidates</p>
              <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                Clean discovery. Structured publishing.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                {SITE_CONFIG.name} is built for professionals who need a credible surface to share resources 
                and present their work—without the noise of traditional social feeds.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/profile"
                  className="inline-flex items-center gap-2 rounded-full bg-[#BFFF00] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#d4ff4d]"
                >
                  Explore
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Talk to us
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-200 bg-zinc-50">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:grid-cols-3 sm:px-6 lg:px-8">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <p className="text-3xl font-bold tracking-[-0.03em] text-zinc-950 sm:text-4xl">{s.value}</p>
                <p className="mt-2 text-sm text-zinc-600">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
              <Sparkles className="h-3.5 w-3.5" />
              Principles
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">What we optimize for</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              {SITE_CONFIG.name} is not a business directory, not a social feed, and not a file dump. It is a deliberate answer
              to: “What should people see first when they look you up?” and “What resources are worth sharing?”
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {principles.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-6 transition hover:border-zinc-300"
              >
                <p.icon className="h-6 w-6 text-zinc-900" strokeWidth={1.5} />
                <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em]">{p.title}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-600">{p.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

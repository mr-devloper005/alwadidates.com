import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { NavbarShell } from "@/components/shared/navbar-shell"
import { Footer } from "@/components/shared/footer"
import { SbmBrandLogo } from "@/components/sbm-profile/sbm-brand-logo"
import { mockFaqs } from "@/data/mock-data"

const topics = [
  {
    title: "Get started",
    body: "Create an account, sign in (saved in this browser), and open profile setup to draft your public page.",
  },
  {
    title: "Edit & publish",
    body: "Refine your headline, proof points, and links—then share your Alwadidates profile URL in signatures and intros.",
  },
  {
    title: "Account & data",
    body: "This demo keeps your session in local storage for smooth return visits on the same device and browser.",
  },
] as const

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <NavbarShell />
      <main>
        <section className="bg-black text-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <SbmBrandLogo className="text-white" size="lg" />
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">Help center</p>
            <h1 className="mt-3 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Find answers. Ship your profile.</h1>
            <p className="mt-4 max-w-2xl text-zinc-400 sm:text-lg">
              Quick guides to registration, your dashboard, and how your Alwadidates profile fits into day-to-day outreach.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#BFFF00] px-5 py-2.5 text-sm font-semibold text-black hover:bg-[#d4ff4d]"
            >
              Still stuck? Contact support
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {topics.map((t) => (
              <div key={t.title} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
                <h2 className="text-lg font-semibold">{t.title}</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{t.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] border border-zinc-200 bg-zinc-50 p-6 sm:p-8">
            <h2 className="text-xl font-bold tracking-[-0.02em]">FAQ</h2>
            <p className="mt-1 text-sm text-zinc-600">Straight answers to common Alwadidates questions.</p>
            <Accordion type="single" collapsible className="mt-6 w-full">
              {mockFaqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border-zinc-200">
                  <AccordionTrigger className="text-left text-base font-medium hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-sm leading-6 text-zinc-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

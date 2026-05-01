"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { NavbarShell } from "@/components/shared/navbar-shell"
import { Footer } from "@/components/shared/footer"
import { SbmBrandLogo } from "@/components/sbm-profile/sbm-brand-logo"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <NavbarShell />
      <main className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-lg flex-col justify-center px-4 py-12 sm:px-6 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <SbmBrandLogo className="text-white" size="lg" />
          <Link
            href="/login"
            className="mb-8 mt-8 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-[#BFFF00]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to login
          </Link>

          {!isSubmitted ? (
            <>
              <h1 className="text-3xl font-bold tracking-[-0.04em] sm:text-4xl">Reset your password</h1>
              <p className="mt-2 text-sm leading-7 text-zinc-400">
                Enter the email you use for Alwadidates. If it matches an account, we will send a reset link (demo: no
                real email is sent from this build).
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-zinc-300">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 border-white/15 bg-white/5 pl-10 text-white placeholder:text-zinc-500"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="h-12 w-full rounded-full bg-[#BFFF00] font-semibold text-black hover:bg-[#d4ff4d]"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending…" : "Send reset link"}
                </Button>
              </form>
            </>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="text-left">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#BFFF00]/30 bg-[#BFFF00]/10">
                <CheckCircle className="h-8 w-8 text-[#BFFF00]" />
              </div>
              <h1 className="text-3xl font-bold tracking-[-0.04em] sm:text-4xl">Check your email</h1>
              <p className="mt-2 text-sm leading-7 text-zinc-400">
                We&apos;ve sent a password reset link to <strong className="text-zinc-200">{email}</strong>
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-8 h-12 w-full rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                <Link href="/login">Back to login</Link>
              </Button>
              <p className="mt-6 text-sm text-zinc-500">
                Didn&apos;t receive the email?{" "}
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="font-medium text-[#BFFF00] hover:underline"
                >
                  Try again
                </button>
              </p>
            </motion.div>
          )}
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

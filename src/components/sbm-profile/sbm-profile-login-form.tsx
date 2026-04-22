'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowRight, Loader2 } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import { useToast } from '@/components/ui/use-toast'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function SbmProfileLoginForm() {
  const { login, isLoading } = useAuth()
  const { toast } = useToast()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !password) {
      toast({ title: 'Missing fields', description: 'Enter your email and password.', variant: 'destructive' })
      return
    }
    try {
      await login(email.trim(), password)
      toast({ title: 'Welcome back', description: 'You are signed in. Your session is saved on this device.' })
      router.push('/dashboard')
      router.refresh()
    } catch {
      toast({ title: 'Sign in failed', description: 'Try again in a moment.', variant: 'destructive' })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="sbm-email" className="text-zinc-400">
          Email
        </Label>
        <Input
          id="sbm-email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 border-white/15 bg-white/5 text-white placeholder:text-zinc-500"
          placeholder="you@company.com"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="sbm-password" className="text-zinc-400">
          Password
        </Label>
        <Input
          id="sbm-password"
          name="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-12 border-white/15 bg-white/5 text-white placeholder:text-zinc-500"
          placeholder="••••••••"
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#BFFF00] px-6 text-sm font-semibold text-black transition hover:bg-[#d4ff4d] disabled:opacity-60"
      >
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Signing in
          </>
        ) : (
          <>
            Log in
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  )
}

export function SbmProfileLoginLinks() {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-zinc-400">
      <Link href="/forgot-password" className="hover:text-white">
        Forgot password?
      </Link>
      <Link href="/register" className="font-semibold text-[#BFFF00] hover:underline">
        Create account
      </Link>
    </div>
  )
}

'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowRight, Loader2, Sparkles } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import { useToast } from '@/components/ui/use-toast'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function SbmRegisterForm() {
  const { signup, isLoading } = useAuth()
  const { toast } = useToast()
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !password) {
      toast({ title: 'Check the form', description: 'Name, email, and password are required.', variant: 'destructive' })
      return
    }
    if (password.length < 4) {
      toast({ title: 'Password too short', description: 'Use at least a few characters for this demo sign-up.', variant: 'destructive' })
      return
    }
    try {
      await signup(name.trim(), email.trim(), password)
      toast({ title: 'Account ready', description: 'You are signed in. Your profile is stored locally in this browser.' })
      router.push('/dashboard')
      router.refresh()
    } catch {
      toast({ title: 'Something went wrong', description: 'Please try again.', variant: 'destructive' })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="reg-name" className="text-zinc-400">
          Full name
        </Label>
        <Input
          id="reg-name"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="h-12 border-white/15 bg-white/5 text-white placeholder:text-zinc-500"
          placeholder="Your name"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="reg-email" className="text-zinc-400">
          Email
        </Label>
        <Input
          id="reg-email"
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
        <Label htmlFor="reg-password" className="text-zinc-400">
          Password
        </Label>
        <Input
          id="reg-password"
          name="password"
          type="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-12 border-white/15 bg-white/5 text-white placeholder:text-zinc-500"
          placeholder="Create a password"
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
            Creating account
          </>
        ) : (
          <>
            Create account
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
      <p className="pt-2 text-sm text-zinc-500">
        Already have an account?{' '}
        <Link href="/login" className="font-semibold text-[#BFFF00] hover:underline">
          <span className="inline-flex items-center gap-1">
            Sign in
            <Sparkles className="h-3.5 w-3.5" />
          </span>
        </Link>
      </p>
    </form>
  )
}

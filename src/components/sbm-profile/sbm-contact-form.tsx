'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, Loader2 } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

export function SbmContactForm({ className }: { className?: string }) {
  const { toast } = useToast()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [topic, setTopic] = useState('')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({ title: 'Add a bit more detail', description: 'Name, email, and a message are required.', variant: 'destructive' })
      return
    }
    setSending(true)
    window.setTimeout(() => {
      setSending(false)
      toast({ title: 'Message captured', description: "Thanks—we'll get back to you with next steps." })
      setName('')
      setEmail('')
      setTopic('')
      setMessage('')
    }, 800)
  }

  return (
    <form onSubmit={handleSubmit} className={cn('grid gap-4', className)}>
      <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
        <div>
          <Label htmlFor="contact-name" className="text-zinc-400">
            Your name
          </Label>
          <Input
            id="contact-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1.5 h-12 border-white/15 bg-white/5 text-white placeholder:text-zinc-500"
            placeholder="Alex Morgan"
            autoComplete="name"
          />
        </div>
        <div>
          <Label htmlFor="contact-email" className="text-zinc-400">
            Email
          </Label>
          <Input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1.5 h-12 border-white/15 bg-white/5 text-white placeholder:text-zinc-500"
            placeholder="you@org.com"
            autoComplete="email"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="contact-topic" className="text-zinc-400">
          What do you need help with?
        </Label>
        <Input
          id="contact-topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="mt-1.5 h-12 border-white/15 bg-white/5 text-white placeholder:text-zinc-500"
          placeholder="Profile setup, partnership, support…"
        />
      </div>
      <div>
        <Label htmlFor="contact-body" className="text-zinc-400">
          Message
        </Label>
        <Textarea
          id="contact-body"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1.5 min-h-[160px] border-white/15 bg-white/5 text-white placeholder:text-zinc-500"
          placeholder="Share context: goals, timeline, and the best way to reach you."
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#BFFF00] px-6 text-sm font-semibold text-black transition hover:bg-[#d4ff4d] disabled:opacity-60"
      >
        {sending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending
          </>
        ) : (
          <>
            Send message
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  )
}

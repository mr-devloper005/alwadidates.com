'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import { SbmProfileNavUser } from '@/components/sbm-profile/sbm-profile-nav-user'
import { SbmBrandLogo } from '@/components/sbm-profile/sbm-brand-logo'
import { cn } from '@/lib/utils'

export const NAVBAR_OVERRIDE_ENABLED = true

const mainLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Work', href: '/profile' },
] as const

export function NavbarOverride() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { isAuthenticated } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/90 text-white backdrop-blur-xl">
      <nav className="mx-auto flex min-h-24 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0 text-white" onClick={() => setOpen(false)}>
          <SbmBrandLogo size="lg" />
        </Link>

        <div className="hidden items-center justify-center gap-1 lg:flex">
          {mainLinks.map((link) => {
            const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition',
                  active ? 'bg-white text-black' : 'text-zinc-300 hover:text-white',
                )}
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        <div className="hidden shrink-0 items-center gap-3 sm:flex">
          <Link
            href="/contact"
            className="inline-flex h-10 items-center rounded-full bg-white px-5 text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            Contact
          </Link>
          {isAuthenticated ? (
            <SbmProfileNavUser />
          ) : (
            <Link
              href="/login"
              className="inline-flex h-10 items-center rounded-full bg-[#BFFF00] px-5 text-sm font-semibold text-black transition hover:bg-[#d4ff4d]"
            >
              Log in
            </Link>
          )}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-black px-4 py-4 lg:hidden">
          <div className="mx-auto max-w-7xl space-y-1">
            {mainLinks.map((link) => {
              const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn('block rounded-xl px-4 py-3 text-sm font-semibold', active ? 'bg-white text-black' : 'text-zinc-200')}
                >
                  {link.name}
                </Link>
              )
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-xl border border-white/20 px-4 py-3 text-center text-sm font-semibold"
            >
              Contact
            </Link>
            {!isAuthenticated ? (
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-xl bg-[#BFFF00] py-3 text-center text-sm font-semibold text-black"
              >
                Log in
              </Link>
            ) : (
              <div onClick={() => setOpen(false)} className="mt-3">
                <SbmProfileNavUser />
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

import Link from 'next/link'
import { SbmBrandLogo } from '@/components/sbm-profile/sbm-brand-logo'
import { SITE_CONFIG } from '@/lib/site-config'

export const FOOTER_OVERRIDE_ENABLED = true

const footerNav = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Profile setup', href: '/create/profile' },
  { name: 'Public profiles', href: '/profile' },
  { name: 'Contact', href: '/contact' },
  { name: 'Help', href: '/help' },
  { name: 'Privacy', href: '/privacy' },
  { name: 'Terms', href: '/terms' },
]

export function FooterOverride() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-10 md:flex-row md:items-start md:justify-between">
          <div>
            <SbmBrandLogo size="lg" className="text-white" />
            <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-400">
              {SITE_CONFIG.description}
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            {footerNav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-zinc-400 transition hover:text-[#BFFF00]">
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <p className="pt-8 text-center text-xs text-zinc-500 sm:text-left">
          © {new Date().getFullYear()} SBM Profile · {SITE_CONFIG.name}
        </p>
      </div>
    </footer>
  )
}

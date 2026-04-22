import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { SbmProfileLanding } from '@/components/sbm-profile/sbm-profile-landing'
import { SITE_CONFIG } from '@/lib/site-config'

export const HOME_PAGE_OVERRIDE_ENABLED = true

export function HomePageOverride() {
  const base = SITE_CONFIG.baseUrl.replace(/\/$/, '')

  const schemaData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'SBM Profile',
      url: base,
      logo: `${base}${SITE_CONFIG.defaultOgImage}`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'SBM Profile',
      url: base,
    },
  ]

  return (
    <div className="min-h-screen bg-white text-foreground">
      <NavbarShell />
      <SchemaJsonLd data={schemaData} />
      <SbmProfileLanding />
      <Footer />
    </div>
  )
}

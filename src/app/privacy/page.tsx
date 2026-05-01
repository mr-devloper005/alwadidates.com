import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { SITE_CONFIG } from '@/lib/site-config'
import {
  SbmLegalPageShell,
  legalSectionClass,
  legalH2,
  legalH3,
  legalP,
  legalList,
} from '@/components/sbm-profile/sbm-legal-page-shell'

export async function generateMetadata() {
  return buildPageMetadata({
    path: '/privacy',
    title: 'Privacy Policy',
    description: 'How Alwadidates collects, uses, and protects your information.',
  })
}

export default function PrivacyPage() {
  return (
    <SbmLegalPageShell
      label="Alwadidates"
      title="Privacy Policy"
      description="We designed this platform around professional profiles, not ad targeting. This page explains what we collect, why we collect it, and the choices you have—especially when you use local sign-in on this device."
      lastUpdated="April 22, 2026"
    >
      <section className={legalSectionClass}>
        <h2 className={legalH2}>1. What this policy covers</h2>
        <p className={`mt-4 ${legalP}`}>
          This policy applies to the {SITE_CONFIG.name} website and the Alwadidates product experience, including
          public profile pages, account features you access after sign-in, and support or contact forms you use on the
          site. It does not cover third-party sites you reach by following links.
        </p>
      </section>

      <section className={legalSectionClass}>
        <h2 className={legalH2}>2. Information we may collect</h2>
        <p className={`mt-4 ${legalP}`}>Depending on how you use the service, we may process:</p>
        <ul className={`mt-4 space-y-2 pl-1 ${legalList} list-outside`}>
          <li>
            <strong className="text-zinc-900">Account and profile data</strong> — name, email, and content you add to
            your public or private profile (such as headline, story, or contact preferences).
          </li>
          <li>
            <strong className="text-zinc-900">Local session data (demo / client-side sign-in)</strong> — if you use
            sign-in that stores a session in your browser, basic profile data may be kept in local storage on this
            device so you can stay signed in. This is limited to the browser and device you are using.
          </li>
          <li>
            <strong className="text-zinc-900">Usage and technical data</strong> — such as browser type, general
            location derived from IP (for security and analytics), and pages you view, to help us improve performance
            and understand product usage in aggregate.
          </li>
          <li>
            <strong className="text-zinc-900">Communications</strong> — content of messages you send to us (for example
            through contact forms or support) so we can respond.
          </li>
        </ul>
      </section>

      <section className={legalSectionClass}>
        <h2 className={legalH2}>3. How we use information</h2>
        <p className={`mt-4 ${legalP}`}>
          We use the information above to run and improve the service, show your profile to visitors you choose,
          provide support, keep accounts secure, detect abuse, and understand how the product is used. We do not sell
          your personal information.
        </p>
      </section>

      <section className={legalSectionClass}>
        <h2 className={legalH2}>4. Sharing</h2>
        <p className={`mt-4 ${legalP}`}>
          We may share data with service providers that help us host, analyze, or protect the site (for example
          infrastructure or security vendors), only as needed to provide the service. We may also disclose information
          if required by law or to protect the rights, safety, or integrity of users and the public.
        </p>
      </section>

      <section className={legalSectionClass}>
        <h2 className={legalH2}>5. Your choices</h2>
        <p className={`mt-4 ${legalP}`}>
          You can update many profile fields from your account area when that feature is available, clear your browser
          local storage to remove locally stored sign-in data for this site, and contact us to request access, correction
          of inaccurate data, or deletion in line with applicable law.
        </p>
        <h3 className={`mt-8 ${legalH3}`}>Email and notifications</h3>
        <p className={`mt-3 ${legalP}`}>
          If we send product or account messages, you can opt out of non-essential email where a preference is offered.
        </p>
      </section>

      <section className={legalSectionClass}>
        <h2 className={legalH2}>6. Security</h2>
        <p className={`mt-4 ${legalP}`}>
          We use reasonable technical and organizational measures to protect your information. No system is
          100% secure, so we encourage you to use a strong, unique password if password sign-in is enabled and to log
          out on shared devices.
        </p>
      </section>

      <section className={legalSectionClass}>
        <h2 className={legalH2}>7. Changes</h2>
        <p className={`mt-4 ${legalP}`}>
          We may update this policy as the product evolves. The “last updated” date at the top will change, and
          for material changes we will provide a clearer notice on the site where appropriate.
        </p>
      </section>

      <section className={legalSectionClass}>
        <h2 className={legalH2}>8. Contact</h2>
        <p className={`mt-4 ${legalP}`}>
          For privacy questions, reach us through the{' '}
          <Link href="/contact" className="font-medium text-lime-600 hover:text-lime-700 hover:underline">
            contact page
          </Link>
          .
        </p>
      </section>
    </SbmLegalPageShell>
  )
}

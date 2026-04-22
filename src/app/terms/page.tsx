import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { SITE_CONFIG } from '@/lib/site-config'
import {
  SbmLegalPageShell,
  legalSectionClass,
  legalH2,
  legalH3,
  legalP,
} from '@/components/sbm-profile/sbm-legal-page-shell'

export async function generateMetadata() {
  return buildPageMetadata({
    path: '/terms',
    title: 'Terms of Service',
    description: `Rules and conditions for using ${SITE_CONFIG.name} and SBM Profile.`,
  })
}

export default function TermsPage() {
  return (
    <SbmLegalPageShell
      label="SBM Profile"
      title="Terms of Service"
      description={`These terms govern your use of ${SITE_CONFIG.name} and the SBM Profile product. By accessing the site or creating a profile, you agree to the rules below, together with our Privacy Policy.`}
      lastUpdated="April 22, 2026"
    >
      <section className={legalSectionClass}>
        <h2 className={legalH2}>1. The service</h2>
        <p className={`mt-4 ${legalP}`}>
          SBM Profile provides tools to create, publish, and manage a professional public profile, along with related
          features the site may offer from time to time. We can change, add, or remove features for maintenance,
          security, or product reasons; if a change is material, we will provide notice in a reasonable way.
        </p>
      </section>

      <section className={legalSectionClass}>
        <h2 className={legalH2}>2. Your account</h2>
        <p className={`mt-4 ${legalP}`}>
          You are responsible for account credentials and for activity under your account. You must be able to form a
          binding contract where you live, or use the service under appropriate supervision. Notify us if you see
          unauthorized use.
        </p>
      </section>

      <section className={legalSectionClass}>
        <h2 className={legalH2}>3. Your content / ownership</h2>
        <p className={`mt-4 ${legalP}`}>
          You retain rights to the content you submit, such as your bio, images, and other profile fields, subject to the
          rights and licenses you grant to operate the service: you allow us to host, display, format, and distribute
          your content as needed to run {SITE_CONFIG.name} (including for backups, performance, and security), and to
          improve the product. You should only upload content you have the right to use. Do not upload content that
          infringes others’ rights or the law.
        </p>
      </section>

      <section className={legalSectionClass}>
        <h2 className={legalH2}>4. Acceptable use</h2>
        <p className={`mt-4 ${legalP}`}>
          You may not use the service to:
        </p>
        <ul className="mt-4 list-outside list-disc space-y-2 pl-4 text-sm leading-7 text-zinc-600 sm:pl-5 sm:text-base">
          <li>Send spam, scrape the site in an abusive way, or probe or breach our systems.</li>
          <li>Harass, defraud, or harm others, or post illegal, hateful, or misleading content that could damage someone’s reputation or safety.</li>
          <li>Misrepresent your identity or your affiliation in a way that is likely to deceive visitors.</li>
          <li>Reverse engineer or disassemble the service to copy our product, except as allowed by law.</li>
        </ul>
        <p className={`mt-4 ${legalP}`}>
          We can suspend or terminate access if we believe you have broken these terms or the law, or to protect the
          service and other users.
        </p>
      </section>

      <section className={legalSectionClass}>
        <h2 className={legalH2}>5. Public profiles and discovery</h2>
        <p className={`mt-4 ${legalP}`}>
          When you publish a public profile, information you set as public is visible to visitors and may appear in
          on-site search or other discovery surfaces. By publishing, you understand that this content is intended to be
          public-facing.
        </p>
      </section>

      <section className={legalSectionClass}>
        <h2 className={legalH2}>6. Disclaimers and limitation of liability</h2>
        <h3 className={`mt-4 ${legalH3}`}>Service provided “as is”</h3>
        <p className={`mt-3 ${legalP}`}>
          The service is provided to the maximum extent permitted by law without warranties of any kind, express or
          implied. We do not guarantee that the service will be uninterrupted, error-free, or fit for a specific
          commercial purpose. You use the service at your own risk.
        </p>
        <h3 className={`mt-6 ${legalH3}`}>Liability</h3>
        <p className={`mt-3 ${legalP}`}>
          To the fullest extent allowed by law, {SITE_CONFIG.name} and its suppliers will not be liable for any indirect,
          incidental, special, consequential, or punitive damages, or for lost profits, data, or goodwill. Our total
          liability for all claims related to the service in any twelve-month period is limited to the greater of what
          you paid us in fees for the service in that period (if any) or one hundred U.S. dollars, except where
          limited by law. Some jurisdictions do not allow certain limitations; in those cases, our liability is
          limited to the maximum permitted.
        </p>
      </section>

      <section className={legalSectionClass}>
        <h2 className={legalH2}>7. Governing law</h2>
        <p className={`mt-4 ${legalP}`}>
          These terms are governed by the laws of the jurisdiction appropriate to {SITE_CONFIG.name}, without regard
          to conflict-of-law rules, unless required otherwise by mandatory local consumer protections.
        </p>
      </section>

      <section className={legalSectionClass}>
        <h2 className={legalH2}>8. Contact</h2>
        <p className={`mt-4 ${legalP}`}>
          Questions about these terms? Please use the{' '}
          <Link href="/contact" className="font-medium text-lime-600 hover:text-lime-700 hover:underline">
            contact page
          </Link>
          . For how we use personal data, see the{' '}
          <Link href="/privacy" className="font-medium text-lime-600 hover:text-lime-700 hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </section>
    </SbmLegalPageShell>
  )
}

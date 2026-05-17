import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 12a10 10 0 1 0-11.563 9.876v-6.987H7.898V12h2.539V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.461h-1.261c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.889h-2.33v6.987A10.003 10.003 0 0 0 22 12Z" />
    </svg>
  )
}
function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect>
      <circle cx="12" cy="12" r="4"></circle>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  )
}
function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  )
}

import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/getDictionary'

type FooterProps = {
  locale: Locale
  dict: Dictionary
}

export function Footer({ locale, dict }: FooterProps) {
  const year = new Date().getFullYear()
  const quickLinks = [
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/programs`, label: dict.nav.programs },
    { href: `/${locale}/admissions`, label: dict.nav.admissions },
    { href: `/${locale}/tuition`, label: dict.nav.tuition },
    // { href: `/${locale}/student-life`, label: dict.nav.studentLife }, // hidden until content is ready
    { href: `/${locale}/contact`, label: dict.nav.contact }
  ]

  return (
    <footer className="border-t border-navy-100 bg-navy-900 text-navy-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-small.png"
            alt={dict.common.institute}
            width={512}
            height={169}
            className="h-14 w-auto"
          />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-navy-200">
            {dict.footer.tagline}. {dict.about.intro.split('.')[0]}.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="#"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-700 text-navy-200 transition hover:border-ubhi-green-500 hover:text-ubhi-green-500"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-700 text-navy-200 transition hover:border-ubhi-green-500 hover:text-ubhi-green-500"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://wa.me/237676621850"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-700 text-navy-200 transition hover:border-ubhi-green-500 hover:text-ubhi-green-500"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-base font-semibold text-white">
            {dict.footer.quickLinks}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-navy-200 transition hover:text-ubhi-green-500"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-base font-semibold text-white">
            {dict.footer.contact}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-navy-200">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-ubhi-green-500" />
              <span>{dict.footer.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-ubhi-green-500" />
              <span>{dict.footer.phone}</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-ubhi-green-500" />
              <a href={`mailto:${dict.footer.email}`} className="hover:text-ubhi-green-500">
                {dict.footer.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-navy-300 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {year} {dict.common.institute}. {dict.footer.rights}
          </p>
          <p className="font-serif italic text-gold-400">
            {dict.footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  )
}

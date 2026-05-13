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
function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.852 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.602 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.814 20.452H3.857V9h2.957v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.726v20.548C0 23.226.792 24 1.771 24h20.451c.978 0 1.778-.774 1.778-1.726V1.726C24 .771 23.2 0 22.222 0h.003z" />
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
    { href: `/${locale}/student-life`, label: dict.nav.studentLife },
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
              className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-700 text-navy-200 transition hover:border-ubhi-green-500 hover:text-ubhi-green-500"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-700 text-navy-200 transition hover:border-ubhi-green-500 hover:text-ubhi-green-500"
            >
              <InstagramIcon />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-700 text-navy-200 transition hover:border-ubhi-green-500 hover:text-ubhi-green-500"
            >
              <LinkedinIcon />
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

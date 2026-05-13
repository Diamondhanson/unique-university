'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/getDictionary'

import { LanguageSwitcher } from './LanguageSwitcher'
import { ThemeToggle } from './ThemeToggle'

type NavbarProps = {
  locale: Locale
  dict: Dictionary
}

export function Navbar({ locale, dict }: NavbarProps) {
  const pathname = usePathname() ?? ''
  const [open, setOpen] = useState(false)

  const links = [
    { href: `/${locale}`, label: dict.nav.home, exact: true },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/programs`, label: dict.nav.programs },
    { href: `/${locale}/admissions`, label: dict.nav.admissions },
    { href: `/${locale}/tuition`, label: dict.nav.tuition },
    { href: `/${locale}/student-life`, label: dict.nav.studentLife },
    { href: `/${locale}/contact`, label: dict.nav.contact }
  ]

  function isActive(href: string, exact = false) {
    if (exact) return pathname === href
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <header className="sticky top-0 z-40 border-b border-navy-100/60 bg-white/80 backdrop-blur-md dark:border-navy-800/60 dark:bg-navy-900/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 text-navy-700 dark:text-white"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-navy-500 to-navy-700 text-sm font-bold text-white shadow-sm">
            U
          </span>
          <span className="hidden font-serif text-lg font-semibold sm:inline">
            UBHI
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                'relative rounded-full px-3 py-2 text-sm font-medium transition ' +
                (isActive(link.href, link.exact)
                  ? 'text-navy-700 dark:text-white'
                  : 'text-navy-500 hover:text-navy-700 dark:text-navy-200 dark:hover:text-white')
              }
            >
              {link.label}
              {isActive(link.href, link.exact) && (
                <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-ubhi-green-500" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher currentLocale={locale} />
          <ThemeToggle />
          <Link
            href={`/${locale}/admissions`}
            className="hidden rounded-full bg-ubhi-green-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-ubhi-green-600 md:inline-flex"
          >
            {dict.common.applyNow}
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy-200 text-navy-700 lg:hidden dark:border-navy-700 dark:text-white"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-navy-100 bg-white px-4 py-3 lg:hidden dark:border-navy-800 dark:bg-navy-900">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={
                  'rounded-md px-3 py-2 text-sm font-medium ' +
                  (isActive(link.href, link.exact)
                    ? 'bg-navy-50 text-navy-700 dark:bg-navy-800 dark:text-white'
                    : 'text-navy-500 hover:bg-navy-50 dark:text-navy-200 dark:hover:bg-navy-800')
                }
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={`/${locale}/admissions`}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-ubhi-green-500 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm"
            >
              {dict.common.applyNow}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

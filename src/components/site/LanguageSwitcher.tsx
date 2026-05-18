'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { locales, type Locale } from '@/i18n/config'

export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname() ?? '/'

  function buildHref(target: Locale) {
    const segments = pathname.split('/').filter(Boolean)
    if (segments.length === 0) return `/${target}`
    segments[0] = target
    return '/' + segments.join('/')
  }

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-navy-200 bg-white/70 p-1 text-sm font-medium text-navy-700 backdrop-blur dark:border-navy-700 dark:bg-navy-800/60 dark:text-navy-100">
      {locales.map((locale) => {
        const active = locale === currentLocale
        return (
          <Link
            key={locale}
            href={buildHref(locale)}
            aria-current={active ? 'true' : undefined}
            className={
              'rounded-full px-2.5 py-1 text-xs uppercase tracking-wider transition ' +
              (active
                ? 'bg-navy-500 text-white shadow-sm dark:bg-ubhi-green-500'
                : 'hover:bg-navy-100 dark:hover:bg-navy-700')
            }
          >
            {locale}
          </Link>
        )
      })}
    </div>
  )
}

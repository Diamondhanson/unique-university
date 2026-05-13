import { ReactNode } from 'react'

import { Inter, Playfair_Display } from 'next/font/google'
import { notFound } from 'next/navigation'

import { Footer } from '@/components/site/Footer'
import { Navbar } from '@/components/site/Navbar'
import { ThemeProvider } from '@/components/site/ThemeProvider'
import { isLocale, locales, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
})

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const typedLocale = locale as Locale
  const dict = getDictionary(typedLocale)

  return (
    <html
      lang={typedLocale}
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="bg-white text-navy-900 antialiased dark:bg-navy-900 dark:text-navy-50">
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar locale={typedLocale} dict={dict} />
            <main className="flex-1">{children}</main>
            <Footer locale={typedLocale} dict={dict} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

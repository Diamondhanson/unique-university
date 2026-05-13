import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react'

import { Reveal } from '@/components/site/Reveal'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'

export default async function ContactPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: localeParam } = await params
  const locale: Locale = isLocale(localeParam) ? localeParam : 'en'
  const dict = getDictionary(locale)
  const t = dict.contact

  const info = [
    { icon: MapPin, label: t.addressLabel, value: t.addressValue },
    { icon: Phone, label: t.phoneLabel, value: t.phoneValue },
    { icon: Mail, label: t.emailLabelInfo, value: t.emailValue },
    { icon: Clock, label: t.hoursLabel, value: t.hoursValue }
  ]

  return (
    <>
      <section className="border-b border-navy-100 bg-gradient-to-b from-navy-50 to-white py-20 dark:border-navy-800 dark:from-navy-800/40 dark:to-navy-900 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-ubhi-green-600">
              {t.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-3 font-serif text-5xl font-bold text-navy-700 dark:text-white sm:text-6xl">
              {t.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-500 dark:text-navy-200">
              {t.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-navy-900 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:px-8">
          <Reveal>
            <div className="rounded-3xl border border-navy-100 bg-white p-8 shadow-sm dark:border-navy-700 dark:bg-navy-800 sm:p-10">
              <h2 className="font-serif text-2xl font-semibold text-navy-700 dark:text-white">
                {t.formTitle}
              </h2>
              <form className="mt-6 grid gap-5" action="#" method="post">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-medium text-navy-700 dark:text-navy-100">
                      {t.nameLabel}
                    </span>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder={t.namePlaceholder}
                      className="mt-1.5 w-full rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-700 outline-none transition focus:border-ubhi-green-500 focus:ring-2 focus:ring-ubhi-green-500/30 dark:border-navy-700 dark:bg-navy-900 dark:text-white"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium text-navy-700 dark:text-navy-100">
                      {t.emailLabel}
                    </span>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder={t.emailPlaceholder}
                      className="mt-1.5 w-full rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-700 outline-none transition focus:border-ubhi-green-500 focus:ring-2 focus:ring-ubhi-green-500/30 dark:border-navy-700 dark:bg-navy-900 dark:text-white"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-sm font-medium text-navy-700 dark:text-navy-100">
                    {t.subjectLabel}
                  </span>
                  <input
                    type="text"
                    name="subject"
                    placeholder={t.subjectPlaceholder}
                    className="mt-1.5 w-full rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-700 outline-none transition focus:border-ubhi-green-500 focus:ring-2 focus:ring-ubhi-green-500/30 dark:border-navy-700 dark:bg-navy-900 dark:text-white"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-navy-700 dark:text-navy-100">
                    {t.messageLabel}
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder={t.messagePlaceholder}
                    className="mt-1.5 w-full rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-700 outline-none transition focus:border-ubhi-green-500 focus:ring-2 focus:ring-ubhi-green-500/30 dark:border-navy-700 dark:bg-navy-900 dark:text-white"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ubhi-green-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-ubhi-green-600 sm:w-fit"
                >
                  {t.submit} <Send size={14} />
                </button>
              </form>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-3xl bg-gradient-to-br from-navy-700 to-navy-900 p-8 text-white shadow-xl sm:p-10">
              <h2 className="font-serif text-2xl font-semibold">{t.infoTitle}</h2>
              <ul className="mt-6 space-y-5">
                {info.map((row) => (
                  <li key={row.label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ubhi-green-500/15 text-ubhi-green-300">
                      <row.icon size={16} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-navy-200">{row.label}</p>
                      <p className="mt-0.5 text-base font-medium">{row.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl bg-white/5 p-5 text-sm text-navy-100">
                <p>{dict.home.ctaBody}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export const metadata = {
  title: 'Contact'
}

import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react'

import { PageHero } from '@/components/site/PageHero'
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
      <PageHero
        image="/photos/studentlife-clinical-placement.jpg"
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
      />

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
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs uppercase tracking-wider text-navy-200">Follow Us</p>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href="#"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-ubhi-green-500"
                  >
                    <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M22 12a10 10 0 1 0-11.563 9.876v-6.987H7.898V12h2.539V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.461h-1.261c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.889h-2.33v6.987A10.003 10.003 0 0 0 22 12Z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-ubhi-green-500"
                  >
                    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect>
                      <circle cx="12" cy="12" r="4"></circle>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/237676621850"
                    aria-label="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-ubhi-green-500"
                  >
                    <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="mt-6 rounded-2xl bg-white/5 p-5 text-sm text-navy-100">
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

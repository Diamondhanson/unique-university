import { Award, CalendarRange, Coins, Sparkles } from 'lucide-react'

import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'
import { programOrder, tuitionRows } from '@/lib/programs'

export default async function TuitionPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: localeParam } = await params
  const locale: Locale = isLocale(localeParam) ? localeParam : 'en'
  const dict = getDictionary(locale)
  const t = dict.tuition

  const tiers = [
    { icon: Award, title: t.tier1, detail: t.tier1Detail, accent: 'text-gold-400 bg-gold-400/15' },
    { icon: Sparkles, title: t.tier2, detail: t.tier2Detail, accent: 'text-ubhi-green-600 bg-ubhi-green-500/15' },
    { icon: Coins, title: t.tier3, detail: t.tier3Detail, accent: 'text-navy-500 bg-navy-500/10' }
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
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-navy-500 dark:text-navy-200">
              {t.intro}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-navy-900 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-serif text-3xl font-bold text-navy-700 dark:text-white sm:text-4xl">
              {t.feeTableTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="mt-8 overflow-hidden rounded-2xl border border-navy-100 shadow-sm dark:border-navy-700">
              <table className="w-full text-left text-sm">
                <thead className="bg-navy-700 text-white">
                  <tr>
                    <th className="px-5 py-4 font-serif font-semibold">{t.programCol}</th>
                    <th className="px-5 py-4 font-serif font-semibold">{t.tuitionCol}</th>
                    <th className="px-5 py-4 font-serif font-semibold">{t.registrationCol}</th>
                    <th className="px-5 py-4 font-serif font-semibold">{t.totalCol}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-100 bg-white dark:divide-navy-700 dark:bg-navy-800">
                  {tuitionRows.map((row) => {
                    const p = dict.programs.items[row.key]
                    return (
                      <tr key={row.key} className="transition hover:bg-navy-50 dark:hover:bg-navy-700/50">
                        <td className="px-5 py-4 font-medium text-navy-700 dark:text-white">
                          {p.name}
                        </td>
                        <td className="px-5 py-4 text-navy-500 dark:text-navy-200">{row.tuition}</td>
                        <td className="px-5 py-4 text-navy-500 dark:text-navy-200">{row.reg}</td>
                        <td className="px-5 py-4 font-semibold text-ubhi-green-600">{row.total}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-50/50 py-16 dark:bg-navy-800/30 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-ubhi-green-600">
              {t.scholarshipTitle}
            </p>
            <h2 className="mt-3 font-serif text-4xl font-bold text-navy-700 dark:text-white sm:text-5xl">
              {t.scholarshipTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-500 dark:text-navy-200">
              {t.scholarshipBody}
            </p>
          </Reveal>

          <div className="mt-10">
            <Reveal>
              <h3 className="font-serif text-xl font-semibold text-navy-700 dark:text-white">
                {t.scholarshipCriteriaTitle}
              </h3>
            </Reveal>
            <StaggerGroup className="mt-6 grid gap-5 md:grid-cols-3">
              {tiers.map((tier) => (
                <StaggerItem
                  key={tier.title}
                  className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm dark:border-navy-700 dark:bg-navy-800"
                >
                  <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${tier.accent}`}>
                    <tier.icon size={20} />
                  </div>
                  <h4 className="mt-5 font-serif text-lg font-semibold text-navy-700 dark:text-white">
                    {tier.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-navy-500 dark:text-navy-200">
                    {tier.detail}
                  </p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-navy-900 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="overflow-hidden rounded-3xl border border-navy-100 bg-gradient-to-br from-white to-navy-50 p-8 shadow-sm dark:border-navy-700 dark:from-navy-800 dark:to-navy-900 sm:p-12">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ubhi-green-500/15 text-ubhi-green-600">
              <CalendarRange size={20} />
            </div>
            <h2 className="mt-5 font-serif text-2xl font-semibold text-navy-700 dark:text-white sm:text-3xl">
              {t.paymentPlanTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-navy-500 dark:text-navy-200">
              {t.paymentPlanBody}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export const metadata = {
  title: 'Tuition & Fees'
}

import { Award, BookOpen, CalendarRange, Coins, GraduationCap, Sparkles, Wrench } from 'lucide-react'

import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'
import {
  bachelorFees,
  bachelorLineOrder,
  formatFCFA,
  hndLevels,
  hndLineOrder,
  hndProgramTotal,
  vocationalFees,
  vocationalLineOrder,
  type HndLevelFees,
  type HndLevelKey
} from '@/lib/programs'

type LineKey =
  | keyof HndLevelFees
  | keyof typeof bachelorFees
  | keyof typeof vocationalFees

export default async function TuitionPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: localeParam } = await params
  const locale: Locale = isLocale(localeParam) ? localeParam : 'en'
  const dict = getDictionary(locale)
  const t = dict.tuition
  const lines = t.lines as Record<string, string>

  const tiers = [
    { icon: Award, title: t.tier1, detail: t.tier1Detail, accent: 'text-gold-400 bg-gold-400/15' },
    {
      icon: Sparkles,
      title: t.tier2,
      detail: t.tier2Detail,
      accent: 'text-ubhi-green-600 bg-ubhi-green-500/15'
    },
    {
      icon: Coins,
      title: t.tier3,
      detail: t.tier3Detail,
      accent: 'text-navy-500 bg-navy-500/10'
    }
  ]

  const levelMeta: { key: HndLevelKey; label: string }[] = [
    { key: 'level1', label: t.tracks.level1 },
    { key: 'level2', label: t.tracks.level2 },
    { key: 'level3', label: t.tracks.level3 }
  ]

  function lineLabel(key: LineKey): string {
    return lines[key as string] ?? (key as string)
  }

  return (
    <>
      <section className="border-b border-navy-100 bg-gradient-to-b from-navy-50 to-white py-20 dark:border-navy-800 dark:from-navy-800/40 dark:to-navy-900 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-ubhi-green-600">{t.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-3 font-serif text-4xl font-bold text-navy-700 dark:text-white sm:text-5xl lg:text-6xl">
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
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-500/10 text-navy-700 dark:text-ubhi-green-500">
                <GraduationCap size={20} />
              </span>
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy-700 dark:text-white sm:text-3xl">
                  {t.tracks.hndTitle}
                </h2>
                <p className="text-sm text-navy-500 dark:text-navy-200">{t.tracks.hndSubtitle}</p>
              </div>
            </div>
          </Reveal>

          <StaggerGroup className="mt-10 grid gap-6 lg:grid-cols-3">
            {levelMeta.map((meta) => {
              const fees = hndLevels[meta.key]
              return (
                <StaggerItem
                  key={meta.key}
                  className="flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-navy-700 dark:bg-navy-800"
                >
                  <div className="bg-navy-700 px-5 py-4 text-white">
                    <p className="font-serif text-lg font-semibold">{meta.label}</p>
                  </div>
                  <div className="flex-1 p-5">
                    <div className="grid grid-cols-[max-content_1fr] gap-x-3 gap-y-2 text-sm">
                      <div className="col-span-2 mb-2 grid grid-cols-[1fr_auto] gap-3 border-b border-navy-100 pb-2 text-[10px] font-semibold uppercase tracking-wider text-navy-400 dark:border-navy-700 dark:text-navy-300">
                        <span>{t.tracks.descriptionColumn}</span>
                        <span className="text-right">{t.tracks.amountColumn}</span>
                      </div>
                      {hndLineOrder.map((key) => {
                        const value = fees[key]
                        if (value === undefined) return null
                        return (
                          <div
                            key={key}
                            className="col-span-2 grid grid-cols-[1fr_auto] gap-3 border-b border-dashed border-navy-100 py-1.5 last:border-b-0 dark:border-navy-700"
                          >
                            <span className="text-navy-700 dark:text-navy-100">
                              {lineLabel(key)}
                            </span>
                            <span className="text-right font-medium text-navy-500 dark:text-navy-200">
                              {formatFCFA(value as number)}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-3 bg-ubhi-green-500/10 px-5 py-4">
                    <span className="font-serif text-sm font-semibold uppercase tracking-wider text-navy-700 dark:text-white">
                      {t.tracks.totalLabel}
                    </span>
                    <span className="font-serif text-xl font-bold text-ubhi-green-700 dark:text-ubhi-green-500">
                      {formatFCFA(fees.total)}
                    </span>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerGroup>

          <Reveal delay={0.08} className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-navy-50 px-5 py-4 text-sm font-medium text-navy-700 dark:bg-navy-800 dark:text-navy-100">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-ubhi-green-500/15 text-ubhi-green-600">
              <Coins size={14} />
            </span>
            <span>
              {t.tracks.hndTotalLabel}:{' '}
              <span className="font-serif text-base font-bold text-ubhi-green-600">
                {formatFCFA(hndProgramTotal)}
              </span>
            </span>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-50/40 py-16 dark:bg-navy-800/30 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal className="flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm dark:border-navy-700 dark:bg-navy-800">
            <div className="bg-navy-700 px-6 py-5 text-white">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                  <BookOpen size={18} />
                </span>
                <div>
                  <p className="font-serif text-lg font-semibold">{t.tracks.bachelorTitle}</p>
                  <p className="text-xs text-navy-200">{t.tracks.bachelorSubtitle}</p>
                </div>
              </div>
            </div>
            <div className="flex-1 p-6">
              <div className="grid grid-cols-[1fr_auto] gap-3 border-b border-navy-100 pb-2 text-[10px] font-semibold uppercase tracking-wider text-navy-400 dark:border-navy-700 dark:text-navy-300">
                <span>{t.tracks.descriptionColumn}</span>
                <span className="text-right">{t.tracks.amountColumn}</span>
              </div>
              {bachelorLineOrder.map((key) => (
                <div
                  key={key}
                  className="grid grid-cols-[1fr_auto] gap-3 border-b border-dashed border-navy-100 py-2 text-sm last:border-b-0 dark:border-navy-700"
                >
                  <span className="text-navy-700 dark:text-navy-100">{lineLabel(key)}</span>
                  <span className="text-right font-medium text-navy-500 dark:text-navy-200">
                    {formatFCFA(bachelorFees[key])}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between gap-3 bg-ubhi-green-500/10 px-6 py-4">
              <span className="font-serif text-sm font-semibold uppercase tracking-wider text-navy-700 dark:text-white">
                {t.tracks.totalLabel}
              </span>
              <span className="font-serif text-xl font-bold text-ubhi-green-700 dark:text-ubhi-green-500">
                {formatFCFA(bachelorFees.total)}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm dark:border-navy-700 dark:bg-navy-800">
            <div className="bg-ubhi-green-700 px-6 py-5 text-white">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                  <Wrench size={18} />
                </span>
                <div>
                  <p className="font-serif text-lg font-semibold">{t.tracks.vocationalTitle}</p>
                  <p className="text-xs text-ubhi-green-100">{t.tracks.vocationalSubtitle}</p>
                </div>
              </div>
            </div>
            <div className="flex-1 p-6">
              <div className="grid grid-cols-[1fr_auto] gap-3 border-b border-navy-100 pb-2 text-[10px] font-semibold uppercase tracking-wider text-navy-400 dark:border-navy-700 dark:text-navy-300">
                <span>{t.tracks.descriptionColumn}</span>
                <span className="text-right">{t.tracks.amountColumn}</span>
              </div>
              {vocationalLineOrder.map((key) => (
                <div
                  key={key}
                  className="grid grid-cols-[1fr_auto] gap-3 border-b border-dashed border-navy-100 py-2 text-sm last:border-b-0 dark:border-navy-700"
                >
                  <span className="text-navy-700 dark:text-navy-100">{lineLabel(key)}</span>
                  <span className="text-right font-medium text-navy-500 dark:text-navy-200">
                    {formatFCFA(vocationalFees[key])}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between gap-3 bg-ubhi-green-500/10 px-6 py-4">
              <span className="font-serif text-sm font-semibold uppercase tracking-wider text-navy-700 dark:text-white">
                {t.tracks.totalLabel}
              </span>
              <span className="font-serif text-xl font-bold text-ubhi-green-700 dark:text-ubhi-green-500">
                {formatFCFA(vocationalFees.total)}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-navy-900 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-ubhi-green-600">
              {t.scholarshipTitle}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-navy-700 dark:text-white sm:text-4xl">
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
                  <div
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${tier.accent}`}
                  >
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

      <section className="bg-navy-50/40 py-16 dark:bg-navy-800/30 sm:py-24">
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

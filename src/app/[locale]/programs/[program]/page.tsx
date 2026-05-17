import { ArrowLeft, ArrowRight, BookOpen, CalendarDays, CheckCircle2, Clock, FileText, GraduationCap, Receipt } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal'
import { isLocale, locales, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'
import {
  formatFCFA,
  hndLevels,
  hndProgramTotal,
  isProgramKey,
  programImages,
  programOrder,
  type ProgramKey
} from '@/lib/programs'

export function generateStaticParams() {
  const out: { locale: string; program: string }[] = []
  for (const locale of locales) {
    for (const program of programOrder) {
      out.push({ locale, program })
    }
  }
  return out
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; program: string }>
}) {
  const { locale: l, program } = await params
  if (!isLocale(l) || !isProgramKey(program)) return {}
  const dict = getDictionary(l)
  const p = dict.programs.items[program]
  return { title: p.name, description: p.tagline }
}

export default async function ProgramDetailPage({
  params
}: {
  params: Promise<{ locale: string; program: string }>
}) {
  const { locale: localeParam, program } = await params
  if (!isLocale(localeParam) || !isProgramKey(program)) notFound()
  const locale: Locale = localeParam
  const programKey: ProgramKey = program

  const dict = getDictionary(locale)
  const labels = dict.programs.labels
  const documents = dict.programs.documents
  const p = dict.programs.items[programKey]
  const related = programOrder.filter((k) => k !== programKey).slice(0, 3)
  const feeRows = [
    { label: labels.level1Label, value: hndLevels.level1.total },
    { label: labels.level2Label, value: hndLevels.level2.total },
    { label: labels.level3Label, value: hndLevels.level3.total }
  ]

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src={programImages[programKey]}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 via-navy-900/75 to-navy-700/60" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <Reveal>
            <Link
              href={`/${locale}/programs`}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-ubhi-green-300 transition hover:text-ubhi-green-400"
            >
              <ArrowLeft size={14} /> {labels.backToPrograms}
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 max-w-4xl font-serif text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
              {p.name}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl font-serif text-xl text-ubhi-green-300 sm:text-2xl">
              {p.tagline}
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm">
                <Clock size={14} className="text-ubhi-green-300" />
                <span className="text-navy-100">{labels.heroDurationLabel}:</span>
                <span className="font-semibold">{p.duration}</span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm">
                <CalendarDays size={14} className="text-ubhi-green-300" />
                <span className="text-navy-100">{labels.heroIntakeLabel}:</span>
                <span className="font-semibold">{labels.heroIntakeValue}</span>
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-navy-900 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
          <div className="space-y-12">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-ubhi-green-500/10 text-ubhi-green-600">
                  <BookOpen size={18} />
                </span>
                <h2 className="font-serif text-2xl font-bold text-navy-700 dark:text-white sm:text-3xl">
                  {labels.overviewTitle}
                </h2>
              </div>
              <p className="mt-4 text-base leading-relaxed text-navy-500 dark:text-navy-200">
                {p.overview}
              </p>
            </Reveal>

            <Reveal>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gold-400/15 text-gold-600">
                  <GraduationCap size={18} />
                </span>
                <h2 className="font-serif text-2xl font-bold text-navy-700 dark:text-white sm:text-3xl">
                  {labels.careerTitle}
                </h2>
              </div>
              <StaggerGroup className="mt-6 grid gap-3 sm:grid-cols-2">
                {p.career.map((role) => (
                  <StaggerItem
                    key={role}
                    className="flex items-start gap-3 rounded-xl bg-navy-50/60 p-4 text-sm dark:bg-navy-800/60"
                  >
                    <ArrowRight size={16} className="mt-0.5 shrink-0 text-gold-500" />
                    <span className="text-navy-700 dark:text-navy-100">{role}</span>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </Reveal>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <Reveal>
              <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-sm dark:border-navy-700 dark:bg-navy-800">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-ubhi-green-500/10 text-ubhi-green-600">
                    <Receipt size={18} />
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-navy-700 dark:text-white">
                    {labels.feesTitle}
                  </h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-navy-500 dark:text-navy-300">
                  {labels.feesSubtitle}
                </p>
                <dl className="mt-5 space-y-3 text-sm">
                  {feeRows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-start justify-between gap-4 border-b border-dashed border-navy-100 pb-3 dark:border-navy-700"
                    >
                      <dt className="text-navy-500 dark:text-navy-200">{row.label}</dt>
                      <dd className="font-semibold text-navy-700 dark:text-white">
                        {formatFCFA(row.value)}
                      </dd>
                    </div>
                  ))}
                  <div className="flex items-start justify-between gap-4 pt-1">
                    <dt className="font-medium text-navy-700 dark:text-navy-100">
                      {labels.threeYearTotal}
                    </dt>
                    <dd className="font-serif text-lg font-bold text-ubhi-green-600">
                      {formatFCFA(hndProgramTotal)}
                    </dd>
                  </div>
                </dl>
                <p className="mt-4 text-xs leading-relaxed text-navy-500 dark:text-navy-300">
                  {labels.feesNote}
                </p>
                <Link
                  href={`/${locale}/tuition`}
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-ubhi-green-600 transition hover:text-ubhi-green-700"
                >
                  {labels.viewFullBreakdown} <ArrowRight size={12} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-sm dark:border-navy-700 dark:bg-navy-800">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-500/10 text-navy-700 dark:text-ubhi-green-500">
                    <FileText size={18} />
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-navy-700 dark:text-white">
                    {labels.documentsTitle}
                  </h3>
                </div>
                <ul className="mt-5 space-y-3 text-sm">
                  {documents.map((doc) => (
                    <li key={doc} className="flex items-start gap-3">
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-ubhi-green-500"
                      />
                      <span className="text-navy-700 dark:text-navy-100">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="bg-navy-50/50 py-16 dark:bg-navy-800/30 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="overflow-hidden rounded-3xl bg-gradient-to-br from-navy-700 to-navy-900 px-8 py-12 text-white shadow-2xl sm:px-14 sm:py-16">
            <p className="text-xs uppercase tracking-[0.18em] text-gold-400">
              {dict.common.applyNow}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl">
              {labels.applyNow}: {p.name}
            </h2>
            <p className="mt-4 max-w-xl text-base text-navy-100">{labels.applyCtaBody}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/${locale}/admissions`}
                className="inline-flex items-center gap-2 rounded-full bg-ubhi-green-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-ubhi-green-500/30 transition hover:bg-ubhi-green-600"
              >
                {labels.applyNow} <ArrowRight size={16} />
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {dict.common.contactUs}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-navy-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-serif text-2xl font-bold text-navy-700 dark:text-white sm:text-3xl">
              {labels.relatedTitle}
            </h2>
          </Reveal>
          <StaggerGroup className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((key) => {
              const rp = dict.programs.items[key]
              return (
                <StaggerItem
                  key={key}
                  className="group overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-navy-700 dark:bg-navy-800"
                >
                  <Link href={`/${locale}/programs/${key}`} className="block">
                    <div className="relative h-44 w-full overflow-hidden">
                      <Image
                        src={programImages[key]}
                        alt={rp.name}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-serif text-lg font-semibold text-navy-700 dark:text-white">
                        {rp.name}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm text-navy-500 dark:text-navy-200">
                        {rp.tagline}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ubhi-green-600">
                        {labels.readMore} <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        </div>
      </section>
    </>
  )
}

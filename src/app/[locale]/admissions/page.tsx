import { BookOpen, CalendarDays, CheckCircle2, ClipboardCheck, CreditCard, Download, FileCheck, FileText, GraduationCap, Wrench } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'

export default async function AdmissionsPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: localeParam } = await params
  const locale: Locale = isLocale(localeParam) ? localeParam : 'en'
  const dict = getDictionary(locale)
  const t = dict.admissions

  const steps = [
    { icon: FileText, title: t.step1Title, body: t.step1Body },
    { icon: ClipboardCheck, title: t.step2Title, body: t.step2Body },
    { icon: CreditCard, title: t.step3Title, body: t.step3Body },
    { icon: FileCheck, title: t.step4Title, body: t.step4Body }
  ]

  const dates = [
    { label: t.deadlineApp, value: t.deadlineAppDate },
    { label: t.deadlineOrient, value: t.deadlineOrientDate },
    { label: t.deadlineStart, value: t.deadlineStartDate }
  ]

  const tracks = [
    {
      icon: GraduationCap,
      data: t.tracks.hnd,
      accent: 'bg-navy-700 text-white',
      iconBg: 'bg-white/10 text-ubhi-green-300'
    },
    {
      icon: BookOpen,
      data: t.tracks.bachelor,
      accent: 'bg-ubhi-green-700 text-white',
      iconBg: 'bg-white/10 text-white'
    },
    {
      icon: Wrench,
      data: t.tracks.vocational,
      accent: 'bg-gold-500 text-navy-900',
      iconBg: 'bg-navy-900/10 text-navy-900'
    }
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
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
          <div className="relative">
            <div className="absolute left-5 top-2 bottom-2 hidden w-px bg-gradient-to-b from-ubhi-green-500 via-ubhi-green-300 to-transparent sm:block" />
            <StaggerGroup className="space-y-8">
              {steps.map((step, i) => (
                <StaggerItem key={step.title} className="relative flex gap-5">
                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ubhi-green-500 text-white shadow-lg shadow-ubhi-green-500/30">
                    <step.icon size={18} />
                  </div>
                  <div className="flex-1 rounded-2xl border border-navy-100 bg-white p-6 shadow-sm dark:border-navy-700 dark:bg-navy-800">
                    <div className="flex items-center gap-3">
                      <span className="font-serif text-xs font-bold uppercase tracking-wider text-ubhi-green-600">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-serif text-xl font-semibold text-navy-700 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-navy-500 dark:text-navy-200">
                      {step.body}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>

          <div className="space-y-6">
            <Reveal className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/photos/admissions-flyer.jpg"
                alt={t.title}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal delay={0.08} className="rounded-3xl border border-navy-100 bg-white p-6 shadow-sm dark:border-navy-700 dark:bg-navy-800">
              <div className="flex items-center gap-2 text-ubhi-green-600">
                <CalendarDays size={18} />
                <h3 className="font-serif text-lg font-semibold text-navy-700 dark:text-white">
                  {t.deadlineTitle}
                </h3>
              </div>
              <dl className="mt-4 space-y-3 text-sm">
                {dates.map((d) => (
                  <div key={d.label} className="flex items-start justify-between gap-4 border-b border-dashed border-navy-100 pb-3 last:border-b-0 last:pb-0 dark:border-navy-700">
                    <dt className="font-medium text-navy-700 dark:text-navy-100">{d.label}</dt>
                    <dd className="text-right text-navy-500 dark:text-navy-200">{d.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-navy-50/50 py-16 dark:bg-navy-800/30 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-ubhi-green-600">
              {t.requirementsTitle}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-navy-700 dark:text-white sm:text-4xl">
              {t.requirementsTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-base text-navy-500 dark:text-navy-200">
              {t.requirementsSubtitle}
            </p>
          </Reveal>

          <StaggerGroup className="mt-10 grid gap-6 lg:grid-cols-3">
            {tracks.map((track) => (
              <StaggerItem
                key={track.data.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-navy-700 dark:bg-navy-800"
              >
                <div className={`flex items-center gap-3 px-6 py-5 ${track.accent}`}>
                  <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${track.iconBg}`}>
                    <track.icon size={18} />
                  </span>
                  <div>
                    <p className="font-serif text-lg font-semibold">{track.data.title}</p>
                    <p className="text-xs opacity-80">{track.data.duration}</p>
                  </div>
                </div>
                <div className="flex-1 p-6">
                  <p className="text-sm leading-relaxed text-navy-500 dark:text-navy-200">
                    {track.data.tagline}
                  </p>
                  <ul className="mt-5 space-y-2.5 text-sm">
                    {track.data.docs.map((doc) => (
                      <li
                        key={doc}
                        className="flex items-start gap-3 text-navy-700 dark:text-navy-100"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-ubhi-green-500"
                        />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.08} className="mt-10 flex flex-col justify-center rounded-3xl bg-gradient-to-br from-navy-700 to-navy-900 p-8 text-white shadow-xl sm:p-12">
            <h3 className="font-serif text-2xl font-semibold">{dict.common.getStarted}</h3>
            <p className="mt-3 max-w-2xl text-sm text-navy-100">{dict.home.ctaBody}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 rounded-full bg-ubhi-green-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ubhi-green-600"
              >
                {dict.common.contactUs}
              </Link>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Download size={14} /> {t.downloadForm}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export const metadata = {
  title: 'Admissions'
}

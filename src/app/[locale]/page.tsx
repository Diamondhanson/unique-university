import { ArrowRight, BookOpen, GraduationCap, HeartPulse, Languages, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'
import { programImages, programOrder } from '@/lib/programs'

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: localeParam } = await params
  const locale: Locale = isLocale(localeParam) ? localeParam : 'en'
  const dict = getDictionary(locale)
  const t = dict.home
  const featured = programOrder.slice(0, 3)

  const stats = [
    { value: '9+', label: t.statsLabel1 },
    { value: '5', label: t.statsLabel2 },
    { value: '95%', label: t.statsLabel3 },
    { value: 'EN/FR', label: t.statsLabel4 }
  ]

  const features = [
    { icon: HeartPulse, title: t.featureOneTitle, body: t.featureOneBody },
    { icon: Languages, title: t.featureTwoTitle, body: t.featureTwoBody },
    { icon: GraduationCap, title: t.featureThreeTitle, body: t.featureThreeBody },
    { icon: Sparkles, title: t.featureFourTitle, body: t.featureFourBody }
  ]

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1900&q=80"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900/85 via-navy-900/70 to-navy-700/60" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-gold-400">
              <Sparkles size={12} /> {t.heroEyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-3xl font-serif text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              {t.heroTitle}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-100">
              {t.heroSubtitle}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href={`/${locale}/admissions`}
                className="inline-flex items-center gap-2 rounded-full bg-ubhi-green-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-ubhi-green-500/20 transition hover:bg-ubhi-green-600"
              >
                {t.ctaPrimary} <ArrowRight size={16} />
              </Link>
              <Link
                href={`/${locale}/programs`}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {t.ctaSecondary}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-navy-100 bg-white py-12 dark:border-navy-800 dark:bg-navy-900">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05} className="text-center">
              <p className="font-serif text-4xl font-bold text-navy-700 dark:text-white">
                {s.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-navy-500 dark:text-navy-200">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-navy-900 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.18em] text-ubhi-green-600">
              {t.whyTitle}
            </p>
            <h2 className="mt-3 font-serif text-4xl font-bold text-navy-700 dark:text-white sm:text-5xl">
              {t.whyTitle}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-500 dark:text-navy-200">
              {t.whySubtitle}
            </p>
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <StaggerItem
                key={f.title}
                className="group relative overflow-hidden rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-ubhi-green-300 hover:shadow-lg dark:border-navy-700 dark:bg-navy-800"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ubhi-green-500/10 text-ubhi-green-600">
                  <f.icon size={20} />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-navy-700 dark:text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500 dark:text-navy-200">
                  {f.body}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-navy-50/50 py-20 dark:bg-navy-800/30 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.18em] text-ubhi-green-600">
                {dict.nav.programs}
              </p>
              <h2 className="mt-3 font-serif text-4xl font-bold text-navy-700 dark:text-white sm:text-5xl">
                {t.programsTeaserTitle}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy-500 dark:text-navy-200">
                {t.programsTeaserBody}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                href={`/${locale}/programs`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy-700 transition hover:text-ubhi-green-600 dark:text-white"
              >
                {t.viewAll} <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((key) => {
              const p = dict.programs.items[key]
              return (
                <StaggerItem
                  key={key}
                  className="group overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-navy-700 dark:bg-navy-800"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={programImages[key]}
                      alt={p.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-semibold text-navy-700 dark:text-white">
                      {p.name}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-navy-500 dark:text-navy-200">
                      {p.desc}
                    </p>
                    <p className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-ubhi-green-600">
                      <BookOpen size={12} /> {p.duration}
                    </p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-navy-900 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="overflow-hidden rounded-3xl bg-gradient-to-br from-navy-700 to-navy-900 px-8 py-14 text-white shadow-2xl sm:px-14 sm:py-20">
            <p className="text-xs uppercase tracking-[0.18em] text-gold-400">
              {dict.common.applyNow}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
              {t.ctaTitle}
            </h2>
            <p className="mt-4 max-w-xl text-base text-navy-100">{t.ctaBody}</p>
            <Link
              href={`/${locale}/admissions`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ubhi-green-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ubhi-green-600"
            >
              {dict.common.getStarted} <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}

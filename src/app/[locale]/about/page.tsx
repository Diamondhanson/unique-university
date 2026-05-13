import { CheckCircle2, Compass, Heart, ShieldCheck, Target } from 'lucide-react'
import Image from 'next/image'

import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: localeParam } = await params
  const locale: Locale = isLocale(localeParam) ? localeParam : 'en'
  const dict = getDictionary(locale)
  const t = dict.about

  const values = [
    { icon: CheckCircle2, title: t.value1, body: t.value1Body },
    { icon: ShieldCheck, title: t.value2, body: t.value2Body },
    { icon: Heart, title: t.value3, body: t.value3Body },
    { icon: Compass, title: t.value4, body: t.value4Body }
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
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-navy-900 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=1100&q=80"
              alt={t.title}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <div className="space-y-6">
            <Reveal>
              <p className="text-base leading-relaxed text-navy-700 dark:text-navy-100">
                {t.intro}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-base leading-relaxed text-navy-700 dark:text-navy-100">
                {t.para2}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-navy-700 dark:text-navy-100">
                {t.para3}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-navy-50/50 py-16 dark:bg-navy-800/30 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <Reveal className="rounded-3xl border border-navy-100 bg-white p-8 shadow-sm dark:border-navy-700 dark:bg-navy-800">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ubhi-green-500/10 text-ubhi-green-600">
              <Target size={22} />
            </div>
            <h2 className="mt-5 font-serif text-2xl font-semibold text-navy-700 dark:text-white">
              {t.missionTitle}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-navy-500 dark:text-navy-200">
              {t.missionBody}
            </p>
          </Reveal>
          <Reveal delay={0.08} className="rounded-3xl border border-navy-100 bg-white p-8 shadow-sm dark:border-navy-700 dark:bg-navy-800">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-400/15 text-gold-600">
              <Compass size={22} />
            </div>
            <h2 className="mt-5 font-serif text-2xl font-semibold text-navy-700 dark:text-white">
              {t.visionTitle}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-navy-500 dark:text-navy-200">
              {t.visionBody}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-navy-900 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.18em] text-ubhi-green-600">
              {t.valuesTitle}
            </p>
            <h2 className="mt-3 font-serif text-4xl font-bold text-navy-700 dark:text-white sm:text-5xl">
              {t.valuesTitle}
            </h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <StaggerItem
                key={v.title}
                className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-navy-700 dark:bg-navy-800"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-500/10 text-navy-700 dark:text-ubhi-green-500">
                  <v.icon size={18} />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-navy-700 dark:text-white">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500 dark:text-navy-200">
                  {v.body}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  )
}

export const metadata = {
  title: 'About'
}

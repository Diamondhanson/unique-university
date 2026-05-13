import { ArrowRight, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'
import { programImages, programOrder } from '@/lib/programs'

export default async function ProgramsPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: localeParam } = await params
  const locale: Locale = isLocale(localeParam) ? localeParam : 'en'
  const dict = getDictionary(locale)
  const t = dict.programs

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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programOrder.map((key) => {
              const p = t.items[key]
              return (
                <StaggerItem
                  key={key}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-navy-700 dark:bg-navy-800"
                >
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={programImages[key]}
                      alt={p.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-3 top-3">
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-navy-700 backdrop-blur">
                        <Clock size={10} /> {t.durationLabel}: {p.duration}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-serif text-xl font-semibold text-navy-700 dark:text-white">
                      {p.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-500 dark:text-navy-200">
                      {p.desc}
                    </p>
                    <Link
                      href={`/${locale}/admissions`}
                      className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-ubhi-green-600 transition hover:text-ubhi-green-700"
                    >
                      {dict.common.applyNow} <ArrowRight size={14} />
                    </Link>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        </div>
      </section>
    </>
  )
}

export const metadata = {
  title: 'Programs'
}

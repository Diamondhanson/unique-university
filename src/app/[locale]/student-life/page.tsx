import { Calendar, Heart, Languages, Stethoscope, Trophy, Users } from 'lucide-react'
import Image from 'next/image'

import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'

export default async function StudentLifePage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: localeParam } = await params
  const locale: Locale = isLocale(localeParam) ? localeParam : 'en'
  const dict = getDictionary(locale)
  const t = dict.studentLife

  const features = [
    {
      icon: Stethoscope,
      title: t.section1Title,
      body: t.section1Body,
      image:
        'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1100&q=80'
    },
    {
      icon: Users,
      title: t.section2Title,
      body: t.section2Body,
      image:
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1100&q=80'
    },
    {
      icon: Trophy,
      title: t.section3Title,
      body: t.section3Body,
      image:
        'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1100&q=80'
    },
    {
      icon: Languages,
      title: t.section4Title,
      body: t.section4Body,
      image:
        'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1100&q=80'
    }
  ]

  const events = [
    { icon: Calendar, title: t.event1Title, body: t.event1Body },
    { icon: Heart, title: t.event2Title, body: t.event2Body },
    { icon: Trophy, title: t.event3Title, body: t.event3Body }
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
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8 lg:space-y-24">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''}`}
            >
              <Reveal className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src={f.image}
                  alt={f.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </Reveal>
              <Reveal delay={0.08}>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ubhi-green-500/10 text-ubhi-green-600">
                  <f.icon size={22} />
                </div>
                <h2 className="mt-5 font-serif text-3xl font-bold text-navy-700 dark:text-white sm:text-4xl">
                  {f.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-navy-500 dark:text-navy-200">
                  {f.body}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy-50/50 py-16 dark:bg-navy-800/30 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-serif text-3xl font-bold text-navy-700 dark:text-white sm:text-4xl">
              {t.eventsTitle}
            </h2>
          </Reveal>
          <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-3">
            {events.map((e) => (
              <StaggerItem
                key={e.title}
                className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-navy-700 dark:bg-navy-800"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold-400/15 text-gold-600">
                  <e.icon size={18} />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-navy-700 dark:text-white">
                  {e.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500 dark:text-navy-200">
                  {e.body}
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
  title: 'Student Life'
}

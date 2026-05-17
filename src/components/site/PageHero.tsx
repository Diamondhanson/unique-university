import Image from 'next/image'

import { Reveal } from './Reveal'

type PageHeroProps = {
  image: string
  eyebrow?: string
  title: string
  subtitle?: string
}

export function PageHero({ image, eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-navy-800 bg-navy-900">
      <Image
        src={image}
        alt=""
        fill
        sizes="100vw"
        priority
        className="object-cover"
        aria-hidden
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900/80 to-ubhi-green-700/60 sm:bg-gradient-to-r sm:from-navy-900 sm:via-navy-900/75 sm:to-navy-900/45"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        {eyebrow ? (
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
              {eyebrow}
            </p>
          </Reveal>
        ) : null}
        <Reveal delay={0.05}>
          <h1 className={`${eyebrow ? 'mt-3' : ''} font-serif text-5xl font-bold text-white drop-shadow-md sm:text-6xl`}>
            {title}
          </h1>
        </Reveal>
        {subtitle ? (
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-100">
              {subtitle}
            </p>
          </Reveal>
        ) : null}
      </div>
    </section>
  )
}

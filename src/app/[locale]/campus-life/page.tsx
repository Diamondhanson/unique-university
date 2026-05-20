import Image from 'next/image'

import { PageHero } from '@/components/site/PageHero'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'

export default async function CampusLifePage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: localeParam } = await params
  const locale: Locale = isLocale(localeParam) ? localeParam : 'en'
  const dict = getDictionary(locale)
  const t = dict.home

  const gallerySections: {
    id: string
    eyebrow: string
    title: string
    body: string
    items: { src: string; alt: string; span?: string }[]
  }[] = [
    {
      id: 'practicals',
      eyebrow: t.galleryPracticalsEyebrow,
      title: t.galleryPracticalsTitle,
      body: t.galleryPracticalsBody,
      items: [
        {
          src: '/photos/gallery-surgery-practical.jpg',
          alt: t.galleryAltSurgery,
          span: 'lg:col-span-2 lg:row-span-2'
        },
        {
          src: '/photos/gallery-cpr-practical.jpg',
          alt: t.galleryAltPractical
        },
        {
          src: '/photos/programs-imaging-ultrasound.jpg',
          alt: t.galleryAltUltrasound
        }
      ]
    },
    {
      id: 'in-class',
      eyebrow: t.galleryClassEyebrow,
      title: t.galleryClassTitle,
      body: t.galleryClassBody,
      items: [
        {
          src: '/photos/gallery-classroom-seated.jpg',
          alt: t.galleryAltClassroom,
          span: 'lg:col-span-2 lg:row-span-2'
        },
        {
          src: '/photos/gallery-exam-focus.jpg',
          alt: t.galleryAltExam
        },
        {
          src: '/photos/gallery-biochem-lecture.jpg',
          alt: t.galleryAltBiochem
        },
        {
          src: '/photos/gallery-group-study.jpg',
          alt: t.galleryAltGroup
        },
        {
          src: '/photos/gallery-laptop-study.jpg',
          alt: t.galleryAltStudy
        }
      ]
    },
    {
      id: 'campus',
      eyebrow: t.galleryCampusEyebrow,
      title: t.galleryCampusTitle,
      body: t.galleryCampusBody,
      items: [
        {
          src: '/photos/gallery-nursing-cohort.jpg',
          alt: t.galleryAltCohort,
          span: 'lg:col-span-2'
        },
        {
          src: '/photos/gallery-debate-event.jpg',
          alt: t.galleryAltDebate,
          span: 'lg:col-span-2'
        },
        {
          src: '/photos/gallery-students-outside.jpg',
          alt: t.galleryAltOutside
        },
        {
          src: '/photos/gallery-smile-portrait.jpg',
          alt: t.galleryAltSmile
        },
        {
          src: '/photos/gallery-uniform-portrait.jpg',
          alt: t.galleryAltUniform
        },
        {
          src: '/photos/programs-management-desk.jpg',
          alt: t.galleryAltReception
        }
      ]
    }
  ]

  return (
    <>
      <PageHero
        image="/photos/gallery-nursing-cohort.jpg"
        eyebrow={t.galleryEyebrow}
        title={t.galleryTitle}
        subtitle={t.gallerySubtitle}
      />

      <section className="bg-white py-16 dark:bg-navy-900 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {gallerySections.map((section) => (
              <div key={section.id} id={`campus-life-${section.id}`} className="scroll-mt-20">
                <Reveal className="max-w-2xl">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-500">
                    {section.eyebrow}
                  </p>
                  <h2 className="mt-2 font-serif text-2xl font-bold text-navy-700 dark:text-white sm:text-3xl">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-navy-500 dark:text-navy-200 sm:text-base">
                    {section.body}
                  </p>
                </Reveal>
                <StaggerGroup className="mt-8 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:grid-cols-3 sm:gap-4 lg:auto-rows-[220px] lg:grid-cols-4">
                  {section.items.map((item) => (
                    <StaggerItem
                      key={item.src}
                      className={`group relative overflow-hidden rounded-2xl bg-navy-100 shadow-sm ring-1 ring-navy-900/5 dark:bg-navy-800 dark:ring-white/5 ${item.span ?? ''}`}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export const metadata = {
  title: 'Campus Life'
}

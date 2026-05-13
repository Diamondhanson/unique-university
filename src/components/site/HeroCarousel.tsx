'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1900&q=80',
  'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=1900&q=80',
  'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1900&q=80',
  'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1900&q=80',
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1900&q=80',
  'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1900&q=80'
]

const CYCLE_MS = 6500
const PAN_DISTANCE = 48
const FADE_MS = 1400

export function HeroCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    HERO_IMAGES.forEach((src) => {
      const img = new window.Image()
      img.src = src
    })
  }, [])

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_IMAGES.length)
    }, CYCLE_MS)
    return () => clearInterval(t)
  }, [])

  const isEven = index % 2 === 0

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-navy-900">
      {HERO_IMAGES.map((src, i) => {
        const active = i === index
        const even = i % 2 === 0
        return (
          <motion.div
            key={src}
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: active ? 1 : 0,
              scale: 1.12,
              x: active
                ? even
                  ? -PAN_DISTANCE
                  : PAN_DISTANCE
                : even
                  ? PAN_DISTANCE
                  : -PAN_DISTANCE
            }}
            transition={{
              opacity: { duration: FADE_MS / 1000, ease: 'easeInOut' },
              x: {
                duration: active ? (CYCLE_MS + FADE_MS) / 1000 : 0,
                ease: 'linear'
              },
              scale: { duration: active ? (CYCLE_MS + FADE_MS) / 1000 : 0, ease: 'linear' }
            }}
            style={{ zIndex: active ? 1 : 0 }}
            aria-hidden
          >
            <Image
              src={src}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        )
      })}
      <div
        aria-hidden
        className="absolute inset-0 z-[2] bg-gradient-to-b from-navy-900/85 to-navy-900/60 sm:bg-gradient-to-r sm:from-navy-900 sm:from-15% sm:via-navy-900/45 sm:via-55% sm:to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 z-[2] h-32 bg-gradient-to-t from-navy-900/60 to-transparent"
      />
    </div>
  )
}

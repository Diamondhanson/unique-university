'use client'

import { motion, type Variants } from 'framer-motion'
import { ReactNode, useEffect, useRef, useState } from 'react'

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'article' | 'header' | 'footer'
}

function useInViewOnce<T extends Element>() {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || inView) return

    const rect = node.getBoundingClientRect()
    const vh = window.innerHeight
    if (rect.top < vh && rect.bottom > 0) {
      setInView(true)
      return
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px' }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [inView])

  return { ref, inView }
}

export function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>()
  const MotionTag = motion[as]
  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
}

export function StaggerGroup({ children, className }: { children: ReactNode; className?: string }) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>()
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  )
}

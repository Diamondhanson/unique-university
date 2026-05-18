'use client'

import { CheckCircle2, Send, XCircle } from 'lucide-react'
import { useActionState, useEffect, useRef } from 'react'

import { sendContactMessage, type ContactFormState } from '@/lib/contactActions'

type Labels = {
  formTitle: string
  nameLabel: string
  namePlaceholder: string
  emailLabel: string
  emailPlaceholder: string
  subjectLabel: string
  subjectPlaceholder: string
  messageLabel: string
  messagePlaceholder: string
  submit: string
  sending: string
}

const INITIAL_STATE: ContactFormState = { status: 'idle', message: '' }

export function ContactForm({ labels }: { labels: Labels }) {
  const [state, formAction, isPending] = useActionState(
    sendContactMessage,
    INITIAL_STATE
  )
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.status === 'success') {
      formRef.current?.reset()
    }
  }, [state])

  return (
    <div className="rounded-3xl border border-navy-100 bg-white p-8 shadow-sm dark:border-navy-700 dark:bg-navy-800 sm:p-10">
      <h2 className="font-serif text-2xl font-semibold text-navy-700 dark:text-white">
        {labels.formTitle}
      </h2>

      <form ref={formRef} action={formAction} className="mt-6 grid gap-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium text-navy-700 dark:text-navy-100">
              {labels.nameLabel}
            </span>
            <input
              type="text"
              name="name"
              required
              maxLength={120}
              placeholder={labels.namePlaceholder}
              disabled={isPending}
              className="mt-1.5 w-full rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-700 outline-none transition focus:border-ubhi-green-500 focus:ring-2 focus:ring-ubhi-green-500/30 disabled:opacity-60 dark:border-navy-700 dark:bg-navy-900 dark:text-white"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-navy-700 dark:text-navy-100">
              {labels.emailLabel}
            </span>
            <input
              type="email"
              name="email"
              required
              maxLength={180}
              placeholder={labels.emailPlaceholder}
              disabled={isPending}
              className="mt-1.5 w-full rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-700 outline-none transition focus:border-ubhi-green-500 focus:ring-2 focus:ring-ubhi-green-500/30 disabled:opacity-60 dark:border-navy-700 dark:bg-navy-900 dark:text-white"
            />
          </label>
        </div>
        <label className="block">
          <span className="text-sm font-medium text-navy-700 dark:text-navy-100">
            {labels.subjectLabel}
          </span>
          <input
            type="text"
            name="subject"
            maxLength={180}
            placeholder={labels.subjectPlaceholder}
            disabled={isPending}
            className="mt-1.5 w-full rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-700 outline-none transition focus:border-ubhi-green-500 focus:ring-2 focus:ring-ubhi-green-500/30 disabled:opacity-60 dark:border-navy-700 dark:bg-navy-900 dark:text-white"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-navy-700 dark:text-navy-100">
            {labels.messageLabel}
          </span>
          <textarea
            name="message"
            required
            rows={5}
            maxLength={5000}
            placeholder={labels.messagePlaceholder}
            disabled={isPending}
            className="mt-1.5 w-full rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-700 outline-none transition focus:border-ubhi-green-500 focus:ring-2 focus:ring-ubhi-green-500/30 disabled:opacity-60 dark:border-navy-700 dark:bg-navy-900 dark:text-white"
          />
        </label>

        {state.status === 'success' && (
          <div className="flex items-start gap-3 rounded-xl border border-ubhi-green-500/30 bg-ubhi-green-50 p-3 text-sm text-ubhi-green-700 dark:bg-ubhi-green-500/10 dark:text-ubhi-green-300">
            <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
            <span>{state.message}</span>
          </div>
        )}
        {state.status === 'error' && (
          <div className="flex items-start gap-3 rounded-xl border border-red-300/60 bg-red-50 p-3 text-sm text-red-700 dark:bg-red-500/10 dark:text-red-300">
            <XCircle size={18} className="mt-0.5 shrink-0" />
            <span>{state.message}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-ubhi-green-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-ubhi-green-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-fit"
        >
          {isPending ? labels.sending : labels.submit}{' '}
          <Send size={14} className={isPending ? 'animate-pulse' : ''} />
        </button>
      </form>
    </div>
  )
}

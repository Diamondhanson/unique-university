'use server'

import { Resend } from 'resend'

import { buildContactEmailHtml, buildContactEmailText } from './contactEmail'

export type ContactFormState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

const MAX = {
  name: 120,
  email: 180,
  subject: 180,
  message: 5000
}

function clean(value: FormDataEntryValue | null, max: number): string {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, max)
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = clean(formData.get('name'), MAX.name)
  const email = clean(formData.get('email'), MAX.email)
  const subject = clean(formData.get('subject'), MAX.subject)
  const message = clean(formData.get('message'), MAX.message)

  if (!name || !email || !message) {
    return {
      status: 'error',
      message: 'Please fill in your name, email, and message.'
    }
  }
  if (!isEmail(email)) {
    return { status: 'error', message: 'That email address looks invalid.' }
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev'

  if (!apiKey || !to) {
    console.error('[contact] Missing RESEND_API_KEY or CONTACT_TO_EMAIL')
    return {
      status: 'error',
      message: 'Email service not configured. Please try again later.'
    }
  }

  const submittedAt = new Date()
  const html = buildContactEmailHtml({ name, email, subject, message, submittedAt })
  const text = buildContactEmailText({ name, email, subject, message, submittedAt })

  try {
    const resend = new Resend(apiKey)
    const result = await resend.emails.send({
      from: `UBHI Website <${from}>`,
      to,
      replyTo: email,
      subject: subject
        ? `[UBHI contact] ${subject}`
        : `[UBHI contact] New message from ${name}`,
      html,
      text
    })
    if (result.error) {
      console.error('[contact] Resend error:', result.error)
      return {
        status: 'error',
        message: 'Could not send your message. Please try again.'
      }
    }
    return {
      status: 'success',
      message: "Thanks, your message is on its way. We'll get back to you shortly."
    }
  } catch (err) {
    console.error('[contact] Unexpected error:', err)
    return {
      status: 'error',
      message: 'Something went wrong. Please try again in a moment.'
    }
  }
}

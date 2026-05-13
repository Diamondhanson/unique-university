import { NextRequest, NextResponse } from 'next/server'

import { defaultLocale, locales } from '@/i18n/config'

function getRequestedLocale(request: NextRequest): string {
  const accept = request.headers.get('accept-language') ?? ''
  for (const tag of accept.split(',')) {
    const code = tag.split(';')[0].trim().slice(0, 2).toLowerCase()
    if ((locales as readonly string[]).includes(code)) return code
  }
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  )
  if (hasLocale) return NextResponse.next()

  const locale = getRequestedLocale(request)
  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)']
}

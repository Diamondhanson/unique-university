import 'server-only'
import type { Locale } from './config'

import enDict from './dictionaries/en.json'
import frDict from './dictionaries/fr.json'

export type Dictionary = typeof enDict

const dictionaries: Record<Locale, Dictionary> = {
  en: enDict,
  fr: frDict as Dictionary
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en
}

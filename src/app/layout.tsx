import '../styles/index.css'
import { ReactNode } from 'react'

export const metadata = {
  metadataBase: new URL('https://unique-bilingual.com'),
  title: {
    default: 'Unique Bilingual Higher Institute',
    template: '%s | UBHI'
  },
  description:
    'Unique Bilingual Higher Institute, a specialized higher institute training the next generation of healthcare professionals.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}

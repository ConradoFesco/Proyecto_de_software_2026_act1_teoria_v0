import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rumbo AR — Destinos para mirar distinto',
  description: 'Una guía de destinos de playa y montaña para descubrir Argentina.',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f3f0e9',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}

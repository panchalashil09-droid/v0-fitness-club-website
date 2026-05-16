import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: 'Assure Fitness Club LLP | Premium Gym in Ahmedabad',
  description: 'Transform your body at Assure Fitness Club LLP - Ahmedabad\'s premium two-floor gym with world-class equipment, AC environment, cardio zone, boxing area, yoga & zumba sessions. Join today!',
  keywords: 'gym, fitness, Ahmedabad, workout, cardio, boxing, yoga, zumba, weight loss, muscle gain, strength training',
  authors: [{ name: 'Assure Fitness Club LLP' }],
  openGraph: {
    title: 'Assure Fitness Club LLP | Premium Gym in Ahmedabad',
    description: 'Transform your body at Assure Fitness Club LLP - Ahmedabad\'s premium two-floor gym',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

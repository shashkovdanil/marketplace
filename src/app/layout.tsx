import type { Metadata } from 'next'

import { Header } from '@/components/Header'
import { WagmiConfig } from '@/components/WagmiConfig'
import { Prompt } from 'next/font/google'

import './globals.css'

const prompt = Prompt({ subsets: ['latin'], weight: ['400', '700', '900'] })

export const metadata: Metadata = {
  description: 'Sneakers marketplace',
  title: 'mrktplc',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={prompt.className}>
        <WagmiConfig>
          <>
            <Header />
            <main className="mx-auto w-full max-w-6xl px-4">{children}</main>
          </>
        </WagmiConfig>
      </body>
    </html>
  )
}

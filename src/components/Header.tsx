'use client'

import { ConnectButton } from '@/components/ConnectButton'
import { routes } from '@/lib/const'
import { count } from '@/stores/cart'
import { useStore } from '@nanostores/react'
import Link from 'next/link'

export function Header() {
  const cartCount = useStore(count)

  return (
    <header className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 md:h-24 md:flex-row">
      <Link className="text-2xl font-black" href={routes.home()}>
        mrktplc
      </Link>
      <nav className="flex items-center gap-4">
        <Link className="hover:underline" href={routes.cart()}>
          Cart{cartCount > 0 ? ` (${cartCount})` : ''}
        </Link>
        <ConnectButton />
      </nav>
    </header>
  )
}

'use client'

import type { Product } from '@/lib/entities'

import { Button } from '@/components/Button'
import { cart, toggleProductInCart } from '@/stores/cart'
import { useStore } from '@nanostores/react'

export default function CartButton(product: Product) {
  const cartStore = useStore(cart)

  return (
    <Button
      onClick={() => {
        toggleProductInCart(product)
      }}
    >
      {cartStore.some(productInCard => productInCard.id === product.id)
        ? 'Remove from cart'
        : 'Add to cart'}
    </Button>
  )
}

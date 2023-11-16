import { Product } from '@/lib/entities'
import { persistentAtom } from '@nanostores/persistent'
import { computed } from 'nanostores'

export const cart = persistentAtom<Product[]>('cart', [], {
  decode: JSON.parse,
  encode: JSON.stringify,
})

export const toggleProductInCart = (product: Product) => {
  cart.set(
    cart.get().some(productInCart => productInCart.id === product.id)
      ? cart.get().filter(productInCart => productInCart.id !== product.id)
      : [...cart.get(), product],
  )
}

export const count = computed([cart], cart => cart.length)

export const totalPrice = computed([cart], cart =>
  cart.reduce((acc, product) => acc + product.price, 0),
)

export const clearCart = () => cart.set([])

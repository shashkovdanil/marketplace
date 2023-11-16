import { afterEach, expect, test } from 'vitest'

import { items } from '../data'
import {
  cart,
  clearCart,
  count,
  toggleProductInCart,
  totalPrice,
} from '../stores/cart'

afterEach(() => {
  clearCart()
})

test('toggle item in cart', () => {
  toggleProductInCart(items[0])

  expect(cart.get()).toHaveLength(1)
  expect(cart.get()[0]).toEqual(items[0])

  toggleProductInCart(items[0])

  expect(cart.get()).toHaveLength(0)
})

test('calculate total price', () => {
  toggleProductInCart(items[0])
  toggleProductInCart(items[1])

  expect(totalPrice.get()).toBe(427)
})

test('calculate total count', () => {
  toggleProductInCart(items[0])
  toggleProductInCart(items[1])
  toggleProductInCart(items[2])

  expect(count.get()).toBe(3)
})

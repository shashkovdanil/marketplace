'use client'

import { Button } from '@/components/Button'
import { Price } from '@/components/Price'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { routes } from '@/lib/const'
import { cart, toggleProductInCart, totalPrice } from '@/stores/cart'
import { useStore } from '@nanostores/react'
import Image from 'next/image'
import Link from 'next/link'

import { ClearCartDialog } from './_components/ClearCartDialog'
import { OrderDialog } from './_components/OrderDialog'

export default function CartPage() {
  const totalPriceStore = useStore(totalPrice)
  const cartStore = useStore(cart)

  if (cartStore.length === 0) {
    return (
      <div className="pt-48 text-center">
        <p>Cart is empty</p>
        <Link className="underline" href={routes.home()}>
          Go to shopping
        </Link>
      </div>
    )
  }

  return (
    <>
      <Table className="mb-8">
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="w-[100px] text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cartStore.map(product => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">
                <Link
                  className="flex items-center gap-2"
                  href={routes.product(product.id)}
                >
                  <Image
                    alt={product.title}
                    height={100}
                    src={product.image}
                    width={100}
                  />
                  <p className="hidden md:block">{product.title}</p>
                </Link>
              </TableCell>
              <TableCell className="text-right">
                <Price price={product.price} />
              </TableCell>
              <TableCell className="text-right">
                <Button
                  onClick={() => {
                    toggleProductInCart(product)
                  }}
                  size="sm"
                  variant="destructive"
                >
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between gap-4">
        <ClearCartDialog />
        <div className="flex items-center gap-4">
          <Price className="text-xl font-bold" price={totalPriceStore} />
          <OrderDialog />
        </div>
      </div>
    </>
  )
}

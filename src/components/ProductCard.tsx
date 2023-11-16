'use client'

import type { Product } from '@/lib/entities'

import { Price } from '@/components/Price'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { routes } from '@/lib/const'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'

const CartButton = dynamic(() => import('@/components/CartButton'), {
  ssr: false,
})

export function ProductCard(product: Product) {
  const { id, image, price, title } = product

  return (
    <Card>
      <Link href={routes.product(id)}>
        <CardContent>
          <Image alt={title} height={500} src={image} width={500} />
        </CardContent>
      </Link>
      <CardFooter>
        <div className="w-full">
          <h2 className="text-lg font-bold">{title}</h2>
          <Price className="mb-5" price={price} />
          <CartButton {...product} />
        </div>
      </CardFooter>
    </Card>
  )
}

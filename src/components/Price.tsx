import type { HTMLAttributes } from 'react'

import { formatPrice } from '@/lib/utils'

type Props = {
  price: number
} & HTMLAttributes<HTMLDivElement>

export function Price({ price, ...rest }: Props) {
  return <div {...rest}>{formatPrice(price)}</div>
}

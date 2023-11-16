import { Price } from '@/components/Price'
import { Badge } from '@/components/ui/badge'
import { fetchProduct } from '@/lib/api'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const CartButton = dynamic(() => import('@/components/CartButton'), {
  ssr: false,
})

type Props = {
  params: {
    id: string
  }
}

export default async function ProductPage({ params: { id } }: Props) {
  const product = await fetchProduct(id)

  if (!product) {
    return <div>Can&apos;t fetch product. Please try again later.</div>
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div>
        <Image
          alt={product.title}
          height={500}
          src={product.image}
          width={500}
        />
      </div>
      <div>
        <h1 className="mb-3 text-4xl font-bold">{product.title}</h1>
        <Price className="mb-3 text-xl" price={product.price} />
        <Badge className="mb-3">{product.category}</Badge>
        <p className="mb-3">{product.description}</p>
        <CartButton {...product} />
      </div>
    </div>
  )
}

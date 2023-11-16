import { ProductList } from '@/components/ProductList'
import { fetchProducts } from '@/lib/api'

export default async function Home() {
  const products = await fetchProducts()

  if (!products) {
    return <div>Can&apos;t fetch products. Please try again later.</div>
  }

  return <ProductList products={products} />
}

'use client'

import { Button } from '@/components/Button'
import { ProductCard } from '@/components/ProductCard'
import { Combobox, type Option } from '@/components/ui/combobox'
import { Product } from '@/lib/entities'
import { useCallback, useMemo, useState } from 'react'

type Props = {
  products: Product[]
}

const categories: Option[] = [
  { label: 'Sneakers', value: 'sneakers' },
  { label: 'Boots', value: 'boots' },
  { label: 'Sandals', value: 'sandals' },
]

export function ProductList({ products }: Props) {
  const [category, setCategory] = useState<Option>()

  const productsToShow = useMemo(
    () =>
      category
        ? products.filter(product => product.category === category.value)
        : products,
    [category, products],
  )

  const clearFilters = useCallback(() => {
    setCategory(undefined)
  }, [])

  return (
    <div>
      <div className="mb-6 flex gap-4">
        <Combobox
          onSelect={setCategory}
          options={categories}
          placeholder="Filter by category"
          selected={category}
        />
        {category ? (
          <Button onClick={clearFilters}>Clear filters</Button>
        ) : null}
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productsToShow.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}

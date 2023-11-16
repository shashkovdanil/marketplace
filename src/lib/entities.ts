export type Categories = 'boots' | 'sandals' | 'sneakers'

export type Product = {
  category: Categories
  id: string
  image: string
  price: number
  title: string
}

export type ProductDetails = Product & {
  description: string
}

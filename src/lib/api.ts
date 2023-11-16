import { Product, ProductDetails } from '@/lib/entities'

const HOST = process.env.HOST as string

async function request<Response>(url: string, options: RequestInit = {}) {
  try {
    const response = await fetch(`${HOST}${url}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
    })

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    const json = await response.json()

    return json as Response
  } catch (e) {
    console.error(e)
  }
}

export async function fetchProducts() {
  return request<Product[]>('/products/api')
}

export async function fetchProduct(id: string) {
  return request<ProductDetails>(`/products/api?id=${id}`)
}

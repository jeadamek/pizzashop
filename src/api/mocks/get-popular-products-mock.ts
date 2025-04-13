import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza Marguerita', amount: 6 },
    { product: 'Pizza Calabresa', amount: 10 },
    { product: 'Pizza Pepperoni', amount: 12 },
    { product: 'Pizza Mussarela', amount: 15 },
    { product: 'Pizza Frango com Catupity', amount: 7 },
  ])
})

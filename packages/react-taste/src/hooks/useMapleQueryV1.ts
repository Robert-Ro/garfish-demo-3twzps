import { useEffect, useState } from 'react'
import { BaseListResponse, Product } from '../type'

export const useMapleQueryV1 = (): Product[] => {
  const [products, setProduct] = useState<Product[]>([])

  useEffect(() => {
    fetch('http://localhost:3090/api/products', {
      headers:{
        'X-API-VERSION': 'v1'
      }
    })
      .then((res) => res.json())
      .then((res: BaseListResponse<Product>) => {
        setProduct(res.records)
      })
  }, [])

  return products
}

import Product from '../components/product'
import { useMapleQueryV1 } from '../hooks/useMapleQueryV1'

export default () => {
  const products = useMapleQueryV1()
  return (
    <ul>
      <li style={{ maxHeight: 700, scrollBehavior: 'auto' }}>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </li>
    </ul>
  )
}

import classNames from 'classnames'
import Slide from './slide'
import './product.less'

export default ({ product }: { product: Product }) => {
  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = product

  return (
    <div className={classNames('product')}>
      <Slide data={images.split(',')} />
      <div className={classNames('content')}>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <p>price: {price}</p>
        <p>discountPercentage: {discountPercentage}</p>
        <p>rate: {rating}</p>
        <p>stock: {stock}</p>
        <p>brand: {brand}</p>
        <p>category: {category}</p>
        {/* <div>
          <img src={thumbnail} alt="" title="" width={100} height={100} />
        </div> */}
      </div>
    </div>
  )
}

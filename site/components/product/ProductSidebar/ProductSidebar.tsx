import s from './ProductSidebar.module.css'
import { useAddItem } from '@framework/cart'
import { FC, useEffect, useState } from 'react'
import { ProductOptions } from '@components/product'
import type { Product } from '@commerce/types/product'
import { Button, Text, Rating, Collapse, useUI } from '@components/ui'
import {
  getProductVariant,
  selectDefaultOptionFromProduct,
  SelectedOptions,
} from '../helpers'
import ProductTag from '../ProductTag'
import Amazon from '@components/icons/Amazon'

interface ProductSidebarProps {
  product: Product
  className?: string
  price: string
}

const ProductSidebar: FC<ProductSidebarProps> = ({
  product,
  className,
  price,
}) => {
  const addItem = useAddItem()
  const { openSidebar } = useUI()
  const [loading, setLoading] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({})

  useEffect(() => {
    selectDefaultOptionFromProduct(product, setSelectedOptions)
  }, [product])

  const handleClick = () => {
    window.open('https://www.amazon.com')
  }

  return (
    <div className={className}>
      <ProductTag
        name={product.name}
        price={`${price} ${product.price?.currencyCode}`}
        fontSize={32}
      />
      <div className="flex flex-row justify-between items-center">
        <Rating value={4} />
        <div className="text-accent-6 pr-1 font-medium text-sm">36 reviews</div>
      </div>
      <div className="pb-8">
        <Button
          aria-label="Order Now At Amazon"
          type="button"
          className={s.button}
          href="https://www.amazon.com"
          onClick={handleClick}
        >
          Order Now At
          <Amazon />
        </Button>
      </div>
      <Text
        className="break-words w-full max-w-xl"
        html={product.descriptionHtml || product.description}
      />
      <div className="mt-6">
        <Collapse title="Why only on amazon?">
          This is a limited edition production run. Printing starts when the
          drop ends.
        </Collapse>
        <Collapse title="Happiness Guaranteed">
          Our number one priority here at Bebey is your and your baby's
          happiness. This means we stand by our product 100%, no matter what, no
          questions asked, no holds barred, no ifs, no buts. If you have a
          problem, we will solve it. Refund it. Send you a new product. Whatever
          it takes. Just reach out to our Customer Happiness Team. We're here
          for you. Happiness. Guaranteed.
        </Collapse>
      </div>
    </div>
  )
}

export default ProductSidebar

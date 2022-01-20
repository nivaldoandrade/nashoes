import { useState, useEffect } from 'react';
import api from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import { ProductItem } from '../ProductItem';

import { ProductListContainer } from './styles';

export interface IProducts {
  id: number;
  title: string;
  price: number;
  priceFormatted: string;
  image: string;
}

export function ProductList() {
  const [products, setProducts] = useState<IProducts[]>([]);

  useEffect(() => {
    api.get('products').then(response => {
      const productsFormatted = response.data.map((item: IProducts) => {
        return {
          ...item,
          priceFormatted: formatPrice(item.price),
        };
      });

      setProducts(productsFormatted);
    });
  }, []);

  return (
    <ProductListContainer>
      {products.map(item => (
        <ProductItem key={item.id} product={item} />
      ))}
    </ProductListContainer>
  );
}

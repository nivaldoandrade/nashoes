import { useCallback } from 'react';
import { FaCartArrowDown } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store';
import { addProductToCartRequest } from '../../store/modules/cart/actions';

import { IProducts } from '../ProductList';

import { Product } from './styles';

interface IProduct {
  product: IProducts;
}

export function ProductItem({ product }: IProduct) {
  const dispatch = useDispatch();
  const quantityInCart = useSelector<IState, number>(
    state =>
      state.cart.items.find(item => item.product.id === product.id)?.quantity ??
      0,
  );

  const handleAddProductToCart = useCallback(() => {
    dispatch(
      addProductToCartRequest({ product, quantity: quantityInCart + 1 }),
    );
  }, [dispatch, product, quantityInCart]);

  return (
    <Product>
      <img src={product.image} alt={product.title} />
      <strong>{product.title}</strong>
      <span>{product.priceFormatted}</span>
      <button type="button" onClick={handleAddProductToCart}>
        <div>
          <FaCartArrowDown size={16} /> {quantityInCart}
        </div>
        <span>adicionar ao carrinho</span>
      </button>
    </Product>
  );
}

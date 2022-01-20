import { ICartItem } from './types';

export function addProductToCartRequest({ product, quantity }: ICartItem) {
  return {
    type: 'ADD_PRODUCT_TO_CART_REQUEST',
    payload: { product, quantity },
  };
}

export function addProductToCartSuccess({ product, quantity }: ICartItem) {
  return {
    type: 'ADD_PRODUCT_TO_CART_SUCCESS',
    payload: { product, quantity },
  };
}

export function addProductToCartFailure(productId: number) {
  return {
    type: 'ADD_PRODUCT_TO_CART_FAILURE',
    payload: { productId },
  };
}

export function removeProductToCart(productId: number) {
  return {
    type: 'REMOVE_PRODUCT_FROM_CART',
    payload: { productId },
  };
}

// export function updateQuantityProductInCart({
//   productId,
//   amount,
// }: IUpdateQuantityproductInCart) {
//   return {
//     type: 'UPDATE_QUANTITY_PRODUCT_IN_CART',
//     payload: { productId, amount },
//   };
// }

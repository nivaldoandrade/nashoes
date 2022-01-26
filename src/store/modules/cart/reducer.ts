import { AnyAction } from 'redux';
import produce from 'immer';
import { toast } from 'react-toastify';

import { ICartState } from './types';

const INITIAL_STATE: ICartState = {
  items: [],
  failureInStock: [],
};

function cart(state = INITIAL_STATE, action: AnyAction) {
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_PRODUCT_TO_CART_SUCCESS':
        const { product, quantity } = action.payload;

        const productInCartIndex = draft.items.findIndex(
          item => item.product.id === product.id,
        );

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity = quantity;
        } else {
          draft.items.push({ product, quantity: 1 });
        }

        break;
      case 'ADD_PRODUCT_TO_CART_FAILURE':
        const { productId } = action.payload;

        draft.failureInStock.push(productId);

        toast.info('Quantidade solicitada fora de estoque!');

        break;
      case 'REMOVE_PRODUCT_FROM_CART':
        const { productId: id } = action.payload;

        const removeProductToCartIndex = draft.items.findIndex(
          item => item.product.id === id,
        );

        draft.items.splice(removeProductToCartIndex, 1);

        toast.warning('Produto removido com sucesso!');
        break;
      default:
        return draft;
    }
  });
}

export default cart;

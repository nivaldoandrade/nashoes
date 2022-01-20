import { useCallback } from 'react';
import { FaPlusCircle, FaMinusCircle, FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import {
  addProductToCartRequest,
  removeProductToCart,
} from '../../store/modules/cart/actions';
import { ICartItem } from '../../store/modules/cart/types';

export function CartItem({ product, quantity, subtotal }: ICartItem) {
  const dispatch = useDispatch();

  const handleChangeInputQuantity = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentQuantity = Number(e.target.value);

      if (currentQuantity < 0) {
        return;
      }

      dispatch(
        addProductToCartRequest({
          product,
          quantity: currentQuantity,
        }),
      );
    },
    [dispatch, product],
  );

  const handleDecrementProduct = useCallback(() => {
    if (quantity - 1 < 0) {
      return;
    }

    dispatch(
      addProductToCartRequest({
        product,
        quantity: quantity - 1,
      }),
    );
  }, [dispatch, product, quantity]);

  const handleIncrementProduct = useCallback(() => {
    dispatch(
      addProductToCartRequest({
        product,
        quantity: quantity + 1,
      }),
    );
  }, [dispatch, product, quantity]);

  const handleRemoveProduct = useCallback(() => {
    dispatch(removeProductToCart(product.id));
  }, [dispatch, product.id]);

  return (
    <>
      <td>
        <img src={product.image} alt={product.title} />
      </td>
      <td>
        <strong>{product.title}</strong>
        <span>{product.priceFormatted}</span>
      </td>
      <td>
        <div>
          <button type="button" onClick={handleDecrementProduct}>
            <FaMinusCircle size={20} />
          </button>
          <input
            type="text"
            value={quantity}
            onChange={e => handleChangeInputQuantity(e)}
          />
          <button type="button" onClick={handleIncrementProduct}>
            <FaPlusCircle size={20} />
          </button>
        </div>
      </td>
      <td>{subtotal}</td>
      <td>
        <button type="button" onClick={handleRemoveProduct}>
          <FaTrash size={15} />
        </button>
      </td>
    </>
  );
}

import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CartItem } from '../../components/CartItem';
import { IState } from '../../store';
import { ICartItem } from '../../store/modules/cart/types';
import { formatPrice } from '../../utils/formatPrice';

import { CartContainer, TableContent, Total } from './styles';

export function Cart() {
  const cart = useSelector<IState, ICartItem[]>(state =>
    state.cart.items.map(item => {
      return {
        ...item,
        subtotal: formatPrice(item.product.price * item.quantity),
      };
    }),
  );

  const total = useMemo(() => {
    return formatPrice(
      cart.reduce((sumTotal, item) => {
        return sumTotal + item.product.price * item.quantity;
      }, 0),
    );
  }, [cart]);

  return (
    <CartContainer>
      <TableContent>
        <thead>
          <tr>
            <th />
            <th>produto</th>
            <th>qtd</th>
            <th>subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.product.id}>
              <CartItem
                product={item.product}
                quantity={item.quantity}
                subtotal={item.subtotal}
              />
            </tr>
          ))}
        </tbody>
      </TableContent>
      <Total>
        <button type="button">finalizar pedido</button>
        <div>
          <span>total</span>
          <strong>{total}</strong>
        </div>
      </Total>
    </CartContainer>
  );
}

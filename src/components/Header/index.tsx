import { FaShoppingBag } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import LogoImg from '../../assets/images/logo.svg';
import { IState } from '../../store';

import { HeaderContainer, LinkLogo, CartContainer } from './styles';

export function Header() {
  const totalItemsInCart = useSelector<IState, number>(
    state => state.cart.items.length,
  );

  return (
    <HeaderContainer>
      <LinkLogo to="/">
        <img src={LogoImg} alt="RocketShoes Logo" />
      </LinkLogo>
      <CartContainer to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>
            {totalItemsInCart === 1
              ? `${totalItemsInCart} item`
              : `${totalItemsInCart} itens`}
          </span>
        </div>
        <FaShoppingBag size={33} />
      </CartContainer>
    </HeaderContainer>
  );
}

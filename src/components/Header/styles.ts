import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.12rem 0;
  color: var(--white);
`;

export const CartContainer = styled(Link)`
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  div {
    strong {
      font-size: 0.87rem;
      font-weight: 400;
    }

    span {
      display: block;
      font-size: 0.75rem;
      color: var(--gray);
      text-align: right;
      margin-top: 0.15rem;
    }
  }
`;

export const LinkLogo = styled(Link)``;

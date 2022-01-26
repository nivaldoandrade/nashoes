import styled from 'styled-components';
import { darken } from 'polished';

interface ProductProps {
  isStock: boolean;
}

export const Product = styled.div<ProductProps>`
  opacity: ${props => (props.isStock ? 1 : 0.7)};
  background: var(--white);
  padding: 1.25rem;
  border-radius: 0.25rem;

  display: flex;
  flex-direction: column;

  strong {
    color: var(--gray-500);
    line-height: 1.31rem;
  }

  > span {
    font-weight: bold;
    color: var(--gray-500);
    margin: 10px 0 1.25rem 0;
    font-size: 1.31rem;
  }

  button {
    margin-top: auto;

    display: flex;
    align-items: center;

    border: 0;
    background: var(--blue);
    border-radius: 0.25rem;

    text-transform: uppercase;
    color: var(--white);

    transition: all 200ms ease-in-out;

    &:disabled {
      cursor: not-allowed;
    }

    &:hover {
      background: ${darken(0.2, '#7159c1')};
    }

    div {
      width: 3.12rem;
      height: 2.62rem;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      background-color: ${darken(0.2, '#7159c1')};
      border-top-left-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
    }

    svg {
      font-size: 0;
    }

    span {
      font-size: 0.87rem;
      font-weight: bold;
      flex: 1;
    }
  }
`;

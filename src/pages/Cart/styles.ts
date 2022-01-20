import styled from 'styled-components';
import { darken } from 'polished';

export const CartContainer = styled.section`
  background-color: var(--white);
  padding: 2rem;
  border-radius: 0.5rem;
`;

export const TableContent = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;

  thead {
    text-align: left;
    text-transform: uppercase;
    color: var(--gray-100);
  }

  tbody {
    img {
      width: 100px;
      height: 100px;
    }

    button {
      background: none;
      border: 0;
      font-size: 0;

      svg {
        color: var(--blue);
        transition: all 200ms ease-in-out;

        &:hover {
          color: ${darken(0.2, '#7159c1')};
        }
      }
    }

    td {
      font-weight: bold;
      color: var(--gray-500);

      padding: 1rem 0;
      border-bottom: 1px solid var(--gray-100);
    }

    td:nth-child(2) {
      strong {
        display: block;
        color: var(--gray-500);
        margin-bottom: 0.25rem;
      }

      span {
        font-size: 1.25rem;
        font-weight: bold;
        display: block;
      }
    }

    td:nth-child(3) {
      div {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        input {
          width: 3rem;
          height: 2rem;
          border: 1px solid var(--gray-100);
          border-radius: 0.25rem;

          text-align: center;

          /* Chrome, Safari, Edge, Opera */
          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          /* Firefox */
          &[type='number'] {
            -moz-appearance: textfield;
          }
        }
      }
    }
  }
`;

export const Total = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: var(--blue);
    border: 0;
    border-radius: 0.25rem;
    padding: 0.87rem;

    color: var(--white);
    font-weight: bold;
    text-transform: uppercase;

    transition: all 200ms ease-in-out;

    &:hover {
      background: ${darken(0.2, '#7159c1')};
    }
  }

  div {
    span {
      font-size: 0.87rem;
      font-weight: bold;
      text-transform: uppercase;
      color: var(--gray-100);
    }

    strong {
      margin-left: 0.5rem;
      font-size: 1.75rem;
    }
  }
`;

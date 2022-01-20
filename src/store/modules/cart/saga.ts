import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import {
  addProductToCartFailure,
  addProductToCartRequest,
  addProductToCartSuccess,
} from './actions';

type ICheckProductInStockResponse = ReturnType<typeof addProductToCartRequest>;

interface IStockResponse {
  id: number;
  amount: number;
}

function* checkProductInStock({ payload }: ICheckProductInStockResponse) {
  const { product, quantity } = payload;

  const productQuantity: AxiosResponse<IStockResponse> = yield call(
    api.get,
    `stock/${product.id}`,
  );

  if (productQuantity.data.amount >= quantity) {
    yield put(addProductToCartSuccess({ product, quantity }));
  } else {
    yield put(addProductToCartFailure(product.id));
  }
}

export default all([
  takeLatest('ADD_PRODUCT_TO_CART_REQUEST', checkProductInStock),
]);

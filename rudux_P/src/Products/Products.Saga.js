import { put, takeLatest } from "redux-saga/effects";
import { PRODUCTS_LIST } from "../services/http/http.config";
import { getRequest } from "../services/http/http.service";
import { getProductsFailed, getProductsSuccess } from "./Products.slice";

function* getProducts() {
  try {
    const result = yield getRequest(PRODUCTS_LIST);
    console.log( result);
    yield put(getProductsSuccess({ result: result }));
  } catch (err) {
    console.log(err);
    yield put(getProductsFailed({ result: [] }));
  }
}

export function* watchGetProducts() {
  yield takeLatest("products/getProducts", getProducts);
}
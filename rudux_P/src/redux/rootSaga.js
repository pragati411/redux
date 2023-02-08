//Saga effects
import { all, fork } from "redux-saga/effects";
 // import { watchAddNewBusinessRequest } from "../calculator/Calculator.Saga";
import { watchGetProducts } from "../Products/Products.Saga";

export default function* rootSaga() {
  yield all([ fork(watchGetProducts)]);
}
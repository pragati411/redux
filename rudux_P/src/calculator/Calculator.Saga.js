import { delay, put, takeLatest } from "redux-saga/effects";
import { addNumbersSuccess } from "./Calculator.Slice";

function* onAddNumber(actions) {
  try {
    const result = +actions.payload.num1 + +actions.payload.num2;
    console.log({ result });

    yield delay(3000);
    yield put(addNumbersSuccess(result));
  } catch (err) {
    console.log( err);
  }
}

export function* watchAddNewBusinessRequest() {
  yield takeLatest("calculator/addNumbers", onAddNumber);
}
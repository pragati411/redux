import { configureStore } from "@reduxjs/toolkit";


import CalculatorSlice from "../calculator/Calculator.Slice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

import ProductsSlice from "../Products/Products.slice";
const sagaMiddleware = createSagaMiddleware();

export const reduxStore = configureStore({
  reducer: {
    
    products: ProductsSlice,
    calculator: CalculatorSlice,
    
    
  },
  middleware: (currentMiddleware) => [
    ...currentMiddleware({ thunk: false }),
    sagaMiddleware,
  ],
});
sagaMiddleware.run(rootSaga);
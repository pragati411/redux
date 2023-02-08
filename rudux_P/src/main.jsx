import React, { createContext } from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { reduxStore } from "./redux/store";

import Calcuator from "./calculator/Calculator.Layout";
import Products from "./Products/Products.Layout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={reduxStore}>
      {/* <Calcuator /> */}
      <Products />
    </Provider>
  </>
);

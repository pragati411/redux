import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./Products.slice";

const Products = () => {
  const productsState = useSelector((state) => state.products);
  const dispatch = useDispatch();

  console.log({ productsState });

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <>
      <h1>Products List</h1>
    </>
  );
};

export default Products;

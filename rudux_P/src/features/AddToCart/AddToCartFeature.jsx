import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { CartDiv } from "../../assets/Styles/ListStyled";
import { getRequest } from "../../services/http/http.service";
import { CartSummary } from "./CartSummary";
import { ListProduct } from "./ListProduct";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { totalAmt } from "./Total";
import { BallTriangle } from "react-loader-spinner";
import { WishList } from "../wishList/WishList";

export const AddToCartFeature = () => {
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState(false);
  const wishList = useSelector((state) => state.addToWishList.wishList);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const [openWishList, setOpenWishList] = React.useState(false);

  const handleOpen = () => {
    cart ? setCart(false) : setCart(true);
    setOpen(true);
  };

  const openWishListFunc = () => {
    openWishList ? setOpenWishList(false) : setOpenWishList(true);
    setOpen(true);
  };
  const closeWishList = () => {
    setOpenWishList(false);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => {
        return data.json();
      })
      .then((data) => setProduct(data));
  }, []);

  return (
    <>
      <CartDiv>
        <Button onClick={handleOpen}>Cart:{totalAmt().totalQuantity}</Button>
        <Button onClick={openWishListFunc}>WishList:{wishList.length}</Button>
      </CartDiv>

      <Typography id="modal-modal-title" variant="h6" component="h2">
        {cart && <CartSummary />}
      </Typography>

      {product ? (
        <>
          <ListProduct arr={product} />
        </>
      ) : (
        <BallTriangle
          height={400}
          width={400}
          radius={5}
          color="red"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      )}
      {openWishList && (
        <Modal
          open={open}
          onClose={closeWishList}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <WishList />
            </Typography>
          </Box>
        </Modal>
      )}
    </>
  );
};

import { useDispatch, useSelector } from "react-redux";
import { BtnStyle, Td } from "../../assets/Styles/ListStyled";
import { addToCart } from "../AddToCart/cartSummarySlice";
import { removeFromWishList } from "./wishListSlice";

export const WishList = () => {
  const wishListData = useSelector((state) => state.addToWishList.wishList);
  const dispatch = useDispatch();
  return (
    <>
      <>
        <div>
          <h5>WishList Summary</h5>
          <table>
            <tr>
              <th>Product Name</th>
              <th>Price</th>

              <th>Move</th>
            </tr>
            {wishListData.map((item) => (
              <>
                <tr>
                  <Td>{item.product}</Td>

                  <Td>:{item.price * item.quantity}</Td>
                  <Td>
                    <BtnStyle
                      onClick={() => dispatch(removeFromWishList(item.id))}
                    >
                      Remove
                    </BtnStyle>
                  </Td>
                  <Td></Td>
                </tr>
              </>
            ))}
          </table>
        </div>
      </>
    </>
  );
};

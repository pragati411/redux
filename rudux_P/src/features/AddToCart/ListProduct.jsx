import {
  ListStyled,
  DivStyled,
  ProductDetail,
  MainContainer,
} from "../../assets/Styles/ListStyled";
import AddToWish from "../wishList/AddToWish";

import { PlusMinus } from "./PlusMinus";

export const ListProduct = ({ arr }) => {
  return (
    <>
      <MainContainer>
        {arr.map((item, i) => {
          return (
            <>
              <div key={i} style={{ width: "40%" }}>
                <ListStyled>
                  <ProductDetail>
                    {item.title}
                    <img src={item.image} width="150px" height="180px" />
                    <AddToWish
                      id={item.id}
                      title={item.title}
                      price={item.price}
                    />
                  </ProductDetail>
                  <DivStyled>
                    <PlusMinus
                      id={item.id}
                      title={item.title}
                      price={item.price}
                    />
                  </DivStyled>
                </ListStyled>
              </div>
            </>
          );
        })}
      </MainContainer>
    </>
  );
};

import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 70%;
  margin: 20px 0;
  justify-content: start;
`;

const CheckoutProductList = ({
  onQuantityChange,
  deductQuantity,
  inputChange,
  addedProducts,
  onDeleteProduct
}) => {
  return (
    <Container>
      {addedProducts.map((item, index) => {
        const addedProduct = addedProducts.find(
          addedItem => addedItem.id === item.id
        );
        const currQuantity = addedProduct ? addedProduct.quantity : 0;
        return (
          <CheckoutProduct
            key={index}
            item={item}
            onQuantityChange={onQuantityChange}
            deductQuantity={deductQuantity}
            inputChange={inputChange}
            addedProducts={addedProducts}
            currQuantity={currQuantity}
            onDeleteProduct={onDeleteProduct}
          />
        );
      })}
    </Container>
  );
};

export default CheckoutProductList;

import React from "react";
import Product from "./Product";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 20px 0;
  justify-content: center;
`;

const ProductList = ({
  products,
  onQuantityChange,
  deductQuantity,
  inputChange,
  addedProducts
}) => {
  return (
    <Container>
      {products.map((item, index) => {
        const addedProduct = addedProducts.find(
          addedItem => addedItem.id === item.id
        );
        const currQuantity = addedProduct ? addedProduct.quantity : 0;
        return (
          <Product
            key={index}
            item={item}
            onQuantityChange={onQuantityChange}
            deductQuantity={deductQuantity}
            inputChange={inputChange}
            addedProducts={addedProducts}
            currQuantity={currQuantity}
          />
        );
      })}
    </Container>
  );
};

export default ProductList;

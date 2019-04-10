import React from "react";
import CheckoutProductList from "../components/CheckoutProductList";
import { Link } from "react-router-dom";
import Form from "../components/Form";
import styled from "styled-components";
import { postUserCheckout } from "../api";

const BackBtn = styled.button`
  background-color: navy;
  color: white;
  font-size: 25px;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const EmptyMessage = styled.h1`
  font-size: 30px;
  color: #232323;
  margin-top: 10%;
`;

const TotalPrice = styled.p`
  color: brown;
  font-weight: bold;
  font-size: 25px;
  margin: 0;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 65%;
  justify-content: space-between;
`;

const Checkout = ({
  products,
  onQuantityChange,
  deductQuantity,
  inputChange,
  addedProducts,
  onDeleteProduct,
  totalPrice
}) => {
  const onSubmit = values => {
    const data = { addedProducts, ...values };
    console.log(data);
    return postUserCheckout(data);
  };

  return (
    <Container>
      {addedProducts.length > 0 ? (
        <CheckoutProductList
          onQuantityChange={onQuantityChange}
          deductQuantity={deductQuantity}
          inputChange={inputChange}
          addedProducts={addedProducts}
          onDeleteProduct={onDeleteProduct}
        />
      ) : (
        <EmptyMessage>
          Your shopping cart is empty, please add items to the cart.
        </EmptyMessage>
      )}
      <FooterContainer>
        <Link to="/">
          <BackBtn>Back</BackBtn>
        </Link>
        {totalPrice !== 0 ? <TotalPrice>Total: {totalPrice}</TotalPrice> : null}
      </FooterContainer>
      {addedProducts.length === 0 ? "" : <Form onSubmit={onSubmit} />}
    </Container>
  );
};

export default Checkout;

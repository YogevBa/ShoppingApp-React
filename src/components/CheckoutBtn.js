import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CartBtn = styled.button`
  border-radius: 50%;
  font-size: 45px;
  cursor: pointer;
  width: 75px;
  height: 75px;
`;

const StyledLink = styled(Link)`
  position: fixed;
  border: 3px solid #2a9cda;
  border-radius: 50%;
  right: 30px;
  top: 70px;
  margin-top: 25px;
  transition: 0.3s;
  :hover {
    border-color: lightgreen;
  }
`;

const CheckoutBtn = () => (
  <StyledLink to="/checkout">
    <CartBtn>
      <span aria-label="img" role="img">
        🛒
      </span>
    </CartBtn>
  </StyledLink>
);

export default CheckoutBtn;

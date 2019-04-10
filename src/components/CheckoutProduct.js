import React from "react";
import styled from "styled-components";

const Item = styled.div`
  border: 1px solid black;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: calc(5% / 3);
`;
const Image = styled.div`
  font-size: 80px;
  width: 25%;
  display: flex;
  justify-content: center;
`;
const AddBtn = styled.button`
  font-size: 15px;
  background-color: #2a9cda;
  color: white;
`;

const RemoveBtn = styled.button`
  font-size: 25px;
  background-color: red;
  color: white;
  position: relative;
  left: 40px;
`;

const ReduceBtn = styled.button`
  font-size: 15px;
  background-color: #2a9cda;
  color: white;
`;
const Input = styled.input`
  width: 25%;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const InfoContainer = styled.div`
  font-family: serif;
  width: 25%;
`;

const Description = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: slategray;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 25px;
  font-family: serif;
  color: brown;
`;

const Price = styled.h1`
  font-weight: bold;
  font-size: 25px;
  font-family: serif;
  color: brown;
  width: 25%;
  margin: 0 25px;
`;

const CheckoutProduct = ({
  item,
  onQuantityChange,
  deductQuantity,
  inputChange,
  currQuantity,
  onDeleteProduct
}) => {
  const handleIncrement = () => {
    const quantity = 1;
    return onQuantityChange({
      ...item,
      quantity
    });
  };

  const handleDeduct = () => {
    const quantity = -1;
    if (currQuantity === 0) {
      return;
    }
    return onQuantityChange({
      ...item,
      quantity
    });
  };

  const handleInput = e => {
    const value = e.target.value;
    const quantity = value ? parseInt(value) : "";
    return inputChange({
      ...item,
      quantity
    });
  };

  return (
    <Item>
      <Image>{item.img}</Image>
      <InfoContainer>
        <Title>{item.title}</Title>
        <Description>{item.desc}</Description>
      </InfoContainer>
      <Price>Price: {item.price}</Price>
      <ButtonContainer>
        <AddBtn onClick={handleIncrement}>+</AddBtn>
        <Input
          type="number"
          min={0}
          value={currQuantity}
          onChange={e => handleInput(e)}
        />
        <ReduceBtn onClick={handleDeduct}>-</ReduceBtn>
        <RemoveBtn onClick={() => onDeleteProduct(item)}>X</RemoveBtn>
      </ButtonContainer>
    </Item>
  );
};

export default CheckoutProduct;

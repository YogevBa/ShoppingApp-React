import React from "react";
import styled from "styled-components";

const Item = styled.div`
  border: 1px solid black;
  padding: 10px;
  width: calc(70% / 3);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  margin: calc(5% / 3);
`;
const Image = styled.div`
  font-size: 150px;
`;
const AddBtn = styled.button`
  font-size: 15px;
  background-color: #2a9cda;
  color: white;
`;
const ReduceBtn = styled.button`
  font-size: 15px;
  background-color: #2a9cda;
  color: white;
`;
const Input = styled.input`
  width: 50%;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`;

const Product = ({
  item,
  onQuantityChange,
  deductQuantity,
  inputChange,
  currQuantity
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
      <p>{item.title}</p>
      <Image>{item.img}</Image>
      <p>Description: {item.desc}</p>
      <p>Price: {item.price}</p>
      <ButtonContainer>
        <AddBtn onClick={handleIncrement}>+</AddBtn>
        <Input
          type="number"
          min={0}
          value={currQuantity}
          onChange={e => handleInput(e)}
        />
        <ReduceBtn onClick={handleDeduct}>-</ReduceBtn>
      </ButtonContainer>
    </Item>
  );
};

export default Product;

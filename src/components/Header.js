import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  width: 100vw;
  height: auto;
  background-color: #232323;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 25px;
  color: white;
  font-weight: bold;
`;

const Header = () => {
  return (
    <Nav>
      <Title>Shopping Application</Title>
    </Nav>
  );
};

export default Header;

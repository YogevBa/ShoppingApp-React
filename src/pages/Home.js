import React, { Fragment } from "react";
import ProductList from "../components/ProductList";
import CheckoutBtn from "../components/CheckoutBtn";

const Home = ({
  products,
  onQuantityChange,
  deductQuantity,
  inputChange,
  addedProducts
}) => {
  return (
    <Fragment>
      <ProductList
        products={products}
        onQuantityChange={onQuantityChange}
        deductQuantity={deductQuantity}
        inputChange={inputChange}
        addedProducts={addedProducts}
      />
      <CheckoutBtn />
    </Fragment>
  );
};

export default Home;

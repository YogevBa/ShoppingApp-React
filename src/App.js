import React, { Component } from "react";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import products from "./products.js";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

class App extends Component {
  state = {
    products: products,
    addedProducts: [],
    totalPrice: 0
  };

  calculateTotalSum = items =>
    items.reduce((acc, item) => {
      if (item.quantity) {
        return acc + item.quantity * item.price;
      }

      return acc;
    }, 0);

  handleQuantityChange = item => {
    const itemExist = this.state.addedProducts.find(
      currItem => currItem.id === item.id
    );

    this.setState(prevState => {
      if (!itemExist) {
        const newProducts = [...prevState.addedProducts, item];
        return {
          addedProducts: newProducts,
          totalPrice: this.calculateTotalSum(newProducts)
        };
      }

      const newAddedProducts = prevState.addedProducts.map(currItem => {
        if (currItem.id === item.id) {
          const currQuantity = currItem.quantity + item.quantity;

          return {
            ...item,
            quantity: currQuantity
          };
        }
        return currItem;
      });

      return {
        addedProducts: newAddedProducts,
        totalPrice: this.calculateTotalSum(newAddedProducts)
      };
    });
  };

  onInputChange = item => {
    const itemExist = this.state.addedProducts.find(
      currItem => currItem.id === item.id
    );

    this.setState(prevState => {
      if (!itemExist) {
        const newProducts = [...prevState.addedProducts, item];
        return {
          addedProducts: newProducts,
          totalPrice: this.calculateTotalSum(newProducts)
        };
      }

      const newAddedProducts = prevState.addedProducts.map(currItem => {
        if (currItem.id === item.id) {
          return {
            ...item,
            quantity: item.quantity
          };
        }
        return currItem;
      });

      return {
        addedProducts: newAddedProducts,
        totalPrice: this.calculateTotalSum(newAddedProducts)
      };
    });
  };

  onDeleteProduct = item => {
    const newList = this.state.addedProducts.filter(itm => itm.id !== item.id);
    this.setState(prevState => {
      return {
        addedProducts: newList,
        totalPrice: this.calculateTotalSum(newList)
      };
    });
  };

  render() {
    return (
      <Container>
        <Header />
        <Route
          exact
          path="/"
          render={() => (
            <Home
              products={this.state.products}
              onQuantityChange={this.handleQuantityChange}
              inputChange={this.onInputChange}
              addedProducts={this.state.addedProducts}
            />
          )}
        />
        <Route
          exact
          path="/checkout"
          render={() => (
            <Checkout
              products={this.state.products}
              onQuantityChange={this.handleQuantityChange}
              deductQuantity={this.onDeductProduct}
              inputChange={this.onInputChange}
              addedProducts={this.state.addedProducts}
              onDeleteProduct={this.onDeleteProduct}
              totalPrice={this.state.totalPrice}
            />
          )}
        />
      </Container>
    );
  }
}

export default App;

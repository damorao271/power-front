import React, { Component } from "react";
import { getProducts } from "../services/productServices";
class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const { data } = await getProducts();
    const products = { ...data };
    this.setState({ products });
    console.log(products);
  }

  render() {
    return (
      <div className="home-container">
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;

import React from "react";
import "./App.css";
import Home from "./components/home";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/navbar";
import ShowCase from "../components/showcase";
import Products from "../components/product";
import Footer from "../components/footer";
import AdminLogin from "../Admin/Views/auth";
const Home = ({ cart, setCart, setCurrent }) => {
  return (
    <div className="main">
      <div className="main p-2 bg-warning">
        <div className="main-header container">
          <NavBar cart={cart} setCart={setCart} />
        </div>
      </div>
      <div className="inner-wrapper dHeight ">
        <div className="slider">
          <ShowCase />
        </div>
        <div className="productList mt-5">
          <Products cart={cart} setCart={setCart} setCurrent={setCurrent} />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;

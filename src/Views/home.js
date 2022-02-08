import React from "react";
import NavBar from "../components/navbar";
import ShowCase from "../components/showcase";
import Products from "../components/product";
import Footer from "../components/footer";
const Home = ({ cart, setCart, setCurrent }) => {
  return (
    <div className="main">
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

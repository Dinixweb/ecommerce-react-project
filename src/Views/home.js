import React from "react";
import NavBar from "../components/navbar";
import ShowCase from "../components/showcase";
import Products from "../components/product";
import Footer from "../components/footer";
const Home = () => {
  return (
    <div className="main">
      <div className="inner-wrapper dHeight ">
        <div className="main p-2 bg-warning">
          <div className="main-header container">
            <NavBar />
          </div>
        </div>
        <div className="slider">
          <ShowCase />
        </div>
        <div className="productList mt-5">
          <Products />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;

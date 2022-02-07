import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const SingleProduct = () => {
  return (
    <div className="inner-wrapper dHeight ">
      <div className="main p-2 bg-warning">
        <div className="main-header container">
          <NavBar />
        </div>
      </div>
      <div className="main">
        <p>Welcome to Shop Page</p>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
export default SingleProduct;

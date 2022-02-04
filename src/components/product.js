import React, { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import ProductImage from "../Assets/products/oxford.jpg";
import ProductImage2 from "../Assets/products/0_0061_img_2637_1.jpg";
import ProductImage3 from "../Assets/products/0_0107_img_0040.jpg";

const Products = () => {
  const [hoverProduct, setHoverProduct] = useState(false);
  const onEnter = () => {
    setHoverProduct(true);
    //? setHoverProduct(false) : setHoverProduct(true);
  };
  const onExit = () => {
    setHoverProduct(false);
    //? setHoverProduct(true) : setHoverProduct(false);
  };
  const amount = 8000;
  return (
    <div className="main container">
      <div className="product d-flex gap-5 ">
        {/* product list */}
        <div
          className={
            hoverProduct ? "card mb-5 border-0 shadow-lg" : "card mb-5 "
          }
          onMouseEnter={onEnter}
          onMouseLeave={onExit}
        >
          <img src={ProductImage} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <div className="card-title">Gaming Mouse</div>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div className="card-footer d-flex ">
            <div className="row d-flex justify-content-between ">
              <div className="col ">
                <p className="m-1">
                  <FaDollarSign />
                  {amount}
                </p>
              </div>
              <div className="col-6 d-flex">
                <button className="btn btn-primary m-1">-</button>
                <input
                  type="number"
                  className="form-control m-1"
                  width={100}
                  name=""
                  id=""
                />
                <button className="btn btn-primary m-1">+</button>
              </div>
              <div className="col ">
                <button className="btn btn-primary m-1">Buy</button>
              </div>
            </div>
          </div>
        </div>
        {/* product 2 */}
        <div className="card mb-5">
          <img src={ProductImage2} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <div className="card-title">Gaming Mouse</div>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div className="card-footer d-flex ">
            <div className="row d-flex justify-content-between ">
              <div className="col ">
                <p className="m-1">
                  <FaDollarSign />
                  {amount}
                </p>
              </div>
              <div className="col-6 d-flex">
                <button className="btn btn-primary m-1">-</button>
                <input
                  type="number"
                  className="form-control m-1"
                  name=""
                  id=""
                />
                <button className="btn btn-primary m-1">+</button>
              </div>
              <div className="col ">
                <button className="btn btn-primary m-1">Buy</button>
              </div>
            </div>
          </div>
        </div>
        {/* product 3 */}
        <div className="card mb-5">
          <img src={ProductImage3} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <div className="card-title">Gaming Mouse</div>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div className="card-footer d-flex ">
            <div className="row d-flex justify-content-between ">
              <div className="col ">
                <p className="m-1">
                  <FaDollarSign />
                  {amount}
                </p>
              </div>
              <div className="col-6 d-flex">
                <button className="btn btn-primary m-1">-</button>
                <input
                  type="number"
                  className="form-control m-1"
                  name=""
                  id=""
                />
                <button className="btn btn-primary m-1">+</button>
              </div>
              <div className="col ">
                <button className="btn btn-primary m-1">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

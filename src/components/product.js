import React, { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
// import ProductImage from "../Assets/products/oxford.jpg";
// import ProductImage2 from "../Assets/products/0_0061_img_2637_1.jpg";
// import ProductImage3 from "../Assets/products/0_0107_img_0040.jpg";

const Products = () => {
  const products = [
    {
      productId: "1",
      productName: "J. F Wooven Tassel - Black",
      productDesciption: "men leather shoe",
      price: "20,300.00",
      defaultQuantity: 1,
      imageUrl: require("../Assets/products/0_0018_img_2792_1.jpg"),
    },
    {
      productId: "2",
      productName: "Oxford Shoes",
      productDesciption: "men leather shoe",
      price: "4,000.00",
      defaultQuantity: 1,
      imageUrl: require("../Assets/products/0_0061_img_2637_1.jpg"),
    },
    {
      productId: "3",
      productName: "Sebago Shoe - Black White",
      productDesciption: "men leather shoe",
      price: "12,000.00",
      defaultQuantity: 1,
      imageUrl: require("../Assets/products/0_0018_img_2689_5.jpg"),
    },
    {
      productId: "4",
      productName: "GG Middle strap slippers | Black",
      productDesciption: "leather slipper New without box",
      price: "28,000.00",
      defaultQuantity: 1,
      imageUrl: require("../Assets/products/ajebo_0024_img_0813.jpg"),
    },
    {
      productId: "4",
      productName: "GG Middle strap slippers | Black",
      productDesciption: "leather slipper New without box",
      price: "28,000.00",
      defaultQuantity: 1,
      imageUrl: require("../Assets/products/ajebo_0024_img_0813.jpg"),
    },
    {
      productId: "4",
      productName: "GG Middle strap slippers | Black",
      productDesciption: "leather slipper New without box",
      price: "28,000.00",
      defaultQuantity: 1,
      imageUrl: require("../Assets/products/ajebo_0024_img_0813.jpg"),
    },
    {
      productId: "4",
      productName: "GG Middle strap slippers | Black",
      productDesciption: "leather slipper New without box",
      price: "28,000.00",
      defaultQuantity: 1,
      imageUrl: require("../Assets/products/ajebo_0024_img_0813.jpg"),
    },
    {
      productId: "4",
      productName: "GG Middle strap slippers | Black",
      productDesciption: "leather slipper New without box",
      price: "28,000.00",
      defaultQuantity: 1,
      imageUrl: require("../Assets/products/ajebo_0024_img_0813.jpg"),
    },
  ];
  const [hoverProduct, setHoverProduct] = useState(false);
  const onEnter = () => {
    setHoverProduct(true);

    //? setHoverProduct(false) : setHoverProduct(true);
  };
  const onExit = () => {
    setHoverProduct(false);
    //? setHoverProduct(true) : setHoverProduct(false);
  };
  const addItem = (item) => {
    console.log(item);
  };

  return (
    <div className="main container">
      <div className="product d-flex gap-3 flex-lg-fill flex-wrap">
        {products.map((e) => {
          /* product list */
          return (
            <div
              key={e.productId}
              className={
                hoverProduct ? "card mb-5 border-0 shadow-lg" : "card mb-5 "
              }
              onMouseEnter={onEnter}
              onMouseLeave={onExit}
            >
              <img src={e.imageUrl} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <div className="card-title">{e.productName}</div>
                <p>{e.productDesciption}</p>
                <p>
                  <div className="col">
                    <p className="m-1 bg-danger text-white">
                      <FaDollarSign />
                      {e.price}
                    </p>
                  </div>
                </p>
              </div>
              <div className="card-footer d-flex justify-content-evenly">
                <div className="row d-flex justify-content-evenly">
                  <div className="col">
                    <button className="btn btn-warning m-1">
                      <FaCartPlus />
                    </button>
                  </div>
                  <div className="col-6 d-flex">
                    <button className="btn btn-warning m-1">-</button>
                    <input
                      type="text"
                      className="form-control m-1"
                      width={100}
                      name="item"
                      id=""
                    />
                    <button
                      className="btn btn-warning m-1"
                      onClick={(item) => addItem(item)}
                    >
                      +
                    </button>
                  </div>
                  <div className="col">
                    <button className="btn btn-warning m-1">
                      <FaShare />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {/* product*/}
      </div>
    </div>
  );
};

export default Products;

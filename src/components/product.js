import React, { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import Badge from "@material-ui/core/Badge";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
// import SingleProduct from "../Views/singleProductView";

// import ProductImage from "../Assets/products/oxford.jpg";
// import ProductImage2 from "../Assets/products/0_0061_img_2637_1.jpg";
// import ProductImage3 from "../Assets/products/0_0107_img_0040.jpg";

const Products = ({ cart, setCart, setCurrent }) => {
  const navigate = useNavigate();
  const products = [
    {
      productId: "1",
      productName: "J. F Wooven Tassel - Black",
      productDesciption: "men leather shoe",
      price: 20300,
      defaultQuantity: 1,
      imageUrl: require("../Assets/products/0_0018_img_2792_1.jpg"),
    },
    {
      productId: "2",
      productName: "Oxford Shoes",
      productDesciption: "men leather shoe",
      price: 4000,
      defaultQuantity: 1,
      imageUrl: require("../Assets/products/0_0061_img_2637_1.jpg"),
    },
    {
      productId: "3",
      productName: "Sebago Shoe - Black White",
      productDesciption: "men leather shoe",
      price: 12000,
      defaultQuantity: 1,
      imageUrl: require("../Assets/products/0_0018_img_2689_5.jpg"),
    },
    {
      productId: "4",
      productName: "Jeep Buluo Plain Bag | Black",
      productDesciption: "leather slipper New without box",
      price: 28000,
      defaultQuantity: 1,
      imageUrl: require("../Assets/products/bag.jpg"),
    },
    {
      productId: "5",
      productName: "GG Middle strap slippers | Black",
      productDesciption: "leather slipper New without box",
      price: 28000,
      defaultQuantity: 1,
      imageUrl: require("../Assets/products/ajebo_0024_img_0813.jpg"),
    },
    {
      productId: "6",
      productName:
        "Casio Edifice Gold Dial |Silver & Gold Bracelet Chronograph Watch",
      productDesciption: "leather slipper New without box",
      price: 45000,
      defaultQuantity: 1,
      imageUrl: require("../Assets/products/w1.jpg"),
    },
    {
      productId: "7",
      productName: "Umbro Classic White Trainers | White",
      productDesciption: "leather slipper New without box",
      price: 30000,
      defaultQuantity: 1,
      imageUrl: require("../Assets/products/umbro_ccupshoesu18g7009_1575651042umfm0192_096_1.jpg"),
    },
    {
      productId: "8",
      productName: "Nike Tiempo Vetta | Black & Gold",
      productDesciption: "leather slipper New without box",
      price: 18000,
      defaultQuantity: 1,
      imageUrl: require("../Assets/products/nike-tiempo-vetta-17-p94616-279622_medium.jpg"),
    },
  ];
  const [hoverProduct, setHoverProduct] = useState(false);

  const [itemCount, setItemCount] = React.useState(1);

  let [num, setNum] = useState(0);

  let incNum = (e) => {
    e.preventDefault();
    if (num < 50) {
      setNum(Number(num) + 1);
    }
  };

  let decNum = (e) => {
    e.preventDefault();
    if (num > 0) {
      setNum(num - 1);
    }
  };

  let enteredValue = 1;
  const handleChange = (event) => {
    event.preventDefault();
    enteredValue = event.target.value;
    setNum = event.target.value;
  };
  const handleSubmit = (e) => {
    setCart([...cart, e]);
  };
  const quickView = (e) => {
    setCurrent(e);
    navigate("/singleProductView");
  };
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="main container">
      <div className="product d-flex gap-3 flex-lg-fill flex-wrap">
        {products.map((e) => {
          /* product list */
          return (
            <div key={e.productId} className={"card mb-5 border"}>
              <img src={e.imageUrl} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <div className="card-title">{e.productName}</div>
                <p>{e.productDesciption}</p>

                <div className="col">
                  <p className="m-1 bg-danger text-white">
                    <Badge />
                    {formatter.format(e.price)}
                  </p>
                </div>
                {/* <Link to="singleProductView" title={e.productName}> */}
                <div className="box stack-top" onClick={() => quickView(e)}>
                  {" "}
                  Quick View
                </div>
                {/* </Link> */}
              </div>
              <div className="card-footer d-flex justify-content-evenly">
                <div className="row d-flex justify-content-evenly ">
                  <div className="d-flex justify-content-evenly">
                    <div className="col-2">
                      <button className="btn btn-warning m-1">
                        <FaShare />
                      </button>
                    </div>
                    <div className="col-7 d-flex"></div>
                    <div className="col-2">
                      <button
                        className="btn btn-warning m-1"
                        onClick={() => handleSubmit(e)}
                      >
                        <FaCartPlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;

import React, { useState, useEffect } from "react";
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
      shippingCost: 21,
      StockLevel: 12,
      size: ["40 |", "42 |", "45 |"],
      imageUrl: require("../Assets/products/0_0018_img_2792_1.jpg"),
    },
    {
      productId: "2",
      productName: "Oxford Shoes",
      productDesciption: "men leather shoe",
      price: 4000,
      defaultQuantity: 1,
      shippingCost: 12,
      StockLevel: 34,
      size: ["42 |", "43 |", "46 |"],
      imageUrl: require("../Assets/products/0_0061_img_2637_1.jpg"),
    },
    {
      productId: "3",
      productName: "Sebago Shoe - Black White",
      productDesciption: "men leather shoe",
      price: 12000,
      defaultQuantity: 1,
      shippingCost: 25,
      StockLevel: 9,
      size: ["41 |", "42 |", "44 |"],
      imageUrl: require("../Assets/products/0_0018_img_2689_5.jpg"),
    },
    {
      productId: "4",
      productName: "Jeep Buluo Plain Bag | Black",
      productDesciption: "leather slipper New without box",
      price: 28000,
      defaultQuantity: 1,
      shippingCost: 35,
      StockLevel: 45,
      imageUrl: require("../Assets/products/bag.jpg"),
    },
    {
      productId: "5",
      productName: "GG Middle strap slippers | Black",
      productDesciption: "leather slipper New without box",
      price: 28000,
      defaultQuantity: 1,
      shippingCost: 40,
      StockLevel: 19,
      size: ["31 |", "32 |", "34 |", "45"],
      imageUrl: require("../Assets/products/ajebo_0024_img_0813.jpg"),
    },
    {
      productId: "6",
      productName:
        "Casio Edifice Gold Dial |Silver & Gold Bracelet Chronograph Watch",
      productDesciption: "leather slipper New without box",
      price: 45000,
      defaultQuantity: 1,
      shippingCost: 10,
      StockLevel: 21,
      imageUrl: require("../Assets/products/w1.jpg"),
    },
    {
      productId: "7",
      productName: "Umbro Classic White Trainers | White",
      productDesciption: "leather slipper New without box",
      price: 30000,
      defaultQuantity: 1,
      shippingCost: 50,
      StockLevel: 50,
      size: ["41 |", "42 |", "44 |"],
      imageUrl: require("../Assets/products/umbro_ccupshoesu18g7009_1575651042umfm0192_096_1.jpg"),
    },
    {
      productId: "8",
      productName: "Nike Tiempo Vetta | Black & Gold",
      productDesciption: "leather slipper New without box",
      price: 18000,
      defaultQuantity: 1,
      shippingCost: 30,
      StockLevel: 18,
      size: ["42 |", "43 |", "44 |"],
      imageUrl: require("../Assets/products/nike-tiempo-vetta-17-p94616-279622_medium.jpg"),
    },
  ];
  const [hoverProduct, setHoverProduct] = useState(false);

  const [itemCount, setItemCount] = React.useState(1);

  useEffect(() => {
    const getProducts = async () => {
      const mainProducts = await getProduct();
      products.push(mainProducts);
    };
    getProducts();
  }, []);

  const getProduct = async () => {
    const res = await fetch("http://localhost:9000/products");
    const resData = await res.json();
  };
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
  const [qty, setQty] = useState(0);

  const handleSubmit = (e) => {
    cart.defaultQuantity = qty;
    let found;
    cart.forEach((a) => {
      if (a.productId === e.productId) {
        found = a;
      }
    });

    if (found) {
      found.defaultQuantity =
        parseInt(found.defaultQuantity) + parseInt(e.defaultQuantity);
      // setCart([...cart, current]);
    } else {
      const item = JSON.parse(JSON.stringify(e));
      setCart([...cart, item]);
    }
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

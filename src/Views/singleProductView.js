import React, { useState } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const SingleProduct = ({ current, cart, setCart, setCurrent }) => {
  const [qty, setQty] = useState(0);
  const handleSubmit = () => {
    current.defaultQuantity = qty;
    let found;
    cart.forEach((a) => {
      if (a.productId === current.productId) {
        found = a;
      }
    });
    if (found) {
      found.defaultQuantity =
        parseInt(found.defaultQuantity) + parseInt(current.defaultQuantity);

      // setCart([...cart, current]);
    } else {
      const item = JSON.parse(JSON.stringify(current));
      setCart([...cart, item]);
    }
  };
  const productImage = current.imageUrl;
  const productName = current.productName;
  const productPrice = current.price;
  const productDesc = current.productDesciption;
  const StockLevel = current.StockLevel;
  const size = current.size;
  const [quantity, setQuantity] = useState(true);

  const addItem = (value) => {
    // let qty = value.target.value;
    if (value.target.value < 1) {
      setQuantity(true);
    } else {
      setQuantity(false);
    }
  };
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="inner-wrapper dHeight ">
      <div className="main p-2 bg-warning">
        <div className="main-header container">
          <NavBar cart={cart} setCart={setCart} />
        </div>
      </div>
      <div className="container d-flex">
        <div className="productImage m-4 border border-2 border-grey rounded-3">
          <img src={productImage} alt="" />
        </div>

        <div className="productContent m-4 d-flex flex-column text-start">
          <div className="productName fw-bolder fs-2 mt-5 bg-light p-1">
            {productName}
          </div>
          <div className="productPrice fw-bolder fs-2 mt-2 text-danger">
            {formatter.format(productPrice)}
          </div>
          <div className="productDesc">{productDesc}</div>
          <div className="stockLevel p-2  mt-3 fs-4">
            StockLevel: {StockLevel}
          </div>
          <div className="Size p-2 mt-2 fs-4">Size: {size}</div>
          <div className="div p-2 mt-2">
            <div className="row">
              <div className="col-md-3   fs-4">Quantity</div>
              <div className="col-md-3">
                <input
                  type="text"
                  value={qty}
                  className=" form-control"
                  onChange={(event) => setQty(event.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="AddToCart p-2 mt-3 fs-5">
            <button
              className="btn btn-warning"
              disabled={!qty}
              onClick={handleSubmit}
            >
              Add To Cart
            </button>
          </div>
          <div className="moreInfoWrapper">
            <div className="moreInformation">
              <h2 className="mt-5 fs-4 ">Other Information</h2>
              <p className="border border-1 border-info p-2 rounded-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque provident, delectus cumque labore dolores quidem
                dignissimos, inventore perferendis laudantium dicta maiores
                laboriosam quae numquam deleniti a iure voluptates rem mollitia?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
export default SingleProduct;

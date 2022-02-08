import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const SingleProduct = ({ current, cart, setCart, setCurrent }) => {
  let addProduct = [];
  const handleSubmit = (current) => {
    setCart([...cart, current]);
    addProduct.push(current);
  };
  const productImage = current.imageUrl;
  const productName = current.productName;
  const productPrice = current.price;
  const productDesc = current.productDesciption;
  return (
    <div className="inner-wrapper dHeight ">
      <div className="container d-flex">
        <div className="productImage m-4 border border-2 border-grey rounded-3">
          <img src={productImage} alt="" />
        </div>

        <div className="productContent m-4 d-flex flex-column text-start">
          <div className="productName fw-bolder fs-2 mt-5 bg-light p-1">
            {productName}
          </div>
          <div className="productPrice fw-bolder fs-2 mt-2 text-danger">
            ₦{productPrice}
          </div>
          <div className="productDesc">{productDesc}</div>
          <div className="stockLevel p-2  mt-3 fs-3">StockLevel:</div>
          <div className="Size p-2 mt-3 fs-5">Size:</div>
          <div className="AddToCart p-2 mt-3 fs-5">
            <button
              className="btn btn-warning"
              onClick={() => handleSubmit(current)}
            >
              Add To Cart
            </button>
          </div>
          <div className="moreInfoWrapper">
            <div className="moreInformation">
              <h2 className="mt-5 fs-4 ">Other Information</h2>
              <p className="border border-1 border-info p-2">
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

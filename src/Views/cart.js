import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const Cart = ({ current, cart, setCart, setCurrent }) => {
  console.log(cart);

  const subTotal = cart.reduce((e, i) => {
    return e + i.price;
  }, 0);
  let newsubtotal = cart.map((e) => {
    return e.defaultQuantity * e.price;
  });

  const finalSub = newsubtotal.reduce((i, e) => {
    return i + e;
  }, 0);
  console.log(finalSub);
  const shipping = 70;

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="inner-wrapper dHeight ">
      <div className="infoHeader container mt-5 mb-4 bg-dark p-2 text-white fs-2">
        Cart Information
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Description</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((e, i) => (
                  <tr>
                    <th scope="row">{i + 1}</th>
                    <td align="left">{e.productName}</td>
                    <td>{e.price}</td>
                    <td>{e.productDesciption}</td>
                    <td>{e.defaultQuantity}</td>
                    <td>
                      {formatter.format(
                        parseFloat(e.price) * e.defaultQuantity
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="col-md-3">
            <div className="payDetails border border-2 border-grey">
              {" "}
              <h3 className="fs-5">Cart Total</h3>
              <hr />
              <table>
                <tr>
                  <td width={300}>sub total</td>
                  <td width={300} className="fs-5">
                    {formatter.format(finalSub)}
                  </td>
                </tr>
                <tr>
                  <td width={300}>shipping</td>
                  <td width={300} className="fs-5">
                    {formatter.format(shipping)}
                  </td>
                </tr>
                <tr>
                  <td width={300}>grand total</td>
                  <td width={300} className="fs-3">
                    {formatter.format(finalSub + shipping)}
                  </td>
                </tr>
                <div className="row mt-4">
                  <div className="col-md-10">Payment on delivery</div>
                  <div className="col-md-2">
                    <input className="ms-5" type="radio" name="" id="" />
                  </div>
                </div>
              </table>
              <button className="btn btn-warning mt-5 mb-5">Pay Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;

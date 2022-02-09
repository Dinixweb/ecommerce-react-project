import React, { useState } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { FaTimes } from "react-icons/fa";

const Cart = ({ current, cart, setCart, setCurrent, onDelete }) => {
  const subTotal = cart.reduce((e, i) => {
    return e + i.price;
  }, 0);
  let newsubtotal = cart.map((e) => {
    return e.defaultQuantity * e.price;
  });
  const [oldQty, setOldQty] = useState(cart.defaultQuantity);

  const newQty = () => {
    setOldQty(cart.defaultQuantity);
  };
  const finalSub = newsubtotal.reduce((i, e) => {
    return i + e;
  }, 0);
  let shipping = [0];
  if (cart.length > 0) {
    const shippingCost = cart.forEach((e) => {
      return shipping.push(e.shippingCost);
    });
  }
  shipping = shipping.reduce((a, b) => a + b);
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const removeItem = (id) => {
    cart = cart.filter((i) => i !== id);
  };
  return (
    <div className="inner-wrapper dHeight ">
      <div className="main p-2 bg-warning">
        <div className="main-header container">
          <NavBar cart={cart} setCart={setCart} />
        </div>
      </div>
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
                    <td className="col-md-1">
                      <input
                        type="text"
                        className="form-control"
                        onChange={newQty}
                        value={e.defaultQuantity}
                      />
                    </td>
                    <td>
                      {formatter.format(
                        parseFloat(e.price) * e.defaultQuantity
                      )}
                    </td>
                    <td>
                      <FaTimes
                        cursor="pointer"
                        color="red"
                        onClick={() => onDelete(e.productId)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="col-md-5">
            <div className="payDetails border border-2 border-grey">
              {" "}
              <h3 className="fs-5">Cart Total</h3>
              <hr />
              <table>
                <tbody>
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
                </tbody>
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

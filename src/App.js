import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "../src/Views/shop";
import Home from "../src/Views/home";
import AdminLogin from "./Admin/Views/auth";
import { useState } from "react";
import SingleProduct from "./Views/singleProductView";
import Cart from "./Views/cart";
import NavBar from "./components/navbar";

const App = () => {
  const [cart, setCart] = useState([]);
  const [current, setCurrent] = useState({});
  const removeItem = (id) => {
    setCart(cart.filter((i) => i.productId !== id));
  };
  return (
    <div className="App">
      <Router>
        <div className="main p-2 bg-warning">
          <div className="main-header container">
            <NavBar cart={cart} setCart={setCart} />
          </div>
        </div>
        <Routes>
          <Route
            path="singleProductView"
            element={
              <SingleProduct
                current={current}
                setCurrent={setCurrent}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} onDelete={removeItem} />}
          />
          <Route path="/auth" element={<AdminLogin />} />
          <Route
            path="/"
            element={
              <Home cart={cart} setCart={setCart} setCurrent={setCurrent} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

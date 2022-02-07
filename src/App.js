import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "../src/Views/shop";
import Home from "../src/Views/home";
import AdminLogin from "./Admin/Views/auth";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState([]);
  console.log(cart);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/auth" element={<AdminLogin />} />
          <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

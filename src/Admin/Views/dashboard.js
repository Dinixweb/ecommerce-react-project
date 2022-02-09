import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import ViewProducts from "../Components/viewProducts";

const AdminDasboard = ({ cart, setCart, setCurrent }) => {
  const Menu = [
    { title: "Dashboard", id: 1 },
    { title: "Add Product", id: 2 },
    { title: "View Products", id: 3 },
    { title: "View Order", id: 4 },
  ];

  const navigate = useNavigate();
  const viewPage = (id) => {
    console.log(cart);
    console.log(id);
    switch (id) {
      case 1:
    }
  };
  return (
    <div className="main">
      <div className="row gx-0">
        <div className="col-sm-2 bg-warning vh-100 ">
          <div className="title fs-3 mb-5">ISHOP</div>
          <nav className="mt-5">
            <ul>
              {Menu.map((e) => {
                return (
                  <li
                    key={e.id}
                    className="dash"
                    onClick={() => viewPage(e.id)}
                  >
                    {e.title}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="col-md-10">
          <div className="row-lg-12 topbar">menu</div>
          <div className="content-wrapper h-100 d-flex justify-content-center align-items-center">
            <ViewProducts cart={cart} setCart={setCart} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminDasboard;

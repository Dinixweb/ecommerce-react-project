import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

const AdminLogin = ({ cart, setCart, setCurrent }) => {
  const navigate = useNavigate();

  const login = (cart) => {
    //setCart(cart);
    navigate("/dashboard");
  };

  const iShopImage = require("../../Admin/Assets/bg.png");

  return (
    <div className="main vh-100 ">
      <div className="row vh-100">
        <div className="col-md-6 bg-warning d-flex align-items-center justify-content-center">
          <div className="border p-5">
            <div className="row d-flex justify-content-center">
              <div className="col-sm-12 ">
                <label className="fs-5 m-2">Username</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row d-flex justify-content-center  mt-3">
              <div className="col-sm-12">
                <label className="fs-5 m-2"> Password</label>
                <input type="password" className="form-control" />
              </div>
            </div>
            <button
              className="btn btn-success mt-5"
              onClick={() => login(cart)}
            >
              Login{" "}
            </button>
          </div>
        </div>
        <div className="col-md-6 p-5 bg-dark d-flex justify-content-center flex-column align-items-center">
          <img src={iShopImage} className="" alt="" />
          <div className="title text-white fs-1 fw-bolder mt-3">I-SHOP</div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

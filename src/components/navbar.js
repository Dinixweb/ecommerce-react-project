import React from "react";
import { FaUser } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

const NavBar = ({ cart, setCart }) => {
  const navigate = useNavigate();
  const openCart = () => {
    navigate("/cart");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          iSHOP
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-evenly"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Shop
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
            <div className="cart d-flex">
              <i className="m-2 mCart" onClick={openCart}>
                <Badge color="secondary" badgeContent={cart.length}>
                  <ShoppingCartIcon />{" "}
                </Badge>
              </i>
              <i className=" m-2"></i>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;

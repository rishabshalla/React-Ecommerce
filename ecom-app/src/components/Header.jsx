import React from "react";
import { data } from "./Data";
import { Link } from "react-router-dom";
// import "../App.css";

function Header() {
  //   console.log(data);
  return (
    <>
      <div className="header">
        <div className="left">
          <div className="logo-name"></div>
          <div className="navbar">
            <Link to="/home" className="link ">
              Home
            </Link>
            <Link to="/shop" className="link ">
              shop
            </Link>
            <Link to="/favorites" className="link ">
              favorites
            </Link>
            <Link to="/orders" className="link ">
              orders
            </Link>
            <Link to="/contact" className="link ">
              contact
            </Link>
          </div>
        </div>
        <div className="right">
          <div>
            <Link to="/profile" className="link ">
              Profile
            </Link>
            <Link to="/cart" className="link ">
              Cart
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

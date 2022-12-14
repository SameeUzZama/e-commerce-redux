import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="Navbar">
      <Link className="link1" to="/">
        Redux App
      </Link>
      <input type="text" />
      <button className="search">Search</button>
      <Link className="link2" to="/cart">
        Cart
      </Link>
    </div>
  );
};

export default Navigation;

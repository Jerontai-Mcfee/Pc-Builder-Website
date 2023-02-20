import React from 'react';
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

 export const Navbar = () => {
  return (
    <div className="navbar">
    <div className="links">
        <Link to="/login"> login </Link>
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart"> 
        {/* shopping cart Icon */}
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

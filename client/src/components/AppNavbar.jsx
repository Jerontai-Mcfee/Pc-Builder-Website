import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import VideoTest from '../assets/vid2.mp4';

export const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <div className="video-wrapper">
        <video src={VideoTest} autoPlay loop muted className="background-video" />
        <div className="black-bar">
          <Navbar.Brand as={Link} to="/">Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/cart" className="cart-icon"><ShoppingCart size={32} /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </div>
    </Navbar>
  );
};

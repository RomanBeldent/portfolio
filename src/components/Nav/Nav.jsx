import React from "react";
import "./Nav.scss";
import { useState } from "react";

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <nav className={`Navbar ${showLinks ? "show-nav" : "hide_nav"} `}>
      <ul className="Navbar_links">
        <li className="Navbar_item slideInDown-1">
          <a href="/" className="Navbar_link">
            À propos
          </a>
        </li>
        <li className="Navbar_item slideInDown-2">
          <a href="/" className="Navbar_link">
            Services
          </a>
        </li>
        <li className="Navbar_item slideInDown-3">
          <a href="/" className="Navbar_link">
            Formations
          </a>
        </li>
        <li className="Navbar_item slideInDown-4">
          <a href="/" className="Navbar_link">
            Contact
          </a>
        </li>
      </ul>
      <button className="Navbar_burger" onClick={handleShowLinks} type="button">
        <span className="Burger_bar" />
      </button>
    </nav>
  );
};

export default Nav;

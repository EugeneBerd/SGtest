import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div className="header-menu">
      <ul className="navbar">
        <li>
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/posts">
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/Inputs">
            Inputs
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavMenu.css";

const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nav-menu">
      <div className="menu-text" onClick={toggleMenu}>
        Menu
      </div>
      {menuOpen && (
        <div className="menu-content">
          <ul>
            <li>
              <NavLink exact to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>About</NavLink>
            </li>
            <li>
              <NavLink to="/team" className={({ isActive }) => (isActive ? "active-link" : "")}>Team</NavLink>
            </li>
            <li>
              <NavLink to="/project" className={({ isActive }) => (isActive ? "active-link" : "")}>Project</NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => (isActive ? "active-link" : "")}>Services</NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={({ isActive }) => (isActive ? "active-link" : "")}>Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "")}>Contact</NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavMenu;

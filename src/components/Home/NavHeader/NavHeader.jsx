import React, { useState, useEffect } from "react";
import "./NavHeader.css";
import { NavLink } from "react-router-dom";
import NavMenu from "./NavMenu/NavMenu";

const NavHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`n-header ${scrolled ? "scrolled" : ""}`}>
      <div className="n-left">
        <div className={`n-logo ${scrolled ? "scrolled" : ""}`}>
          <a href="/">ArcLab.</a>
        </div>
      </div>
      <div className="n-right">
        <div className="n-list">
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
        <NavMenu/>
      </div>
    </div>
  );
};

export default NavHeader;

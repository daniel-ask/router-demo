import React from "react";
import '../stylesheets/Nav.css';
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <NavLink to='/' exact activeClassName='home-active'>Home</NavLink>
      <NavLink to='/about' exact activeClassName='about-active'>About</NavLink>
      <NavLink to='/countries' exact activeClassName='about-active'>Countries</NavLink>
    </nav>
  );
}

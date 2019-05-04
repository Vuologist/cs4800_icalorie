import React from "react";
//import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Header = () => (
  <Navbar color="light" light expand="md">
    <NavbarBrand>iCalorie</NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink>Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink>About</NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

export default Header;

import React from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

import * as ROUTES from "../constants/routes";
import { withFirebase } from "../components/Firebase";

const Header = firebase => (
  <Navbar color="light" light expand="md">
    <NavbarBrand>iCalorie</NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink tag={RRNavLink} to={ROUTES.DASHBOARD}>
          Dashboard
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          tag={RRNavLink}
          to={ROUTES.SIGN_IN}
          onClick={firebase.doSignOut}
        >
          Sign Out
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RRNavLink} to={ROUTES.ABOUT}>
          About
        </NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

export default withFirebase(Header);

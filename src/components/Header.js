import React from "react";
//import { NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";

const Header = () => (
  <Row>
    <Col sm="12" md={{ size: 6, offset: 3 }}>
      <Navbar color="light" light expand="md">
        <NavbarBrand>iCalorie</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink>About</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </Col>
  </Row>
);

export default Header;

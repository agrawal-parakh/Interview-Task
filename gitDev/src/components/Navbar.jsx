import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavLink,
  Button,
} from "reactstrap";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md" className="px-5 shadow-sm">
      <NavbarBrand className="fs-4 fw-bold">
        <NavLink className="text-primary-emphasis" to="/">
          GitDev
        </NavLink>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar></Collapse>
    </Navbar>
  );
};

export default NavbarComponent;

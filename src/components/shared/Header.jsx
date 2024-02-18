import React, { useState } from "react";
import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

const BsNavLink = (props) => {
  const { href, title } = props;
  return (
    <>
      <Link className="nav-link port-navbar-link" href={href}>
        {title}
      </Link>
    </>
  );
};

const LoginLink = () => (
  <span className="nav-link port-navbar-link clickable">Login</span>
);
const LogoutLink = () => (
  <span className="nav-link port-navbar-link clickable">Logout</span>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const links = [
    { title: "Home", path: "/" },
    { title: "Blogs", path: "/blogs" },
    { title: "Portfolios", path: "/portfolios" },
    { title: "About", path: "/about" },
    { title: "CV", path: "/cv" },
  ];
  return (
    <Navbar
      className="port-navbar port-default absolute"
      color="transparent"
      dark
      expand="md"
    >
      <NavbarBrand className="port-navbar-brand" href="/">
        Devin Custodio
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          {links.map((link, index) => (
            <NavItem key={index} className="port-navbar-item">
              <BsNavLink href={link.path} title={link.title} />
            </NavItem>
          ))}
        </Nav>
        <Nav navbar>
          <NavItem className="port-navbar-item">
            <LoginLink />
          </NavItem>
          <NavItem className="port-navbar-item">
            <LogoutLink />
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;

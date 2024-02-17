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
    <div>
      <Navbar
        className="port-navbar port-default absolute"
        color="transparent"
        dark
        expand="md"
      >
        <NavbarBrand>
          {/* <Link className="port-navbar-brand" href="/">
            Devin Custodio
          </Link> */}
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
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

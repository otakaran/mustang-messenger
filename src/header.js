import { Link } from "react-router-dom";
import "./css/header.css";
import banner from "./images/mustang-messenger-banner.png";
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <Link to="/">
          <img src={banner} id="banner" alt="Mustang Messenger banner" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav.Link href="#link">
          <Link to="/signup">Sign up</Link> or <Link to="/login">Log in</Link>
        </Nav.Link>
      </Navbar.Collapse>
  </Navbar>
  );
}

export default Header;

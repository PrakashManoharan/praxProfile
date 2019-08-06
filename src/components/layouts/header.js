import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// { faUserCircle } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      logo: "PRAX",
      login: "person"
    };
  }

  render() {
    return (
      <div>
        <Navbar bg="info" variant="dark" expand="lg">
          <Navbar.Brand href="/home">{this.state.logo}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/home">About</Nav.Link>
              <Nav.Link href="/experience">Experience</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/downloads">Downloads</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/auth/google">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;

import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <i class="fab fa-react"></i> Google Books
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Saved</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Quick Search"
              className="mr-sm-2"
            />
            <Button variant="outline-success">Let's look!</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

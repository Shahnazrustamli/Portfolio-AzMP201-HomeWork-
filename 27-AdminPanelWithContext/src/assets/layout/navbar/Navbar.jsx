import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const Navbarr = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="admin">Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="post">Post</Nav.Link>
            {/* <Nav.Link href="edit">Edit</Nav.Link> */}
            <Nav.Link href="users">Users</Nav.Link>
            <Nav.Link href="login">Log In</Nav.Link>
            <Nav.Link href="signin">Sign in</Nav.Link>
            {/* <Nav.Link href="">Log out</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarr;

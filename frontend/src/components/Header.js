import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

const navbarStyle = {
  backgroundColor: "lightblue",
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="dark">
      <Container>
        <Navbar.Brand href="/">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;

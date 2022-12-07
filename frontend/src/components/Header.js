import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';

const Header = ({title}) => {
    return (
        <Navbar bg="dark" variant='dark'>
                <Navbar.Brand href="/">{title}</Navbar.Brand>
        </Navbar>
    )
};
  
export default Header;
 
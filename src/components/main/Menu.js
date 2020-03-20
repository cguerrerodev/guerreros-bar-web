import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'; 
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Menu() {
  return (

<Navbar bg="primary" expand="lg" variant="dark" fixed="top">
    <Navbar.Brand href="#home">Guerrero's Bar Manager</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">

      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="/purchase">Purchase</Nav.Link>
        <Nav.Link href="/inventory">Inventory</Nav.Link>
      </Nav>

    </Navbar.Collapse>
  </Navbar>
    
  );
}

export default Menu;





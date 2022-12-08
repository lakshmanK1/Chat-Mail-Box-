import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

function NavBar() {
  return (
    <div>
    <Navbar expand="lg" style={{backgroundColor:'#05386B'}}>
      <Container>
        <Navbar.Brand href="#home" style={{color:'white'}}>Chat App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{color:'white'}}>Home</Nav.Link>
            <Nav.Link href="#link" style={{color:'white'}}>Contact us</Nav.Link>
            <Nav.Link href="#link" style={{color:'white'}}>Queries</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar
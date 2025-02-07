import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
// navbar imports
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container id='navbar'>
        <Navbar.Brand href="#home"><img src="https://i.pinimg.com/736x/ac/b5/2c/acb52c61be9fbbf8bc14256cbdaa7d0d.jpg" alt="" style={{height:"57px", borderRadius:"50%"}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto " >
            <Nav.Link  active href="#home" id='nav1' >HOME</Nav.Link>
            <Nav.Link href="#link" id='nav2' >ABOUT</Nav.Link>
            <Nav.Link href="#link" id='nav2'>OUR BOOKS</Nav.Link>
            <Nav.Link href="#link" id='nav2'>CONTACT US</Nav.Link>
            <Nav.Link href="#link" id='nav2' ><FontAwesomeIcon icon={faMagnifyingGlass}  style={{fontSize:"25px"}}/></Nav.Link>
            <Nav.Link href="#link" id='nav3'><FontAwesomeIcon icon={faUser} /></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar
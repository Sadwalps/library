
import React from 'react'
// navbar imports
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <>
    <Navbar expand="lg" id='nav'>
      <Container id='navbar' >
        <Navbar.Brand href="#home"><Link to={'/'}><img src="https://i.pinimg.com/736x/ac/b5/2c/acb52c61be9fbbf8bc14256cbdaa7d0d.jpg" alt="" style={{height:"57px", borderRadius:"50%"}} /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto  " >
            <Link to={'/'} id='nav1'>HOME</Link>
            <Link to={'/Books'} id='nav2'>OUR BOOKS</Link>
            <Link to={'/contact'} id='nav2'>CONTACT US</Link>
           
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar
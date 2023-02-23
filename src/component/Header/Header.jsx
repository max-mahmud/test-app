import { signOut } from 'firebase/auth';
import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
  const [user] =useAuthState(auth);
  const handleChange=()=>signOut(auth);
  return (
    <>
      <Navbar bg="dark" expand="lg" >
      <Container>
        <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to={'home'} className='nav-link' >Home</NavLink>
            <NavLink to={'about'}className='nav-link'>About</NavLink>
            <NavLink to={'service'}className='nav-link'>Service</NavLink>
            {
              user ? (<Button className='nav-link btn btn-primary my-btn' onClick={handleChange}>Sing Out</Button>)
              : (<NavLink className='nav-link btn btn-primary' to={'/singin'}>Sing In</NavLink>)
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header

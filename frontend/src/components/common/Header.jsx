import React from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='shadow'>
        <div className='bg-dark text-center py-3'>
            <span className='text-white'>Ecommerce Shopping App</span>
        </div>
        <div className='container'>
            <Navbar expand="lg" className="y">
                <Navbar.Brand href="/">
                    Home
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="ms-auto my-2 my-lg-0"
                    navbarScroll
                >
                    <Nav.Link href="#action1">Men</Nav.Link>
                    <Nav.Link href="#action2">Women</Nav.Link>
                    <Nav.Link href="#action2">Kids</Nav.Link>
                </Nav>
                <div className='nav-right d-flex'>
                    <Link to="/cart" className='ms-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"></path>
                        </svg>
                    </Link>
                </div>           
                </Navbar.Collapse>
            </Navbar>
        </div>     
    </header>
  )
}

export default Header
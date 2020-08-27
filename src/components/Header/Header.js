import React from 'react';
import logo from '../../images/logo2.png';
import banner from '../../images/banner2.png';

import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <Container>
                <Navbar bg="white " expand="lg" variant="info" >
                    <Navbar.Brand href="#home">
                        <img src={logo}
                                width="200"
                                height="150"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto ">
                        <Form inline>
                            <FormControl type="text" placeholder="Find Courses..." className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                        <NavDropdown title="Courses" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">CSE</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Marketing</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Microsoft</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Web courses</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="/categories">Categories</Nav.Link>
                        <Nav.Link href="/signIN">Sign In</Nav.Link>
                        <Nav.Link href="/signUp">Sign Up</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="banner">
                    <div className="banner-img">
                        <img src={banner} alt=""/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Header;
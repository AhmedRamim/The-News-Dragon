import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
const Header = () => {
    return (
        <Container>
            <div className="text-center mt-4">
                <img src={logo} alt="" />
                <p className='text-center text-secondary'>Journalism Without Fear or Favour</p>
                <h5>{moment().format("dddd , MMMM D, YYYY")}</h5>
            </div>
            <div className='d-flex p-3 bg-light rounded mt-4'>
                <Button className='rounded-0' variant='danger'>Latest</Button>
                <Marquee speed={70} className='text-danger '>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <Navbar className='mt-4' collapseOnSelect expand="lg"  variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto ps-5">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                            
                        </Nav>
                        <Nav className='align-items-center'>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="dark">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;
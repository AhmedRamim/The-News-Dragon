import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUser } from 'react-icons/fa';
const Header = () => {
    const { user } = useContext(AuthContext)
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
            <Navbar className='mt-4' collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto ps-5">
                            <Link className='text-decoration-none ms-4 text-secondary' to="/">Home</Link>
                            <Link className='text-decoration-none ms-4 text-secondary' to="#pricing">About</Link>
                            <Link className='text-decoration-none ms-4 text-secondary' to="#pricing">Career</Link>

                        </Nav>
                        <Nav className='align-items-center'>
                            {user && <Nav.Link href="#deets"><FaUser className='fs-4'></FaUser></Nav.Link>}
                            <Nav.Link eventKey={2} href="#memes">
                                {user ?  <Link to='/'><Button variant="dark">Logout</Button></Link> : <Link to='/login'><Button variant="dark">Login</Button></Link>}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;
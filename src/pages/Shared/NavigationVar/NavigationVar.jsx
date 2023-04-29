import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationVar = () => {
    const { user,logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then(result=> {})
        .catch(error=> console.log(error))
    }
    return (
        <Container>
            <Navbar className='my-4' collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto ps-5">
                            <Link className='text-decoration-none ms-4 text-secondary' to="/categories/0">Home</Link>
                            <Link className='text-decoration-none ms-4 text-secondary' to="#pricing">About</Link>
                            <Link className='text-decoration-none ms-4 text-secondary' to="#pricing">Career</Link>
                            

                        </Nav>
                        <Nav className='align-items-center'>
                            {user && <Nav.Link href="#deets"><FaUser className='fs-4'></FaUser></Nav.Link>}
                            
                                {user ? <Link><Button onClick={handleLogOut}  variant="dark">Logout</Button></Link> : <Link to='/login'><Button variant="dark">Login</Button></Link>}
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationVar;
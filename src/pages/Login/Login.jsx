import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const pathName = location?.state?.from?.pathname || '/categories/0'

    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset()
        signIn(email,password)
        .then(result => {
            const signInUser = result.user;
            navigate(pathName)
        })
        .catch(error => {
            console.log(error.massage);
        })
    }


    return (
        <Container className='mt-5 pt-4'>
            
            <Form onSubmit={handleSignIn} className='w-25 mx-auto shadow-lg p-4 rounded'>
            <h1 className='text-center mb-4'>Please Login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' required placeholder="Enter email" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' required placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='w-100' variant="primary" type="submit">
                    Login 
                </Button> <br />
                <Form.Text className="text-secondary text-center">
                        <p className='mt-2'>Don't have an account? <Link to='/register'>Register</Link></p>
                    </Form.Text>
                <Form.Text className="text-success">
                        
                    </Form.Text>
                <Form.Text className="text-danger">
                        
                    </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;
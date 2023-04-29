import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useState } from 'react';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [accepted,setAccepted] = useState(false);
    const handleRegistration = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        e.target.reset()
        createUser(email,password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error.message);
        })

    }

    const handleAccepted = (e) => {
        setAccepted(e.target.checked)
    }
    return (
        <Container className='mt-5 py-4'>
            
        <Form onSubmit={handleRegistration} className='w-50 mx-auto shadow-lg p-4 rounded'>
        <h1 className='text-center mb-4'>Please Register</h1>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name='text' required placeholder="Enter Your name" />
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUrl">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name='photo' required placeholder="Enter Your Photo URL" />
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' required placeholder="Enter email" />
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control  type="password" name='password' required placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" onClick={handleAccepted} controlId="formBasicCheckbox">
                <Form.Check name='accept' type="checkbox" label={<>Accept <Link to='/terms'>Terms and Condition</Link></>} />
            </Form.Group>
            <Button className='w-100' disabled={!accepted} variant="primary" type="submit">
                Register 
            </Button> <br />
            <Form.Text className="text-secondary text-center">
                    <p className='mt-2'>Already have an account? <Link to='/login'>Login</Link></p>
                </Form.Text>
            <Form.Text className="text-success">
                    
                </Form.Text>
            <Form.Text className="text-danger">
                    
                </Form.Text>
        </Form>
    </Container>
    );
};

export default Register;
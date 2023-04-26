import React from 'react';
import { Button,ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub,FaFacebook,FaInstagram,FaTwitter } from "react-icons/fa";
const RightNav = () => {
    return (
        <div className=''>
            <h3>Login With</h3>
            <Button className='my-3 w-100' variant="outline-primary "><FaGoogle /> Login with Google</Button>
            <Button className='w-100' variant="outline-secondary"><FaGithub /> Login with Github</Button>
            <div className='mt-5'>
                <h3>Find Us On</h3>
                <ListGroup>
                    <ListGroup.Item><FaFacebook/> FaceBook</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
                    
                </ListGroup>
            </div>
        </div>
    );
};

export default RightNav;
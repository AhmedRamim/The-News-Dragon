import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'
const RightNav = () => {
    return (
        <div className=''>
            <h3>Login With</h3>
            <Button className='my-3 w-100' variant="outline-primary "><FaGoogle /> Login with Google</Button>
            <Button className='w-100' variant="outline-secondary"><FaGithub /> Login with Github</Button>
            <div className='mt-5'>
                <h3 className='mb-4'>Find Us On</h3>
                <ListGroup>
                    <ListGroup.Item className='p-4 text-secondary'><FaFacebook className=' me-2 bg-light ' /> FaceBook</ListGroup.Item>
                    <ListGroup.Item className='p-4 text-secondary'><FaInstagram className=' me-2 bg-light ' /> Instagram</ListGroup.Item>
                    <ListGroup.Item className='p-4 text-secondary'><FaTwitter className=' me-2 bg-light ' /> Twitter</ListGroup.Item>

                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='position-relative'>
                <img className='w-100' src={bg} alt="" />
                <div  className='text-white text-center position-absolute   bottom-50 px-5 mt-5 pt-5'>
                    <h4 className=''>Create an Amazing Newspaper</h4>
                    <p className=''>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <button className="btn mt-4 btn-danger">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;
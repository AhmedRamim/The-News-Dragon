import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import NavigationVar from '../NavigationVar/NavigationVar';

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
            
        </Container>
    );
};

export default Header;
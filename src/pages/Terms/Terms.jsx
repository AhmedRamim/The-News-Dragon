import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h1>Terms and Condition</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A optio nisi, quisquam sint soluta minima eius, vel enim, molestiae inventore dolorem! Quia modi eum sit error optio! Deserunt, tempora rerum!</p>
            <p>Go Back To <Link to='/register'>Register</Link></p>
        </Container>
    );
};

export default Terms;
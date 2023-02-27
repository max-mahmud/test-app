import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useSignInWithEmailAndPassword  } from 'react-firebase-hooks/auth';
import  auth  from '../../firebase.init';
import { NavLink } from 'react-router-dom';


const Singin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
      signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword (auth);
    const massageDIV =document.getElementById('message-div')

    if (error) {
        massageDIV.innerHTML= 'Something Wrong'
        
    }
    if (loading) {
        massageDIV.innerHTML= 'Loding... Please wait'
    }
    if (user) {
        massageDIV.innerHTML=`<h2 class='text-light'>Sing In Successfull</h2>`
    }

    return (
        <Container className='mt-5 p-5 text-white'>
            <Row >
                <Col lg={{span:6, offset:3 }} className='bg-secondary p-5'>
                <h2 className='text-center mb-5'>Sing In here!</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <div id='message-div'></div>
        <p> Have no Account? <NavLink to={'/register'}className='nav-link my-link'>Register!</NavLink> </p>
        <Button variant="primary" type="submit" onClick={()=> signInWithEmailAndPassword(email, password)}>
            Sing In </Button>
                </Col>
            </Row>
            
        </Container>
        
    )
}

export default Singin

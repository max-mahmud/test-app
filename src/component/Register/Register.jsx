import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import  auth  from '../../firebase.init';
import {  NavLink } from 'react-router-dom';
import GoogleSingUp from '../Google/GoogleSingUp';
import Githubsingup from '../Github/Githubsingup';
import FacebookSingup from '../Facebook/FacebookSingup';


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const massageDIV =document.getElementById('message-div')

    if (error) {
        massageDIV.innerHTML= 'Something Wrong'
        
    }
    if (loading) {
        massageDIV.innerHTML= 'Loding... Please wait'
    }
    if (user) {
        massageDIV.innerHTML=`<h2 class='text-light'>Register Successfull</h2>`
    }

    return (
        <section>
            <Container className='mt-2 p-5 text-white'>
           
            <Row >
                <Col lg={{span:6, offset:3 }} className='bg-success p-5'>
                <h2 className='text-center mb-5'>Register here!</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <div id='message-div'></div>
        <div>
            <p>Already Have an Account? <NavLink to={'/singin'}className='nav-link my-link'>Sing In!</NavLink> </p>
        </div>
        <Button variant="primary" className='w-100 bg-light text-dark' type="submit" onClick={()=> createUserWithEmailAndPassword(email, password)}>
            Submit </Button>

            <span className='or_btn'>OR</span>
            <GoogleSingUp></GoogleSingUp>
            <FacebookSingup />
            <Githubsingup />
                </Col>
            </Row>
        </Container>
        </section>
        
    )
}

export default Register

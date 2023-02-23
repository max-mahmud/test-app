import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const About = () => {
  return (
    <>
        <Container className='bg-primary p-5'>
            <h2 className='m-5'>This Is About Page</h2>
            <h2 className='m-5'>This Is About Page</h2>
            <h2 className='m-5'>This Is About Page</h2>
            <h2 className='m-5'>This Is About Page</h2>

            <Link to="singup">singup</Link>
        </Container>
    </>
  )
}

export default About

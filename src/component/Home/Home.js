import React from 'react'
import {Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
     <Container className='bg-danger p-5'>
        <h2 className='m-5'>This Is Home Page</h2>
        <h2 className='m-5'>This Is Home Page</h2>
        <h2 className='m-5'>This Is Home Page</h2>
        <h2 className='m-5'>This Is Home Page</h2>
        <Link to="singup">singup</Link>
  </Container>
    </>
  )
}

export default Home

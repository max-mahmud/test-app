import React from 'react'
import { useSignInWithFacebook } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { FaFacebook } from "react-icons/fa";
import { Button } from 'react-bootstrap';

const FacebookSingup = () => {
    const [signInWithFacebook, user, loading, error] = useSignInWithFacebook(auth);
    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      if (user) {
        return (
          <div>
            <p className='text-light'>User Registered</p>
          </div>
        );
      }
  return (
    <>
      <Button variant="primary" className='w-100 bg-light text-dark mb-3' type="submit" onClick={()=> signInWithFacebook()}>Continue With <span className='google'><FaFacebook/></span>Facebook</Button>
    </>
  )
}

export default FacebookSingup

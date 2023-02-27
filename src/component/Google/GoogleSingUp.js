import React from 'react'
import { Button } from 'react-bootstrap'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { FcGoogle } from "react-icons/fc";

const GoogleSingUp = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
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
      <Button variant="primary" className='w-100 bg-light text-dark mb-3' type="submit" onClick={()=> signInWithGoogle()}>Continue With <span className='google'><FcGoogle/></span>oogle</Button>
    </>
  )
}

export default GoogleSingUp

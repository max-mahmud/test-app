import React from 'react'
import { useSignInWithGithub } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { BsGithub } from "react-icons/bs";
import { Button } from 'react-bootstrap';

const Githubsingup = () => {
    const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);
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
      <Button variant="primary" className='w-100 bg-light text-dark mb-3' type="submit" onClick={()=> signInWithGithub()}>Continue With <span className='google'><BsGithub/></span>Github</Button>
    </>
  )
}

export default Githubsingup

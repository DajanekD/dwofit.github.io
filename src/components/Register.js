import React from 'react'
import { useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import FitImage from './FitImage'
import './RegisterS.css'


const Register = () => { 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const {createUser} = UserAuth();


  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('');
    try{
        await createUser(email, password);
    }catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  } ;



  return (
    <div>
        <Navbar />
        <FitImage heading='JOIN.' text='US '/>

    <div className='registration'>
        <h1>User Registration</h1>
        <p className='py-2'>Already have an account? <Link to='/login' className='underline' >Log In</Link></p>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type='text' name='user_name' placeholder= 'username' />
        <label>Email</label>
        <input type='email' name='email' placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
        <label>Password</label>
        <input type='password' name= 'password' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
        <button className='btn'>Register</button>
      </form>
    </div>

    </div>
  )
}

export default Register
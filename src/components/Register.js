import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import FitImage from './FitImage'
import './RegisterS.css'


const Register = () => { 
  return (
    <div>
        <Navbar />
        <FitImage heading='JOIN.' text='US '/>

    <div className='registration'>
        <h1>User Registration</h1>
        <label>Username</label>
        <input type='text' placeholder= 'username' />
        <label>Email</label>
        <input type='text' placeholder='email' />
        <label>Password</label>
        <input type='text' placeholder='password' />
        <button className='btn'>Register</button>
    </div>

    </div>
  )
}

export default Register
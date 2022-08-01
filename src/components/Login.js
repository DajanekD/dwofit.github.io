import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import FitImage from './FitImage'
import './LoginS.css'

const Login = () => {
  return (
    <div>
        <Navbar />
        <FitImage heading='LOG.' text='IN '/>

        <div className='login'>
        <h1>User Login</h1>
        <p className='py-2'>Not Registered? <Link to='/register' className='underline'>Register</Link></p>
        <label>Username</label>
        <input type='text' />
        <label>Password</label>
        <input type='text' />
        <button className='btn'>Login</button>

        </div>

    </div>
  )
}

export default Login

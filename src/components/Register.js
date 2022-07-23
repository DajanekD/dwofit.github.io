import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import {useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import FitImage from './FitImage'
import './RegisterS.css'


const Register = () => { 
  let history =useNavigate();
  const [data, setData]=useState({
    user_name:"",
    email:"",
    password:""
  })

  const handleChange=(e)=> {
    setData({ ...data, [e.target.name]: e.target.value });

   // console.log(data)

  }

  const submitForm=(e)=>{
    e.preventDefault();
   const sendData = {
      user_name:data.user_name,
      email:data.email,
      password:data.password
    }

    console.log(sendData);

    axios.post('http://localhost/dwofitness.github.io/register-login/insert.php', sendData)
    .then((result)=> {
      if(result.data.Status == 'Invalid'){
      alert('Invalid User');
      }
      else{

        history('/Login')

      }
    })
  }


  return (
    <div>
        <Navbar />
        <FitImage heading='JOIN.' text='US '/>

    <div className='registration'>
        <h1>User Registration</h1>
      <form onSubmit={submitForm}>
        <label>Username</label>
        <input type='text' name='user_name' placeholder= 'username' onChange={handleChange} value={data.user_name}/>
        <label>Email</label>
        <input type='text' name='email' placeholder='email' onChange={handleChange} value={data.email}/>
        <label>Password</label>
        <input type='text' name= 'password' placeholder='password'  onChange={handleChange} value={data.password}/>
        <button className='btn'>Register</button>
      </form>
    </div>

    </div>
  )
}

export default Register
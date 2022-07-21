import React from 'react'
import './CFormS.css'

const CForm = () => {
  return (
    <div className='form'>
        <form>
            <label>Name</label>
            <input type='text'></input>
            <label>Email</label>
            <input type='email'></input>
            <label>Subject</label>
            <input type='text'></input>
            <label>Details</label>
            <textarea rows='6' placeholder= 'Input message here' />
            <button className='btn'>Submit</button>



        </form>

    </div>
  )
}

export default CForm
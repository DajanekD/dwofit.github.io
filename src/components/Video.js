import React from 'react'
import {Link} from 'react-router-dom'
import './VStyles.css'

import fitVideo from '../assets/pexels-mikhail-nilov-6740160.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={fitVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>Challenge. Fitness</h1>
                <p>Virtual Fitness Motivation</p>

                <div>
                    <Link to='/register' className='btn'>Register</Link>
                    <Link to= '/login' className='btn btn-light'>Login</Link>
                </div>
            </div>
        </div>
    )
}
export default Video
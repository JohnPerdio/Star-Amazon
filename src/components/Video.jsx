import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'

import boba from '../assets/boba.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={boba} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>Interstellar Infusions</h1>
                <p>Out of this World Refreshments</p>
                <div>
                    <Link to='/news' className='btn'>News</Link>
                    <Link to='/pricing' className='btn btn-light'>Buy Now</Link>
                </div>
            </div>
        </div>
    )
}

export default Video

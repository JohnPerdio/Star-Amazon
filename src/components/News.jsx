import React from 'react'
import './NewsStyles.css'

import {Link} from 'react-router-dom'

import training1 from '../assets/training1.webp'
import training2 from '../assets/training2.png'

const News = () => {
    return (
        <div className='training'>
            <div className='left'>
                <h1>Training</h1>
                <p>Thorough training is a necessity to master the art of boba and tea making. We offer all inclusive training for everyone who is interested.</p>
                <Link to='/contact'><button className='btn'>Contact us!</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={training1} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={training2} className='img' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News

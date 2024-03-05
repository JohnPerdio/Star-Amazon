import React from 'react'
import './HomePricingStyles.css'
import {Link} from 'react-router-dom'

import a from '../assets/a.webp'
import b from '../assets/b.jpg'
import c from '../assets/c.jpg'

const HomePricing = () => {
  return (
    <div className='pricing'>
            <div className='card-container'>
                <div className='card'>
                    <h3>- Bubble Tea -</h3>
                    <img src={a} className='img' alt='' />
                    <span className='bar'></span>
                    <p>- Refreshing -</p>
                    <p>- Sweet -</p>
                    <p>- Smooth -</p>
                    <p>- Chewy -</p>
                    <p>- $ 5.50 -</p>
                    <Link to='/contact' className='btn'>Buy Now</Link>
                </div>
                <div className='card'>
                    <h3>- Milk Tea -</h3>
                    <img src={b} className='img' alt='' />
                    <span className='bar'></span>
                    <p>- Creamy -</p>
                    <p>- Rich -</p>
                    <p>- Smooth -</p>
                    <p>- Classic -</p>
                    <p>- $ 6.00 -</p>
                    <Link to='/contact' className='btn'>Buy Now</Link>
                </div>
                <div className='card'>
                    <h3>- Matcha Milk Tea -</h3>
                    <img src={c} className='img' alt='' />
                    <img src=''/>
                    <span className='bar'></span>
                    <p>- Creamy -</p>
                    <p>- Earthy -</p>
                    <p>- Uplifting -</p>
                    <p>- Energizing -</p>
                    <p>- $ 6.50 -</p>
                    <Link to='/contact' className='btn'>Buy Now</Link>
                </div>
                <Link to='/pricing'><button className='btn'>More</button></Link>
            </div>
        <div/>
    </div>
    )
}

export default HomePricing
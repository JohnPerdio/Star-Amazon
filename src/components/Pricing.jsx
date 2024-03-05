import React from 'react'
import {Link} from 'react-router-dom'
import './PricingStyles.css'

import a from '../assets/a.webp'
import b from '../assets/b.jpg'
import c from '../assets/c.jpg'
import d from '../assets/d.jpg'
import e from '../assets/e.jpg'
import f from '../assets/f.jpg'
import g from '../assets/g.jpg'
import h from '../assets/h.jpg'
import i from '../assets/i.jpg'

const Pricing = () => {
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
                <div className='card'>
                    <h3>- Taro Milk Tea -</h3>
                    <img src={d} className='img' alt='' />
                    <span className='bar'></span>
                    <p>- Velvety -</p>
                    <p>- Sweet -</p>
                    <p>- Smooth -</p>
                    <p>- Exotic -</p>
                    <p>- $ 6.50 -</p>
                    <Link to='/contact' className='btn'>Buy Now</Link>
                </div>
                <div className='card'>
                    <h3>- Thai Milk Tea -</h3>
                    <img src={e} className='img' alt='' />
                    <span className='bar'></span>
                    <p>- Sweet -</p>
                    <p>- Aromatic -</p>
                    <p>- Smooth -</p>
                    <p>- Irresistible -</p>
                    <p>- $ 6.50 -</p>
                    <Link to='/contact' className='btn'>Buy Now</Link>
                </div>
                <div className='card'>
                    <h3>- Brown Sugar Milk Tea -</h3>
                    <img src={f} className='img' alt='' />
                    <img src=''/>
                    <span className='bar'></span>
                    <p>- Caramelized -</p>
                    <p>- Sweet -</p>
                    <p>- Rich -</p>
                    <p>- Heavenly -</p>
                    <p>- $ 7.00 -</p>
                    <Link to='/contact' className='btn'>Buy Now</Link>
                </div>
                <div className='card'>
                    <h3>- Chai Tea -</h3>
                    <img src={g} className='img' alt='' />
                    <span className='bar'></span>
                    <p>- Aromatic -</p>
                    <p>- Sweet -</p>
                    <p>- Smooth -</p>
                    <p>- Comforting -</p>
                    <p>- $ 6.00 -</p>
                    <Link to='/contact' className='btn'>Buy Now</Link>
                </div>
                <div className='card'>
                    <h3>- Mint Tea -</h3>
                    <img src={h} className='img' alt='' />
                    <span className='bar'></span>
                    <p>- Refreshing -</p>
                    <p>- Cooling -</p>
                    <p>- Smooth -</p>
                    <p>- Soothing -</p>
                    <p>- $ 6.00 -</p>
                    <Link to='/contact' className='btn'>Buy Now</Link>
                </div>
                <div className='card'>
                    <h3>- Lemon Tea -</h3>
                    <img src={i} className='img' alt='' />
                    <img src=''/>
                    <span className='bar'></span>
                    <p>- Zesty -</p>
                    <p>- Sweet -</p>
                    <p>- Sour -</p>
                    <p>- Revitalizing -</p>
                    <p>- $ 6.00 -</p>
                    <Link to='/contact' className='btn'>Buy Now</Link>
                </div>
            </div>
        </div>
    )
}

export default Pricing

import React from 'react'
import { Link } from 'react-router-dom'
// images

import car from './../images/my-account-cars-icon.png';


const Profileside = () => {
  return (
    <div>
       <div className='myprofile-btn-gr'>
                  <ul>
                    <li><Link to={'/Myprofile'}>Personal Information</Link></li>
                    <li><Link to={'/Changepassword'}>Change Password</Link></li>
                    <li><Link to={'/'}>My Cart</Link></li>
                    <li><Link to={'/Cars'}>Cars <span><img src={car} /></span></Link> </li>
                  </ul>
                </div>
    </div>
  )
}

export default Profileside;
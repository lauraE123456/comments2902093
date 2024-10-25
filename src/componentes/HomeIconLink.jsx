import React from 'react'
import { FaHome } from 'react-icons/fa'
import {Link} from 'react-router-dom'
const HomeIconLink = () => {
  return (
    <div className='about-link'>
        <Link to='/'>
        <FaHome size={30} />
        </Link>
    </div>
  )
}

export default HomeIconLink
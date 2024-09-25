import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <div>

        <Link to={'./'}>Home</Link>

        <Link to={'./countries'}>Countries</Link>
        <Link to={'./pricing'}>Pricing</Link>
        <Link to={'./blog'}>Blog</Link>


    </div>
  )
}

export default Navigation
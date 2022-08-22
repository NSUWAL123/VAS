import React from 'react'
import { Link } from 'react-router-dom'
import pageNA from "../pictures/page-not-found.jpg"
import '../styles/PageNotAvailableStyle.css'


const PageNotAvailable = () => {
  return (
    <div className='page-na-main'>
      <div className="not-av-pic">
        <img src={pageNA} alt="" />
      </div>

      <Link to='/' className='pna-link-home'>&#10229; Back to Home</Link>
    </div>
  )
}

export default PageNotAvailable
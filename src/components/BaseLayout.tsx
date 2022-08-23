import React from 'react'
import { Link, Outlet} from 'react-router-dom'
import logo from "../pictures/logo.jpg"
import { Icon } from '@iconify/react';
import '../styles/BaseLayout.css'

function BaseLayout(){
  return (
    <div className='main-container-bl'>
        <Link to="/" className='container-bl'>
          <Icon icon="healthicons:syringe-vaccine" color="#ff002f" className='icon' width="80px"/>
          <h2>VAS</h2>
        </Link>
        <hr className='hr-bl'/>
        <Outlet />
    </div>
  )
}

export default BaseLayout
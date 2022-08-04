import React from 'react'
import { Link, Outlet} from 'react-router-dom'

function BaseLayout(){
  return (
    <div>
        <Link to="/">
          <h2 className='pageHeadingH2'>VAS</h2>
        </Link>
        <Outlet />
    </div>
  )
}

export default BaseLayout
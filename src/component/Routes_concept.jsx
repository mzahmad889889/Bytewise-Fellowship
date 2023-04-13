import React from 'react'
import { Link } from 'react-router-dom'
function Routes_concept() {
  return (
    <div>
        <nav>
          <ul>
            <li><Link to='/'  id='color'>Home</Link></li>
            <li ><Link to='/about' id='color'>About</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Routes_concept

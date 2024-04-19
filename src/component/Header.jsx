import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <header>
      <nav className="navbar">
        <div className="container">

          <div className="logo">
            <img src="images/Mindful Logo.png" alt="" />
          </div>
          <div className="nav-menu">
            <ul className="menu-list">
              <li className="menu-item"><Link to="" className="nav-link">About</Link></li>
              <li className="menu-item">
                <Link to="" className="nav-link">Services</Link>
              </li>
              <li className="menu-item"><Link to="/signin" className="nav-link">Login</Link></li>
              <li className="menu-item">
                <Link to="/signup" className="nav-link menu-btn">Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

  )
}

export default Header
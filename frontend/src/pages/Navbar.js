import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className='navbar__head'>
        <div className='navbar__text'>
            <div className='logo'><img src="images/Header1.png"></img></div>
            <ul className='navbar__ul'>
                <li><a href="">About</a></li>
                <li><Link to ="/about"className="nav-link active" aria-current="page">Services</Link></li>
                <li><Link to="/contactus" className="nav-link active" aria-current="page">Contact us</Link></li>
                <li><Link to ="/contact"className="nav-link active" aria-current="page">Login</Link></li>

            </ul>
        </div>
    </nav>
  )
}

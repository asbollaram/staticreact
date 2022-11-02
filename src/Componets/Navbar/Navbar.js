import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className='header_content'>
      <div className='logo'>B</div>
        <nav className='navMain'>    
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='about'>About Us</NavLink></li>
            <li><NavLink to='Contactus'>Contact Us</NavLink></li>
            <li><NavLink to='Login' className="login">Login</NavLink></li>
            
        </nav>
    </header>
  )
}

export default Navbar
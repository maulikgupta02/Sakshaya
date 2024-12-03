import React from "react";
import { useNavigate } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className='header' style={{ backgroundColor: '#957F7F' }}>
      <div className='logo' onClick={() => navigate('/')}>
        <img src='/logo.png' alt='Logo' />
      </div>
      <div className='navbar'>
        <ul>
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/#About')}>About</li>
          <li onClick={() => navigate('/#Services')}>Services</li>
          <li onClick={() => navigate('/#Contact')}>Contact Us</li>
          <li onClick={() => navigate('/login')}>Login</li>
        </ul>
      </div>
    </div>
  );
}

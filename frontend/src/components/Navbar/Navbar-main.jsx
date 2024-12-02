import React from "react";
import { useNavigate } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className='header'>
      <div className='logo' onClick={() => navigate('/')}>
        <img src='/logo.png' alt='Logo' />
      </div>
      <div className='navbar'>
        <ul>
          <li onClick={() => navigate('/')}>Home</li>
          <li><a href='#About'>About</a></li>
          <li><a href='#Services'>Services</a></li>
          <li><a href='#Contact'>Contact Us</a></li>
          <li onClick={() => navigate('/login')}>Login</li>
        </ul>
      </div>
    </div>
  );
}

import React from "react";
import './Navbar.css';


export default function Navbar(){
    return(
        <div className='header'>
        <div className='logo'>
          <a href='./'>
        <img src='/logo.png' alt='Logo' />
         </a>
        </div>
      <div className='navbar'>
      <ul>
        <li href='#Home'>Home</li>
        <li href='#About'>About</li>
        <li href='#Services'>Services</li>
        <li href='#Contact Us'>Contact Us</li>
        <li href='#Login'>Login</li>
      </ul>
      </div>
      </div>
    )
}
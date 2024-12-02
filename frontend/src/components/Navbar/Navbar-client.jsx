import React from "react";
import './Navbar.css';
import { RxHamburgerMenu } from "react-icons/rx";


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
        <li><a href='#Home'>Home</a></li>
        <li href='#About'>Get Notarized</li>
        <li href='#Services'>Schedule Appointment</li>
        <li><a href='#Contact Us'>My Notaries</a></li>
      </ul>
      </div>
      <div className='menu'>
        <RxHamburgerMenu/>
      </div>
      </div>
    )
}
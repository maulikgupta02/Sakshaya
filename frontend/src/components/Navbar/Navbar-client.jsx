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
        <li href='#Home'>Home</li>
        <li href='#About'>Get Notarized</li>
        <li href='#Services'>Schedule Appointment</li>
        <li href='#Contact Us'>My Notaries</li>
      </ul>
      </div>
      <div className='menu'>
        <RxHamburgerMenu/>
      </div>
      </div>
    )
}
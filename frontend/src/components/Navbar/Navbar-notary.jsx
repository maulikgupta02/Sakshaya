import React from "react";
import './Navbar.css';
import { RxHamburgerMenu } from "react-icons/rx";


export default function Navbar(){
    return(
        <div className='header' style={{ backgroundColor: '#957F7F' }}>
        <div className='logo'>
          <a href='./'>
        <img src='/logo.png' alt='Logo' />
         </a>
        </div>
        <div className='navbar'>
        <ul>
        <li href='#Home'>Appointments</li>
        <li href='#About'>Search Notaries</li>
        <li href='#Services'>Schedule</li>
        <li href='#Contact Us'>Registry</li>
      </ul>
      </div>
      <div className='menu'>
        <RxHamburgerMenu/>
      </div>
      </div>
    )
}
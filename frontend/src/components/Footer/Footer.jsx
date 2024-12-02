import {React,useState} from 'react';
import { FaPhoneAlt } from "react-icons/fa"; //phone
import { MdOutlineMail } from "react-icons/md"; //email
import { FaLocationDot } from "react-icons/fa6"; //location
import emailjs from 'emailjs-com';
import './Footer.css'

export default function Footer(){

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [query,setQuery]=useState('');

    const submut_query=()=>{
      const admin='guptamaulik16@gmail.com'
      if (name==='' || email==='' || query===''){
        alert("Please enter all the details before posting a query!");
      }
      else{
        const templateParams = {
          from_name: name,
          from_email: email,
          message: query,
          to_email: admin
        };
        emailjs.send(
          'default_service',       // Replace with your service ID
          'template_xbzqhcf',      // Replace with your template ID
          templateParams,
          'Xhdx5wg_hbtQPqUnM'           // Replace with your EmailJS user ID
        ).then(
          (response) => {
            console.log('Email sent successfully:', response);
            alert('Your query has been submitted successfully!');
          },
          (error) => {
            console.error('Error sending email:', error);
            alert('Failed to submit your query. Please try again later.');
          }
        );
      }
    }

    return(
    <div className='footer'>
      <div className='contact'>
      <div className='logo'>
        <a href='./'>
        <img src='./logo.png' alt='logo' />
        </a>
      </div>
        <table>
          <tr>
            <td><MdOutlineMail/></td>
            <td>guptamaulik16@gmail.com</td>
          </tr>
          <tr>
            <td><FaPhoneAlt/></td>
            <td>+91-9810692207</td>
          </tr>
          <tr>
            <td><FaLocationDot/></td>
            <td>Room A313, Hostel M, Thapar Institute of Engineering and Technology, Patiala-147004</td>
          </tr>
        </table>
      </div>
      <div className='feedback'>
        <h3>Contact Us</h3>
        <table>
          <tr>
            <td>Name</td>
            <td>      
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Enter your name" 
            />
      </td>
          </tr>
          <tr>
            <td>Email</td>
            <td><input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email" 
          /></td>
          </tr>
          <tr>
            <td>Query</td>
            <td><textarea 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            placeholder="Enter your query" 
          /></td>
          </tr>
        </table>
        <button onClick={submut_query} className='submit'>SUBMIT</button>
      </div>
    </div>
    )
}

import './App.css';
import React from "react";
import "react-calendar/dist/Calendar.css";
// import Calender from './components/Calender-Book/Calender';
// import ListNotaries from './components/ListNotaries/ListNotaries';
// import DocUpload from './components/Docupload/DocUpload'
import Home from './pages/Home'
import Client from './pages/Client/Client';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './pages/register_login/Login';
import Signup from './pages/register_login/Signup';
import SignupNotary from './pages/register_login/Signup_Notary';



function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/client' element={<Client/>}/>
        <Route path='/login' element ={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/register-notary' element = {<SignupNotary/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

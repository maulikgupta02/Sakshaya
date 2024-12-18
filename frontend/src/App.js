import './App.css';
import Home from './pages/Home/Home'
import Client from './pages/Client/Client';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './pages/register_login/Login';
import Signup from './pages/register_login/Signup';
import SignupNotary from './pages/register_login/Signup_Notary';
import Notary from './pages/Notary/Notary';
import { MyProvider } from './context';



function App() {
  return (
    <MyProvider>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/client' element={<Client/>}/>
        <Route path='/notary' element ={<Notary/>}/>
        <Route path='/login' element ={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/register-notary' element = {<SignupNotary/>}/>
      </Routes>
    </Router>
    </MyProvider>
  );
}

export default App;

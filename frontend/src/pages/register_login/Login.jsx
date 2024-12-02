import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Navbar from '../../components/Navbar/NavBar-Log-sign';
import { Link } from 'react-router-dom';
// import Signup from './Signup';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex h-full">
        {/* Left side */}
        <div className="w-1/2 bg-slate-200 flex items-center justify-center flex-col">
          <h1 className="text-black font-semibold text-4xl text-center">
            Your Reliable Online <br /> Notary Service
          </h1>
          <p className="text-xl mt-8">Legal. Fast. Secure.</p>
          {/* Signup Link */}
          <div className="text-center mt-6 fixed bottom-4">
              <span className="text-black">do not have an account yet - </span>
              <Link to="/signup" className="text-blue-600 hover:text-blue-800">
                signup
              </Link>
            </div>
        </div>

        {/* Right side */}
        <div className="w-1/2 bg-white flex items-center justify-center">
          <div className="w-[400px]">
            <form>
              {/* User Type Field */}
              <div className="mb-6 flex items-center">
                <label className="text-black w-24">
                  user-type
                </label>
                <select 
                  className="flex-1 h-8 px-2 bg-[#e6e6e6] border-[1px] border-gray-400"
                >
                  <option value="">Select type</option>
                  <option value="client">Client</option>
                  <option value="notary">Notary</option>
                </select>
              </div>

              {/* Username Field */}
              <div className="mb-6 flex items-center">
                <label className="text-black w-24">
                  username
                </label>
                <input
                  type="text"
                  className="flex-1 h-8 px-2 bg-[#e6e6e6] border-[1px] border-gray-400"
                />
              </div>

              {/* Password Field */}
              <div className="mb-6 flex items-center">
                <label className="text-black w-24">
                  password
                </label>
                <div className="flex-1 relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full h-8 px-2 bg-[#e6e6e6] border-[1px] border-gray-400"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeOff size={16} className="text-gray-600" />
                    ) : (
                      <Eye size={16} className="text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-[#3b2727] text-white h-10 mt-4"
              >
                LOGIN
              </button>
            </form>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
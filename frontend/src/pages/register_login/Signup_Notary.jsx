import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/NavBar-Log-sign';
import { Calendar,Eye, EyeOff } from 'lucide-react';

const SignupNotary = () => {
    const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    mobile: '',
    dob: '',
    sex: '',
    certificate: '',
    permanentAddress: '',
    currentAddress: '',
  });

  const [sameAsPermAddr, setSameAsPermAddr] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = { ...prev, [name]: value };
      if (name === 'permanentAddress' && sameAsPermAddr) {
        newData.currentAddress = value;
      }
      return newData;
    });
  };

  const handleAddressCheckbox = (e) => {
    setSameAsPermAddr(e.target.checked);
    if (e.target.checked) {
      setFormData(prev => ({
        ...prev,
        currentAddress: prev.permanentAddress
      }));
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex h-full">
        {/* Left side - now 2/5 width */}
        <div className="w-[40%] bg-slate-200 flex items-center justify-center flex-col">
          <h1 className="text-black font-bold text-4xl text-center pb-8">
            Your Reliable Online <br /> Notary Service
          </h1>
          <p className="text-xl mb-16">Legal. Fast. Secure.</p>
          {/* Login Link */}
          <div className="text-center mt-4 fixed bottom-4">
                <span className="text-gray-700">already having an account - </span>
                <Link to="/login" className="text-blue-600 hover:text-blue-800">
                  login
                </Link>
              </div>
        </div>

        {/* Right side - now 3/5 width */}
        <div className="w-[60%] bg-white flex items-center justify-center mt-8">
          <div className="w-[90%] max-w-[700px]">
            <form className="space-y-4">
              {/* Regular input fields */}
              {[
                { label: 'NAME', id: 'name', placeholder: 'Name' },
                { label: 'USERNAME', id: 'username', placeholder: 'Username' },
                { 
                    label: 'PASSWORD', 
                    id: 'password', 
                    type: showPassword ? 'text' : 'password', 
                    placeholder: 'Password',
                    hasVisibilityToggle: true 
                },
                { label: 'MOBILE', id: 'mobile', placeholder: 'Mobile' },
                ].map((field) => (
                <div key={field.id} className="flex items-center space-x-4">
                    <label className="text-black w-36 font-bold text-right">
                    {field.label}
                    </label>
                    <div className="flex-1 relative">
                    <input
                        type={field.type || 'text'}
                        name={field.id}
                        placeholder={field.placeholder}
                        value={formData[field.id]}
                        onChange={handleInputChange}
                        className="w-full h-8 px-2 bg-[#e6e6e6] border-[1px] border-gray-500 shadow-lg"
                    />
                    {field.hasVisibilityToggle && (
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
                    )}
                    </div>
                </div>
                ))}

              {/* DOB and Sex row */}
              <div className="flex items-center space-x-4">
                <label className="text-black w-36 font-bold text-right">
                  DOB
                </label>
                <div className="relative flex-1 max-w-[200px] shadow-lg">
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    className="w-full h-8 px-2 bg-[#e6e6e6] border-[1px] border-gray-400 "
                  />
                  <Calendar className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none " size={16} />
                </div>
                <label className="text-black font-bold ">
                  SEX
                </label>
                <select
                  name="sex"
                  value={formData.sex}
                  onChange={handleInputChange}
                  className="flex-1 h-8 px-2 bg-[#e6e6e6] border-[1px] border-gray-400 shadow-lg"
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* certificate_id */}
              <div className="flex items-center space-x-4">
                <label className="text-black w-36 font-bold text-right">
                  CERTIFICATE ID
                </label>
                <input
                  type="text"
                  name="certificate_id"
                  placeholder="Certificate ID"
                  value={formData.certificate}
                  onChange={handleInputChange}
                  className="flex-1 h-8 px-2 bg-[#e6e6e6] border-[1px] border-gray-400 shadow-lg"
                />
              </div>

              {/* Addresses */}
              <div className="flex items-start space-x-4">
                <label className="text-black w-36 font-bold text-right pt-1">
                  PERMANENT ADDRESS
                </label>
                <div className="flex-1">
                  <textarea
                    name="permanentAddress"
                    placeholder="Permanent Address"
                    value={formData.permanentAddress}
                    onChange={handleInputChange}
                    className="w-full h-20 px-2 py-1 bg-[#e6e6e6] border-[1px] border-gray-400 shadow-lg"
                  />
                </div>
              </div>

              {/* Same as permanent address checkbox */}
              <div className="flex items-center">
                <div className="w-36"></div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="sameAddress"
                    checked={sameAsPermAddr}
                    onChange={handleAddressCheckbox}
                    className="mr-2"
                  />
                  <label htmlFor="sameAddress" className="text-sm text-gray-600 ">
                    Same as permanent address
                  </label>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <label className="text-black w-36 font-bold text-right pt-1">
                  CURRENT ADDRESS
                </label>
                <div className="flex-1">
                  <textarea
                    name="currentAddress"
                    placeholder="Current Address"
                    value={formData.currentAddress}
                    onChange={handleInputChange}
                    disabled={sameAsPermAddr}
                    className={`w-full h-20 px-2 py-1 border-[1px] border-gray-400 shadow-lg ${
                      sameAsPermAddr ? 'bg-gray-200' : 'bg-[#e6e6e6]'
                    }`}
                  />
                </div>
              </div>

              {/* Register Button */}
              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="bg-[#3b2727] text-white px-8 py-2"
                >
                  REGISTER
                </button>
              </div>

              {/* Registration Type Info */}
              <div className="text-center mt-4 space-y-1">
                <p className="text-gray-700">you are registering as a Notary</p>
                <p className="text-gray-700">
                  to register as a client instead - {' '}
                  <Link to="/signup" className="text-blue-600 hover:text-blue-800">
                    register as a client
                  </Link>
                </p>
              </div>

              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupNotary;
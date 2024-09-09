import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  // State to manage form input values and messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Hook for programmatic navigation
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous messages
    setError('');
    setSuccess('');

    try {
      // Make POST request to the server
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password
      });

      // Handle success response
      if (response.status === 200) {
        setSuccess('Login successful!');
        // Redirect to Home page after successful login
        setTimeout(() => {
          navigate('/');
        }, 2000); // Redirect after 2 seconds to show success message
      }
    } catch (err) {
      // Handle error response
      setError('Error logging in!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-l from-gray-800 via-gray-900 to-black flex items-center justify-center">
      <div className="bg-transparent p-12 md:flex md:flex-row flex-col w-4/5 md:w-3/4 lg:w-3/4 rounded-2xl shadow-xl">

        {/* Column 1 */}
        <div className="p-8 md:w-1/2 w-full flex flex-col justify-center mb-8 md:mb-0 md:mr-6 bg-[#f5f5f5] rounded-xl shadow-md">
          <p className="text-5xl font-bold mb-6 text-[#034a9c]">Nexus</p>
          <p className="text-[#2d2d2d] text-lg mb-4 text-left">Is therapy too expensive? Discover insights from others' therapy sessions. Join Nexus, the social media app dedicated to sharing therapy resources at no cost.</p>

          <p className="text-[#2d2d2d] text-sm mb-2 mt-5">Don't have an account?</p>
          <Link to='/register'>
            <button className="w-full bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-xl font-semibold shadow-xl">Register</button>
          </Link>
        </div>

        {/* Column 2 */}
        <div className="md:w-1/2 w-full bg-white shadow-lg rounded-2xl p-8">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Enter email" 
              className="mb-4 p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-500" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
              type="password" 
              placeholder="Enter password" 
              className="mb-4 p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-500" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <button 
              type="submit" 
              className="bg-[#034a9c] hover:bg-[#022f73] text-white py-2 px-4 rounded-lg font-semibold shadow-xl"
            >
              Login
            </button>
            {success && <p className="text-blue-600 mt-4">{success}</p>}
            {error && <p className="text-red-600 mt-4">{error}</p>}
          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;

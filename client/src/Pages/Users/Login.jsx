import React, { useState } from 'react';
import axios from 'axios';
import { FaEnvelope, FaLock } from 'react-icons/fa';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        window.location.href = '/';
      } else {
        setError(response.data.message || 'Login failed');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-semibold text-center text-blue-800 mb-6">Login</h2>
        {error && <div className="mb-4 text-red-600 text-center bg-red-100 p-2 rounded">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="mb-4 relative">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <div className="flex items-center border border-blue-300 rounded-lg overflow-hidden">
              <span className="bg-blue-100 px-3 text-blue-600"><FaEnvelope /></span>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="flex items-center border border-blue-300 rounded-lg overflow-hidden">
              <span className="bg-blue-100 px-3 text-blue-600"><FaLock /></span>
              <input
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 focus:outline-none"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <button 
            type="submit" 
            className={`w-full bg-blue-800 text-white py-2 rounded-lg transition duration-300 ease-in-out hover:bg-blue-900 focus:outline-none flex justify-center items-center ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} 
            disabled={loading}
          >
            {loading ? <span className="animate-spin h-5 w-5 border-4 border-white border-t-transparent rounded-full"></span> : 'Login'}
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-blue-600">Don't have an account? 
            <a href="/signup" className="font-semibold text-blue-800 hover:underline ml-1">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

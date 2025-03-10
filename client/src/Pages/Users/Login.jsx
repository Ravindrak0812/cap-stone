import React, { useState } from 'react';
import axios from 'axios';

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
      // Make API request to login
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      if (response.data.success) {
        console.log('Login successful:', response.data);
        // You can redirect the user or store the token as needed
        localStorage.setItem('token', response.data.token); // Example: Save token
        // Redirect to dashboard or home page
        window.location.href = '/'; // Adjust this based on your routing setup
      } else {
        setError(response.data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-semibold text-center text-blue-800 mb-8">Login</h2>

        <form onSubmit={handleLogin}>
          {error && <div className="mb-4 text-red-600 text-center">{error}</div>}
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-blue-800">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-blue-800">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your password"
            />
          </div>

          <button 
            type="submit" 
            className={`w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900 focus:outline-none ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} 
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-blue-600">Don't have an account? 
            <a href="/signup" className="font-semibold text-blue-800 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

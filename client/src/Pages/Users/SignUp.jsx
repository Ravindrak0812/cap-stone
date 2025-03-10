import React, { useState } from 'react';

function Signup() {
  const [name, setName] = useState('');  // 'name' field
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    const userData = { name, email, password };  // Ensure 'name' is included

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),  // Send name along with email and password
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Signup successful! You can now log in.');
        setError('');
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setError('Network error. Please try again later.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-semibold text-center text-blue-800 mb-8">Sign Up</h2>

        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-blue-800">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your name"
            />
          </div>
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
          <div className="mb-4">
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
          <div className="mb-4">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-blue-800">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Confirm your password"
            />
          </div>
          <button type="submit" className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900 focus:outline-none">Sign Up</button>
        </form>

        {/* Displaying success or error messages */}
        {error && <div className="mt-4 text-red-600 text-center">{error}</div>}
        {successMessage && <div className="mt-4 text-green-600 text-center">{successMessage}</div>}

        <div className="mt-6 text-center">
          <p className="text-sm text-blue-600">Already have an account? <a href="/login" className="font-semibold text-blue-800 hover:underline">Login</a></p>
        </div>
      </div>
    </div>
  );
}

export default Signup;

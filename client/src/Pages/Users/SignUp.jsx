import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaImage } from 'react-icons/fa';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Signup successful! Redirecting to login...');
        setError('');

        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setError('Network error. Please try again later.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md transform transition-all duration-500 hover:shadow-2xl">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-6">Sign Up</h2>

        <form onSubmit={handleSignup} className="space-y-5">
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Full Name"
              required
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Email Address"
              required
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-500" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Password"
              required
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-500" />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Confirm Password"
              required
            />
          </div>

          <div className="relative">
            <FaImage className="absolute left-3 top-3 text-gray-500" />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
            />
          </div>

          {imagePreview && (
            <div className="text-center">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-24 h-24 object-cover rounded-full mx-auto border border-gray-300"
              />
            </div>
          )}

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300">
            Sign Up
          </button>
        </form>

        {error && <div className="mt-4 text-red-600 text-center">{error}</div>}
        {successMessage && <div className="mt-4 text-green-600 text-center">{successMessage}</div>}

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account? <a href="/login" className="font-semibold text-blue-800 hover:underline">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;

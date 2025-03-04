import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import users from '../Data/LoginData';
import loginBg from '../components/img/couplehome.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      alert('You are already logged in!');
      navigate('/');
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      setMessage(user.response.message);
      localStorage.setItem('token', 'dummy_token');
      navigate('/');
    } else {
      setMessage('Invalid email or password!');
    }
    setEmail('');
    setPassword('');
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${loginBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <form
        onSubmit={handleLogin}
        className="relative z-10 p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl w-96 transform transition-all duration-300 hover:shadow-xl animate-fade-in-up"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 animate-slide-up">
          Welcome Back
        </h2>

        <div className="space-y-5">
          <div className="animate-slide-up delay-100">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="animate-slide-up delay-200">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 hover:from-blue-700 hover:to-blue-600 hover:scale-[1.02] animate-fade-in delay-300"
          >
            Sign In
          </button>

          {message && (
            <p className="mt-4 text-red-600 text-sm animate-shake">
              {message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
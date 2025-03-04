import React, { useState } from "react";
import '../CSS/Coustom.css';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    if (confirm('Are you sure you want to logout')) {
      localStorage.removeItem('token');
      navigate('/');
    }
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="fixed w-full z-50 shadow-lg bg-gradient-to-r from-slate-800 to-slate-700">
      <div className="mx-auto px-4 sm:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link
            to="/"
            className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400 hover:from-sky-300 hover:to-blue-300 transition-all"
          >
            MST
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            to="/"
            className="text-slate-200 hover:text-sky-400 transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            to="/trending"
            className="text-slate-200 hover:text-sky-400 transition-colors font-medium"
          >
            Packages
          </Link>
          <Link
            to="/about-us"
            className="text-slate-200 hover:text-sky-400 transition-colors font-medium"
          >
            About Us
          </Link>
          <Link
            to="/gallery"
            className="text-slate-200 hover:text-sky-400 transition-colors font-medium"
          >
            Gallery
          </Link>
          <Link
            to="/our-mission"
            className="text-slate-200 hover:text-sky-400 transition-colors font-medium"
          >
            Our Mission
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/Login"
            className="bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white py-2 px-6 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-sky-500/20"
          >
            Login
          </Link>
          <button
            onClick={handleLogout}
            className="text-slate-200 hover:text-sky-400 p-2 rounded-full transition-colors"
          >
            <i className="fa-solid fa-right-from-bracket text-lg"></i>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="block md:hidden text-2xl text-white focus:outline-none hover:text-sky-400 transition-colors"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-slate-900/95 backdrop-blur-sm text-white space-y-4 py-6 px-6">
          <Link
            to="/"
            className="block py-2 hover:text-sky-400 transition-colors"
            onClick={toggleMenu}
          >
            Home
          </Link>

          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="w-full text-left py-2 flex justify-between items-center hover:text-sky-400 transition-colors"
            >
              Packages
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-5 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <ul className="pl-4 mt-2 space-y-3 border-l-2 border-slate-700">
                <li>
                  <Link
                    to="/trending/monthly"
                    className="block py-1 hover:text-sky-400 transition-colors"
                    onClick={toggleMenu}
                  >
                    Monthly
                  </Link>
                </li>
                <li>
                  <Link
                    to="/trending/yearly"
                    className="block py-1 hover:text-sky-400 transition-colors"
                    onClick={toggleMenu}
                  >
                    Yearly
                  </Link>
                </li>
                <li>
                  <Link
                    to="/trending/weekly"
                    className="block py-1 hover:text-sky-400 transition-colors"
                    onClick={toggleMenu}
                  >
                    Weekly
                  </Link>
                </li>
                <li>
                  <Link
                    to="/trending/popular"
                    className="block py-1 hover:text-sky-400 transition-colors"
                    onClick={toggleMenu}
                  >
                    Popular
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <Link
            to="/about-us"
            className="block py-2 hover:text-sky-400 transition-colors"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            to="/gallery"
            className="block py-2 hover:text-sky-400 transition-colors"
            onClick={toggleMenu}
          >
            Gallery
          </Link>
          <Link
            to="/our-mission"
            className="block py-2 hover:text-sky-400 transition-colors"
            onClick={toggleMenu}
          >
            Our Mission
          </Link>

          <div className="pt-4 border-t border-slate-700">
            <Link
              to="/contact-us"
              className="block w-full bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white py-3 px-6 text-center rounded-full font-medium transition-all transform hover:scale-105"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
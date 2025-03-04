import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-800 to-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
              MST Travels
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Crafting extraordinary journeys that connect you with the world's wonders.
              Your adventure begins with us.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-200 mb-4">Explore</h3>
            <ul className="space-y-3">
              {['Home', 'Destinations', 'Packages', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-sky-400 transition-colors text-sm flex items-center group"
                  >
                    <span className="w-2 h-px bg-sky-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-slate-200 mb-4">Connect</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@msttravels.com
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 000 000 000
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-sky-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                123 abc abcd<br />
                abc City, EX 12345
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-slate-200 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="p-2 rounded-lg bg-slate-700/50 hover:bg-sky-500/20 transition-all group"
                >
                  <i className={`fab fa-${platform} text-slate-400 group-hover:text-sky-400 text-lg`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-700/50 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} MST Travels. All rights reserved.<br />
            <span className="block mt-1 text-xs">Crafted with ♡ by AS@bariya</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
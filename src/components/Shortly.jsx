import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTourPackages } from '../redux/ShortlyData';
import { Link } from 'react-router-dom';

const TourPackageSelect = () => {
  const dispatch = useDispatch();
  const { weekly, monthly, yearly, loading, error } = useSelector((state) => state.tour);
  const [selectedPackage, setSelectedPackage] = useState('weekly');

  useEffect(() => {
    dispatch(fetchTourPackages());
  }, [dispatch]);

  const getPackageData = () => {
    switch (selectedPackage) {
      case 'weekly': return weekly;
      case 'monthly': return monthly;
      case 'yearly': return yearly;
      default: return [];
    }
  };

  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
          Explore Our Packages
        </h2>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <select
              className="w-full py-3 pl-6 pr-12 bg-slate-800/50 border border-slate-700/50 rounded-xl text-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 appearance-none transition-all"
              value={selectedPackage}
              onChange={(e) => setSelectedPackage(e.target.value)}
            >
              <option value="weekly" className="bg-slate-800">Weekly Packages</option>
              <option value="monthly" className="bg-slate-800">Monthly Packages</option>
              <option value="yearly" className="bg-slate-800">Yearly Packages</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-6">
              <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-red-900/30 border border-red-700/50 rounded-xl text-red-400 text-center">
            Error loading packages: {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-sky-500 border-t-transparent"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getPackageData().map((pkg, index) => (
              <div key={index} className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-sky-500/30 transition-all transform hover:-translate-y-1">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-200 group-hover:text-sky-400 transition-colors">
                    {pkg.place}
                  </h3>
                  <p className="text-slate-400 text-sm mt-2">{pkg.description}</p>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-sm text-slate-400">Duration</p>
                    <p className="font-medium text-slate-200">{pkg.day} days</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-400">Starting from</p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                      ₹{pkg.Price}
                    </p>
                  </div>
                </div>

                <Link
                  to="/Book"
                  className="w-full inline-block text-center bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-all transform hover:scale-101 shadow-lg hover:shadow-sky-500/20"
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TourPackageSelect;
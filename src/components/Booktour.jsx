import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postFormData } from '../redux/BookSlice';
import { jsPDF } from 'jspdf';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    pincode: '',
    mnumber: '',
    from: '',
    to: '',
  });

  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  if (!token) {
    navigate('/login');
  }

  const HandleReset = () => {
    setFormData({ name: '', pincode: '', mnumber: '', from: '', to: '' });
  };

  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.form);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postFormData(formData));
    generatePDF(formData);
    HandleReset();
  };

  const generatePDF = (data) => {
    const doc = new jsPDF('p', 'mm', 'a4');

    doc.setFillColor(15, 23, 42);
    doc.rect(0, 0, 210, 40, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.setTextColor(255, 255, 255);
    doc.text('MST Travel Confirmation', 20, 25);

    doc.setFillColor(255, 255, 255);
    doc.rect(20, 50, 170, 200, 'F');
    doc.setFontSize(12);
    doc.setTextColor(15, 23, 42);

    const currentDate = new Date();
    doc.text(`Submission Date: ${currentDate.toLocaleDateString()}`, 20, 60);
    doc.text(`Submission Time: ${currentDate.toLocaleTimeString()}`, 20, 70);

    doc.setFontSize(14);
    doc.text('Travel Details:', 20, 90);
    doc.setDrawColor(225, 229, 235);
    doc.line(20, 95, 190, 95);

    doc.setFontSize(12);
    const details = [
      `Traveler's Name: ${data.name}`,
      `Contact Number: ${data.mnumber}`,
      `Departure From: ${data.from}`,
      `Destination To: ${data.to}`,
      `Area Pincode: ${data.pincode}`
    ];

    details.forEach((item, index) => {
      doc.text(item, 25, 110 + (index * 15));
    });

    // Footer
    doc.setFontSize(10);
    doc.setTextColor(100, 116, 139);
    doc.text('Thank you for choosing MST Travel Services', 20, 280);
    doc.text('Contact: +1 (555) 123-4567 | Email: info@msttravel.com', 20, 285);

    doc.save('mst_travel_confirmation.pdf');
  };

  return (
    <div className='pt-32 pb-20 bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen'>
      <div className="p-8 max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
          Travel Booking Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mnumber"
                value={formData.mnumber}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Departure From
                </label>
                <select
                  name="from"
                  value={formData.from}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 appearance-none bg-select-arrow bg-no-repeat bg-right-4"
                  required
                >
                  <option value="" disabled>Select departure</option>
                  <option value="New York">New York</option>
                  <option value="London">London</option>
                  <option value="Tokyo">Tokyo</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Destination To
                </label>
                <select
                  name="to"
                  value={formData.to}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 appearance-none bg-select-arrow bg-no-repeat bg-right-4"
                  required
                >
                  <option value="" disabled>Select destination</option>
                  <option value="New York">New York</option>
                  <option value="London">London</option>
                  <option value="Tokyo">Tokyo</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Area Pincode
              </label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-all transform hover:scale-101 shadow-lg hover:shadow-sky-500/20"
          >
            {status === 'loading' ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Processing...
              </span>
            ) : (
              'Confirm Booking'
            )}
          </button>
        </form>

        {status === 'succeeded' && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center text-green-700">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Booking confirmed successfully!
          </div>
        )}

        {status === 'failed' && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center text-red-700">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            Error: {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;

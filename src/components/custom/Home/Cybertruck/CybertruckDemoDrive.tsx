'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/common/Navbar';

const CybertruckDemoDrive = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    location: '',
    comments: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <img
          src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-Hero-Desktop-v2.png"
          alt="Cybertruck"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Schedule Your Cybertruck Demo Drive</h1>
          <p className="text-xl">Experience the future of electric vehicles</p>
        </div>
      </div>

      {/* Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto py-16 px-4"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField name="firstName" value={formData.firstName} handleChange={handleChange} label="First Name" />
            <InputField name="lastName" value={formData.lastName} handleChange={handleChange} label="Last Name" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField name="email" type="email" value={formData.email} handleChange={handleChange} label="Email" />
            <InputField name="phone" type="tel" value={formData.phone} handleChange={handleChange} label="Phone" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField name="preferredDate" type="date" value={formData.preferredDate} handleChange={handleChange} label="Preferred Date" />
            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Time</label>
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="">Select a time</option>
                <option value="morning">Morning (9AM - 12PM)</option>
                <option value="afternoon">Afternoon (12PM - 4PM)</option>
                <option value="evening">Evening (4PM - 7PM)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Preferred Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
              placeholder="Enter your preferred location"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Additional Comments</label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Schedule Demo Drive
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

const InputField = ({ 
  name, 
  label, 
  value, 
  handleChange, 
  type = 'text' 
}: {
  name: string;
  label: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      required
    />
  </div>
);

export default CybertruckDemoDrive;

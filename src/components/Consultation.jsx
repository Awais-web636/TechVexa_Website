import React from 'react';
import img from '../assets/img.pg.webp'; // Replace with your image path

const Consultation = () => {
  return (
    <div
      className="h-[600px] mb-12 bg-cover bg-center flex items-center relative p-12 pb-[2px]"
      style={{
        backgroundImage: `url(${img})`,
      }} id='offers'
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>

      {/* Content */}
      <div className="relative text-white p-6  sm:p-12 bg-[#122d49] bg-opacity-85 w-full max-w-xl rounded-3xl mx-4  sm:ml-8 sm:mr-auto">
        <div className="flex items-center mb-4">
          {/* Horizontal Line */}
          <div className="w-12 h-0.5 bg-yellow-400 mr-3"></div>
          {/* Get Started Text */}
          <p className="text-yellow-400 text-xs sm:text-sm font-medium">GET STARTED</p>
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold leading-tight text-left">
          Let's Get Free
          <br />
          Consultation Today.
        </h1>
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-200 text-left">
          Take the first step towards success by scheduling your free consultation with us today!
        </p>
        <button className="h-12 mt-6 bg-orange-500 px-6 py-2 rounded-full text-white hover:bg-red-700 w-full sm:w-auto">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Consultation;

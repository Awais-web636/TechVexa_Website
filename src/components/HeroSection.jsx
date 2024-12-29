import React from 'react';


const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center flex items-center justify-center text-center text-white overflow-hidden px-6 py-16 md:py-36"  // Adjusted padding for different screen sizes
      style={{ backgroundImage: 'url(/src/assets/bg-image.jpg)' }} id='home'
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#003049] bg-opacity-60"></div>

      {/* Background Animation */}
      <div className="absolute inset-0 bg-cover bg-center"></div>

      {/* Content */}
      <div className="relative z-10 space-y-6">
        {/* Main Heading with Typing Animation */}
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          <span>Welcome to </span>
          <span className="text-[#FCBF49] animate-typing">TechVexa</span>
        </h1>

        {/* Sub Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Comprehensive IT Solutions for Digital Growth
        </h2>

        {/* Content Paragraph */}
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
          TechVexa specializes in delivering advanced IT services and innovative solutions that help businesses grow and stay competitive in the digital world. By combining technology with strategic expertise, we empower organizations to optimize operations and drive innovation.
        </p>

        {/* Services Button */}
        <button className="bg-[#F77F00] py-3 px-8 text-lg rounded-full shadow-lg hover:bg-gradient-to-l hover:bg-[#D62828] transform transition-all duration-300 hover:scale-105">
          OUR SERVICES
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

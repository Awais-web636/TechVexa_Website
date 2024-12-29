import React, { useState, useEffect } from "react";
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { animateScroll as scroll, Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  // Handle sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);  // Activate sticky navbar when scrollY > 0
      } else {
        setSticky(false); // Deactivate sticky navbar when at top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = () => {
    setIsOpen(false); // Close mobile menu after clicking on an item
  };

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#003049] text-white py-5">
        <div className="max-w-7xl mx-auto px-24">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-6 text-sm ">
            {/* Email and Phone */}
            <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <FaEnvelope />
                <span>info@techvexa.com</span>
              </div>
              <div className="border-t sm:border-l border-gray-400 sm:h-4 h-auto mx-6 sm:mx-0"></div>
              <div className="flex items-center space-x-2">
                <FaPhoneAlt />
                <span>+3670 342 1589</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6 text-lg">
              <a href="#" className="hover:text-gray">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-gray">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-gray">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`bg-white shadow-md ${sticky ? 'fixed top-0 left-0 w-full z-50' : ''}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-24">
          {/* Logo */}
          <a href="#">
            <img src="/src/assets/logo.png" alt="TechVexa" className="h-20 w-auto" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex justify-center items-center w-full">
            <div className="flex items-center gap-8 text-lg ">
              <Link to="home" smooth={true} duration={500} offset={-70} className="text-gray-700 font-semibold hover:text-[#D62828] transition duration-300 cursor-pointer" onClick={handleMenuItemClick}>
                HOME
              </Link>
              <Link to="about" smooth={true} duration={500} offset={-70} className="text-gray-700 font-semibold hover:text-[#D62828] transition duration-300 cursor-pointer" onClick={handleMenuItemClick}>
                ABOUT
              </Link>
              <Link to="services" smooth={true} duration={500} offset={-70} className="text-gray-700 font-semibold hover:text-[#D62828] transition duration-300 cursor-pointer" onClick={handleMenuItemClick}>
                SERVICES
              </Link>
              <Link to="offers" smooth={true} duration={500} offset={-70} className="text-gray-700 font-semibold hover:text-[#D62828] transition duration-300 cursor-pointer" onClick ={handleMenuItemClick}>
                OFFERS
              </Link>
              <div className="relative group">
                <button className="flex items-center text-gray-700 font-semibold hover:text-[#D62828] transition duration-300 cursor-pointer">
                  OTHERS
                  <IoMdArrowDropdown className="ml-1 text-lg" />
                </button>
                <div className="absolute top-full left-0 w-40 bg-[#003049] shadow-lg rounded-lg p-2 group-hover:block hidden z-50">
                  <Link to="pricing" smooth={true} duration={500} offset={-70} className="block text-white py-3 px-4 hover:bg-[#D62828] rounded cursor-pointer" onClick={handleMenuItemClick}>PRICING</Link>
                  <Link to="reviews" smooth={true} duration={500} offset={-70} className="block text-white py-3 px-4 hover:bg-[#D62828] rounded cursor-pointer" onClick={handleMenuItemClick}>REVIEWS</Link>
                  <Link to="value" smooth={true} duration={500} offset={-70} className="block text-white py-3 px-4 hover:bg-[#D62828] rounded cursor-pointer" onClick={handleMenuItemClick}>VALUE</Link>
                  <Link to="contact" smooth={true} duration={500} offset={-70} className="block text-white py-3 px-4 hover:bg-[#D62828] rounded cursor-pointer" onClick={handleMenuItemClick}>CONTACT</Link>
                  <Link to="blog" smooth={true} duration={500} offset={-70} className="block text-white py-3 px-4 hover:bg-[#D62828] rounded cursor-pointer" onClick={handleMenuItemClick}>BLOG</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Button */}
          <button className="flex font-mono items-center justify-center bg-[#D62828] text-white py-2 px-6 rounded-lg shadow-lg hover:bg-buttonColor transform hover:translate-y-[-5px] transition duration-300 whitespace-nowrap">
            CONTACT US
            <FaArrowRight className="ml-2" />
          </button>

          {/* Hamburger Menu */}
          <button className="lg:hidden text-3xl text-gray" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="lg:hidden bg-[#003049] px-6 py-6 space-y-10 flex flex-col items-center justify-center text-white">
            <li><Link to="home" smooth={true} duration={500} offset={-70} className="block" onClick={handleMenuItemClick}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={500} offset={-70} className="block" onClick={handleMenuItemClick}>About</Link></li>
            <li><Link to="services" smooth={true} duration={500} offset={-70} className="block" onClick={handleMenuItemClick}>Services</Link></li>
            <li><Link to="offers" smooth={true} duration={500} offset={-70} className="block" onClick={handleMenuItemClick}>Offers</Link></li>
            <li><Link to="pricing" smooth={true} duration={500} offset={-70} className="block" onClick={handleMenuItemClick}>Pricing</Link></li>
            <li><Link to="reviews" smooth={true} duration={500} offset={-70} className="block" onClick={handleMenuItemClick}>Reviews</Link></li>
            <li><Link to="value" smooth={true} duration={500} offset={-70} className="block" onClick={handleMenuItemClick}>Value</Link></li>
            <li><Link to="blog" smooth={true} duration={500} offset={-70} className="block" onClick={handleMenuItemClick}>Blog</Link></li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
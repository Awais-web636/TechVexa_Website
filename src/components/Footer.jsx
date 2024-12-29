import React from 'react';

import { FaCaretRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  const pages = ['Home', 'About', 'Our Services', 'Our Projects', 'Contact us'];
  const items = [
    'Privacy Policy',
    'Term Of Service',
    'Refund Policy',
    'Disclaimer',
    'GDPR'
  ];
  return (
    <div>
      <footer className="bg-[#002333] text-white py-8">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Tech Vexa</h2>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">
                  <FaFacebookF className="w-6 h-6" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaInstagram className="w-6 h-6" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaLinkedin className="w-6 h-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Pages</h3>
              <ul className="space-y-2">
                {pages.map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-gray-300 flex items-center">
                      <span className="mr-2"><FaCaretRight /></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Uniquenesses</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-gray-300 flex items-center">
                      <span className="mr-2"><FaCaretRight /></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Head Office Location</h3>
              <p className="mb-6">Dunaújváros, Dózsa György út 33, Hungary</p>

              <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
              <p>Monday - Friday 08 AM - 10 PM</p>
            </div>
          </div>

            <div className="border-t border-gray-700 mt-12 pt-8 text-center">
              <p>© 2024 <span className="text-[#ff4444]">Tech Vexa</span></p>
            </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;
import React from 'react';
import bgImg from '../assets/bgImg.webp';
import LgImg from '../assets/LgImg.webp';
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { BsClock } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="full-width mt-[500px]" id='contact'>
      {/* Section 1 */}
      <div
        className=" bg-cover bg-center h-[100vh] md:h-[50vh] lg:h-[70vh] flex flex-col justify-center items-center px-4 md:px-8 lg:px-12"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 48, 73, 0.7), rgba(0, 48, 70, 0.7)), url(${bgImg})`,
        }}
      >
        <div className="flex items-center text-center">
          <div className="border-t border-[#FCBF49] w-16 mr-2 mb-8 mt-16"></div>
          <h3 className="text-[18px] font-semibold text-[#FCBF49] uppercase mb-8 mt-16">Partnership</h3>
        </div>
        <div className="mt-4 text-center mb-6">
          <p className="text-2xl md:text-3xl lg:text-5xl text-white font-semibold">
            Let’s Be Our Partner & Get Biggest
          </p>
          <p className="text-2xl md:text-3xl lg:text-5xl text-white font-semibold">
            Business Offers
          </p>
        </div>
        <button className="bg-[#F77F00] text-white w-full max-w-[200px] uppercase text-xs md:text-sm lg:text-base font-semibold py-3 md:py-4 px-4 md:px-6 rounded-full hover:bg-[#D62828] transition-transform transform hover:translate-y-[-3px]">
          Contact Us
        </button>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full px-4 md:px-8 lg:px-20 py-10 gap-10 bg-white">
        <div className="w-full lg:w-1/2">
          <img
            src={LgImg}
            alt="Collaboration"
            className="rounded-lg shadow-md object-cover mt-9 w-[600px] h-[550px]"
          />
        </div>

        <div className="w-full lg:w-1/2">
          {/* Title */}
          <div className="mb-4">
            <div className="flex items-center mt-14">
              <div className="border-t border-[#F77F00] w-16 mr-2"></div>
              <h4 className="text-[#F77F00] font-semibold text-[18px] uppercase text-center">
                Stay Tuned
              </h4>
            </div>
            <h1 className="text-[24px] md:text-[35px] lg:text-[40px] font-bold text-[#003049] mt-4 ml-6">
              Let’s Connect and Collaborate With Our IT Team!
            </h1>
          </div>

          <p className="text-[#7F7F7F] mt-5 text-[16px] md:text-[20px] lg:text-[22px] ml-7">
            Join us to connect and collaborate with our expert IT team for innovative solutions and support!
          </p>

          <div className="bg-gray-50 rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div>
              <h5 className="font-bold text-[#003049] text-[20px]">Head Quarter</h5>
              <p className="text-[#7F7F7F] text-[18px]">Dunaújváros, Dózsa György út 33, Hungary</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center text-[#7F7F7F] text-[18px] space-x-3">
                <AiOutlineMail className="text-[#F77F00] text-[18px]" />
                <span>info@techvexa.com</span>
              </div>
              <div className="flex items-center text-[#7F7F7F] text-[18px] space-x-3">
                <FiPhoneCall className="text-[#F77F00] text-[18px]" />
                <span>+3670 342 1589</span>
              </div>
              <div className="flex items-center text-[#7F7F7F] text-[18px] space-x-3">
                <BsClock className="text-[#F77F00] text-[18px]" />
                <span>Monday – Friday</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
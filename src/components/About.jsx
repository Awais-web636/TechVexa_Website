import React from "react";
import LeftImg from '../assets/LeftImg.webp';
import Smallmg from '../assets/Smallmg.webp';
import RightImg from '../assets/RightImg.webp';
import { FaPhoneAlt, FaCheck } from 'react-icons/fa';

const AboutSection = () => {
   return (
    <div className="full-width" id="about">
      {/* Section 1 */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:items-start lg:justify-between p-6 lg:p-12 space-y-6 lg:space-y-0">


        <div className="relative lg:w-1/2 flex flex-col items-center lg:items-start h-[550px] mb-4">
          <img
            src={LeftImg}
            alt="Main"
            className="max-w-[100%] h-auto lg:h-[450px] rounded-3xl shadow-lg mt-6 lg:mr-9"
          />

          <div className="absolute bottom-[-120px] right-0 md:right-[-20px] lg:bottom-[-170px] lg:right-[-20px]">
            <img
              src={Smallmg}
              alt="Smaller"
              className="w-60 md:w-72 h-72 md:h-80 rounded-3xl shadow-lg border-[10px] border-white"
            />
          </div>

          <div className="absolute bottom-[-60px] right-10 lg:right-40 bg-white rounded-2xl shadow-lg p-5 md:p-7 flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-[#F77F00] text-2xl" />
              <div>
                <p className="text-[#003049] text-[18px] md:text-[20px] font-bold">
                  Telephone
                </p>
                <p className="text-[#7F7F7F] text-[15px] md:text-base font-medium">
                  +3670 342 1589
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-8">

          <div className="flex items-center mt-4 lg:mt-9">
            <div className="border-t border-[#F77F00] w-16 mr-2"></div>
            <h3 className="text-[#F77F00] font-semibold text-[12px] md:text-[18px] uppercase">
              WHO WE ARE
            </h3>
          </div>

          <h1 className="text-[24px] md:text-[36px] lg:text-[43px] font-bold text-[#003049] mt-4 ml-0 md:ml-5">
            Your Trusted IT Solution Partners
          </h1>


          <p className="text-[#7F7F7F] mt-5 md:text-[19px] ml-0 md:ml-5">
            Our approach focuses on understanding each client's specific needs,
            allowing us to create tailored strategies that address their unique
            challenges and drive growth.
          </p>
          <p className="text-[#7F7F7F] mt-4 md:text-[19px] ml-0 md:ml-10">
            With expertise across various industries, we offer comprehensive services
            designed to optimize operations, enhance efficiency, and support
            long-term success.
          </p>


          <ul className="space-y-6 mt-8 ml-[17px] inline">
            <li className="flex items-start">
              <div className="w-12 md:w-16 h-12 md:h-16 bg-[#F77F00] rounded-full flex items-center justify-center text-white">
                <FaCheck className="text-white text-[20px] md:text-[25px]" />
              </div>
              <div>
                <span className="font-bold text-[#003049] text-sm md:text-[20px] ml-4 md:ml-10">
                  Reliable Technology Solutions
                </span>
                <p className="text-[#7F7F7F] text-sm md:text-[18px] mt-2 ml-4 md:ml-10">
                  Reliable technology solutions tailored to your business needs.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-12 md:w-16 h-12 md:h-16 bg-[#F77F00] rounded-full flex items-center justify-center text-white">
                <FaCheck className="text-white text-[20px] md:text-[25px]" />
              </div>
              <div>
                <span className="font-bold text-[#003049] text-sm md:text-[20px] ml-4 md:ml-10">
                  Expert Guidance For Success
                </span>
                <p className="text-[#7F7F7F] text-sm md:text-[18px] mt-2 ml-4 md:ml-10">
                  Supporting your growth and success with expert guidance.
                </p>
              </div>
            </li>
          </ul>

          <button className="bg-[#D62828] text-white w-full max-w-[200px] uppercase text-xs md:text-sm lg:text-base font-semibold py-3 md:py-4 px-4 md:px-6 rounded-full mt-6 md:mt-8 hover:bg-[#F77F00] transition-transform transform hover:translate-y-[-3px]">
            Learn More
          </button>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-[#003049] px-6 py-10 md:px-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

          {/* Left Section */}
          <div>
            <div className="flex items-center">
              <div className="border-t border-[#FCBF49] font-bold w-16 mr-2"></div>
              <h3 className="text-[#FCBF49] font-semibold text-[18px] uppercase text-center">
                We’re Professionals
              </h3>
            </div>

            <h2 className="text-[20px] md:text-[25px] lg:text-[30px] font-bold text-white mt-7 leading-tight">
              Our IT Professionals Bring Years Of Experience Supporting Businesses
            </h2>

            <p className="mt-6 md:text-[18px] text-[#bdbdbd] bg-[#003040] p-10 rounded-3xl">
              We focus on understanding each client’s unique needs to provide scalable, efficient, and innovative IT services that drive growth and success.
            </p>
          </div>

          {/* Centered Content */}
          <div className="md:col-span-1 space-y-3 pt-10 sm:pt-20 md:pt-20 lg:pt-20 px-4 lg:px-8 mx-auto lg:mx-0">
            <div>
              <h4 className="text-white text-xl sm:text-2xl md:text-[20px] lg:text-3xl font-bold mt-[80px]">
                Corporate IT Solutions
              </h4>
              <p className="text-[#bdbdbd] text-base sm:text-lg md:text-[18px] lg:text-1xl mt-3">
                Corporate IT Solutions for Enhanced Business Efficiency.
              </p>
            </div>
            <div>
              <h4 className="text-white text-xl sm:text-2xl md:text-[20px] lg:text-3xl font-bold mt-[20px]">
                Clients Satisfying
              </h4>
              <p className="text-[#bdbdbd] text-base sm:text-lg md:text-[18px] lg:text-1xl mt-3">
                Delivering Exceptional IT Solutions for Client Satisfaction.
              </p>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="w-full">
            <img
              src={RightImg}
              alt="Office Meeting"
              className="rounded-lg shadow-lg w-full h-[300px] md:h-[400px] object-cover mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
   );
};

export default AboutSection;
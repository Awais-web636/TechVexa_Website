import React from "react";
import InfoCard from "./InfoCard";
import pic2 from '../assets/pic-2.webp';
import { FaRegCalendarAlt, FaSmile, FaHandshake } from "react-icons/fa"; // Importing icons from react-icons

const ITConsultingSection = () => {
  return (
    <div className="bg-gray-50 py-10 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        {/* Left Side - Image */}
        <div className="relative flex flex-col items-center">
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={pic2}
              alt="Team working"
              className="w-full h-auto max-w-[550px] rounded-[20px]"
            />
          </div>
        </div>

        {/* Right Side - Content and Info Cards */}
        <div className="w-full">
          <div className="mb-5 mt-2">
            <div className="flex items-center justify-start">
              <div className="border-t-2 border-orange-600 w-16 mr-2"></div>
              <h1 className="text-center text-[20px] font-bold mb-2 text-[#F77F00]">
                Why Choose Us
              </h1>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Strategic IT Consulting And Guidance To Enhance Your Business Success
            </h1>
          </div>
          <p className="text-gray-600 mb-4 text-base md:text-lg">
            Choose us for our expertise, tailored solutions, and unwavering
            commitment to delivering excellence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-[#003049] rounded-[20px] w-full h-auto p-4">
            <InfoCard
              icon={<FaRegCalendarAlt />} // Using React Icon
              title="4 Years Business"
              description="Established Business with Four Years' Experience"
            />
            <InfoCard
              icon={<FaSmile />} // Using React Icon
              title="97% Satisfied Clients"
              description="Achieving 97% Client Satisfaction Rate"
            />
            <InfoCard
              icon={<FaHandshake />} // Using React Icon
              title="Trusted Partnerships"
              description="Building Trust with Our Clients"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITConsultingSection;
// components/ServiceCard.jsx
import React from "react";

const ServiceCard = ({ Icon, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-[20px] p-6 hover:shadow-lg transition-transform transform hover:scale-105 hover:-translate-y-1 hover:bg-[#003049] cursor-pointer group">
      <div className="text-orange-500 text-4xl mb-4">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-white transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 group-hover:text-white transition-colors">
        {description}
      </p>
      <a
        href="#"
        className="text-orange-500 font-medium mt-4 inline-block transition-colors"
      >
        Learn More →
      </a>
    </div>
  );
};

export default ServiceCard;
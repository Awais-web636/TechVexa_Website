// components/ServicesSection.jsx
import React from "react";
import {
  FaBusinessTime,
  FaCode,
  FaBullhorn,
  FaMobileAlt,
  FaPalette,
  FaChartLine,
} from "react-icons/fa";
import ServiceCard from "../Components/ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      Icon: FaBusinessTime,
      title: "Business Consulting",
      description:
        "Unlock your business potential with expert IT consulting services. Drive success and efficiency.",
    },
    {
      Icon: FaCode,
      title: "Web Development",
      description:
        "Custom web development with a focus on optimization and user-friendly design.",
    },
    {
      Icon: FaChartLine,
      title: "Digital Marketing",
      description:
        "Enhance your online presence with tailored SEO and social media strategies.",
    },
    {
      Icon: FaMobileAlt,
      title: "App Development",
      description:
        "Crafting ideas into digital solutions that are intuitive and engaging.",
    },
    {
      Icon: FaPalette,
      title: "Designing",
      description:
        "Transform your brand with modern graphic and UX design strategies.",
    },
    {
      Icon: FaBullhorn,
      title: "Social Media Management",
      description:
        "Strengthen your online relationships and track performance efficiently.",
    },
  ];

  return (
    <section className="py-5 bg-gray-50 pt-8" id="services">
       <div className="flex items-center justify-center mt-14">
          <div className="border-t-2 border-orange-600 w-16 mr-2"></div>
          <h1 className="text-center text-[20px] font-bold text-[#F77F00]">
            Our Services
          </h1>
        </div>
      <h2 className="text-3xl font-bold mb-10 text-center">
        Don’t Worry We Give Best <br /> Service With Guarantee
      </h2>

      <div className="container mx-auto flex flex-wrap items-center px-4 md:px-8 lg:px-16">
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                Icon={service.Icon}
                title={service.title}
                description={service.description}
                className="flex flex-col justify-between h-full p-4 bg-white shadow-md rounded-lg" // Use h-full for flexible height
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
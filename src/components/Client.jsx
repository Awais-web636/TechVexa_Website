import React from 'react';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.webp';
import img4 from '../assets/img4.webp';


const Client = () => {
  return (
    <>
      <div className="mb-8">
        {/* Background Image */}
        <img className="absolute" src={img2} alt="" />

        {/* Container */}
        <div className="bg-white top-[390px] relative rounded-3xl h-auto p-8 mx-5 shadow-lg">
          {/* Content */}
          <div className="p-6">
            {/* Line and Heading Side by Side */}
            <div className="flex items-center">
              {/* Horizontal Line */}
              <div className="w-12 border-t-2 border-orange-500 mr-3"></div>

              {/* First Heading */}
              <h1 className="text-orange-500 text-lg font-bold">CLIENT TESTIMONIALS</h1>
            </div>

            {/* Second Heading Below */}
            <h1 className="text-[#1B3B5A] text-3xl font-bold mt-2">
              Discover What Our Client Says.
            </h1>
          </div>

          {/* Cards Section */}
          <div className="grid md:grid-cols-2 gap-8 p-12 h-70">
            {/* Card 1 */}
            <div className="bg-gray-50 rounded-3xl shadow-md p-8">
              {/* Five-Star Rating */}
              <div className="flex items-center mb-12">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927a1 1 0 011.902 0l1.267 3.905a1 1 0 00.95.69h4.11c.97 0 1.372 1.24.588 1.81l-3.327 2.415a1 1 0 00-.364 1.118l1.267 3.905c.306.944-.755 1.719-1.539 1.118L10 13.349l-3.327 2.415c-.784.601-1.845-.174-1.539-1.118l1.267-3.905a1 1 0 00-.364-1.118L2.71 9.332c-.784-.57-.382-1.81.588-1.81h4.11a1 1 0 00.95-.69l1.267-3.905z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-8">
                “Thanks to Tech Vexa, we seamlessly transitioned to a remote
                working environment without any concerns. Their team is
                professional and dedicated to customer service.”
              </p>

              {/* Profile Section */}
              <div className="flex items-center">
                <img
                  src={img4}
                  alt="Client"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-[#1B3B5A] font-bold">Mr. John Doe</h2>
                  <p className="text-orange-500 text-sm">Director</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 rounded-3xl shadow-md p-12 h-70">
              {/* Five-Star Rating */}
              <div className="flex items-center mb-8">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927a1 1 0 011.902 0l1.267 3.905a1 1 0 00.95.69h4.11c.97 0 1.372 1.24.588 1.81l-3.327 2.415a1 1 0 00-.364 1.118l1.267 3.905c.306.944-.755 1.719-1.539 1.118L10 13.349l-3.327 2.415c-.784.601-1.845-.174-1.539-1.118l1.267-3.905a1 1 0 00-.364-1.118L2.71 9.332c-.784-.57-.382-1.81.588-1.81h4.11a1 1 0 00.95-.69l1.267-3.905z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-8">
                “Tech Vexa implemented a powerful platform that ensured we
                experienced no service interruptions when our employees shifted
                to remote work.”
              </p>

              {/* Profile Section */}
              <div className="flex items-center">
                <img
                  src={img3}
                  alt="Client"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-[#1B3B5A] font-bold">Mr. Alan Mike</h2>
                  <p className="text-orange-500 text-sm">Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;

import React from 'react';

const Cart = () => {
  return (
    <>
      {/* First Section */}
      <div className="max-w-4xl mx-auto text-center px-4 py-8 sm:px-6 lg:px-8" id='pricing'>
      <div className="flex items-center justify-center mb-4">
        <div className="w-16 h-px bg-[#FF6B2B] mr-4"></div>
        <p className="text-[#FF6B2B] font-semibold tracking-wide uppercase">
          PRICING PACKAGE
        </p>

      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B3B5A] leading-tight">
        Don't Worry We Are Give Best
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B3B5A] leading-tight">Service With Guarantee.</h2>
      </h2>
    </div>

    </>
  );
};

export default Cart;

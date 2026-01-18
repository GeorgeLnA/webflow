import React from "react";

export const ContactCTASection = () => {
  return (
    <section
      className="w-full py-12 lg:py-16 relative overflow-hidden bg-white"
      role="region"
      aria-label="Book a call section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <div className="space-y-3 lg:space-y-4">
              <h2 className="text-[#0b1c26] text-2xl sm:text-3xl lg:text-4xl font-light leading-tight">
                Book a call
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Speak directly with our team about your spa project
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center lg:justify-end">
            <a
              href="https://calendly.com/matt-boney/infinite-spa-consult"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 overflow-hidden font-medium text-[#0b1c26] transition-all duration-300 ease-out border-2 border-[#0b1c26] rounded-none shadow-lg hover:scale-105 active:scale-95 bg-transparent hover:bg-[#0b1c26] hover:text-white"
              aria-label="Book a call"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-[#0b1c26] opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative font-bold text-base sm:text-lg tracking-wider">Book a call</span>
              <svg className="relative w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    "Reserve your unit with a $5,000 production deposit",
    "Collaborate on custom design & development",
    "Approve designs → submit balance or choose financing/monthly payments",
    "Receive your spa, connect utilities (heating, plumbing, electrical)",
    "Open your doors to guests, residents, or clients",
    "Enjoy effortless wellness revenue"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-normal text-[#0d0c09] leading-tight mb-6">
            How It Works
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group p-8 border border-gray-200 hover:border-[#0b1c26] transition-all duration-300 hover:shadow-lg relative"
            >
              <div className="text-center">
                {/* Step Number */}
                <div className="w-12 h-12 bg-[#0b1c26] text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <p className="text-lg text-[#0d0c09] leading-relaxed group-hover:text-[#0b1c26] transition-colors" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  {step}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={() => window.open('https://buy.stripe.com/5kQcN5a6b7FVgWY9PIcwg00', '_blank')}
            className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition-all duration-300 ease-out bg-[#0b1c26] hover:bg-[#0b1c26]/90 rounded-none shadow-lg hover:scale-105 hover:shadow-[#0b1c26] hover:shadow-lg active:scale-95"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative font-medium text-lg tracking-wider">Reserve My Unit →</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

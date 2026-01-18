import React from 'react';

const WhyNowSection = () => {
  const reasons = [
    "Differentiate from competitors & increase rates",
    "Wellness is the fastest growing trend in hospitality & real estate, set to grow 100% by 2029 (Global Wellness Institute, 2025)",
    "Build long-term loyalty as a standout wellness destination"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-normal text-[#0d0c09] leading-tight mb-6">
            Why Now?
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group p-8 bg-[#0b1c26] text-white border border-[#0b1c26] hover:bg-white hover:text-[#0b1c26] transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-center">
                <p className="text-lg text-white group-hover:text-[#0b1c26] leading-relaxed mb-4 group-hover:text-[#0b1c26] transition-colors" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  {reason}
                </p>
                <div className="w-16 h-0.5 bg-white group-hover:bg-[#0b1c26] mx-auto group-hover:w-20 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNowSection;

import React from 'react';

const WhyUsSection = () => {
  const reasons = [
    "20+ years of combined hospitality & modular construction experience",
    "Award-winning designs by MIT engineers",
    "Built for the world's top luxury destinations",
    "Wellness experts influence every design",
    "Proven manufacturing partners with over 1,000 units delivered"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-normal text-[#0d0c09] leading-tight mb-6">
            Why Us?
          </h2>
        </div>

        {/* Reasons Grid - List with Numbers on Left */}
        <div className="space-y-4">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group flex items-center p-6 bg-[#0b1c26] text-white border border-[#0b1c26] hover:bg-white hover:text-[#0b1c26] transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex-shrink-0 mr-6">
                <div className="w-12 h-12 bg-white group-hover:bg-[#0b1c26] flex items-center justify-center transition-all duration-300">
                  <span className="text-xl font-bold text-[#0b1c26] group-hover:text-white transition-colors">
                    {index + 1}
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-lg text-white group-hover:text-[#0b1c26] leading-relaxed transition-colors" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  {reason}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

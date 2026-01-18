import React from 'react';

const WhoIsThisForSection = () => {
  const targetAudiences = [
    "Real Estate Developers",
    "Hotel & Resort Operators", 
    "Airbnb Owners & Managers",
    "Homeowners",
    "Gyms & Fitness Centers",
    "Wellness Spas"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-normal text-[#0d0c09] leading-tight mb-6">
            Who Is This For?
          </h2>
        </div>

        {/* Target Audiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {targetAudiences.map((audience, index) => (
            <div 
              key={index}
              className="group p-8 border border-gray-200 hover:border-[#0b1c26] transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-center">
                <h3 className="text-xl font-medium text-[#0d0c09] mb-4 group-hover:text-[#0b1c26] transition-colors">
                  {audience}
                </h3>
                <div className="w-16 h-0.5 bg-[#0b1c26] mx-auto group-hover:w-20 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default WhoIsThisForSection;

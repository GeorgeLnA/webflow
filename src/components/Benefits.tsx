import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      title: "Property Value Uplift",
      description: "Wellness amenities drive higher valuations via NOI improvement and cap‑rate compression",
    },
    {
      title: "Faster Leasing Velocity",
      description: "Achieve quicker lease‑ups and reduce vacancy with in‑demand wellness features",
    },
    {
      title: "NOI Uplift & Rent Premium",
      description: "Capture rent premiums and additional fees with low ongoing operating costs",
    },
    {
      title: "Low Operational Burden",
      description: "Modular design, easy maintenance, and integrated controls simplify operations",
    },
    {
      title: "Guest Satisfaction",
      description: "Proven uplift in guest satisfaction scores and reviews with premium wellness experiences",
    },
    {
      title: "Revenue Generation",
      description: "Increase ADR and occupancy through a differentiated, high‑margin wellness offering",
    },
    {
      title: "Rapid Installation",
      description: "Pre‑assembled units installed in under a day with minimal operational disruption",
    },
    {
      title: "Premium Wellness Experience",
      description: "Luxury spa amenities that strengthen brand positioning and guest loyalty",
    },
  ];

  return (
    <section id="benefits" className="py-16 lg:py-24 bg-[#0b1c26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white mb-6 lg:mb-8 leading-tight text-center lg:text-left">
            Benefits
          </h2>
          
          <div className="space-y-6 lg:space-y-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group border-l-2 border-white/30 pl-4 lg:pl-6">
                <div>
                  <h3 className="text-lg lg:text-xl font-medium text-white mb-2 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm lg:text-base text-white/80 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
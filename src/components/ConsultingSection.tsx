import React from "react";
import { Calculator } from 'lucide-react';

export const ProductCategoriesSection = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);
  
  // Calculator state
  const [calculatorType, setCalculatorType] = React.useState('developer'); // 'hotel' or 'developer'
  
  // Hotel inputs
  const [hotelRooms, setHotelRooms] = React.useState(200);
  const [currentADR, setCurrentADR] = React.useState(200);
  const [occupancyRate, setOccupancyRate] = React.useState(70);
  
  // Developer inputs
  const [units, setUnits] = React.useState(200);
  const [averageRent, setAverageRent] = React.useState(3500);
  const [unitsToRent, setUnitsToRent] = React.useState(20);
  
  // Calculate Hotel ROI
  const calculateHotelROI = () => {
    // Revenue calculations based on Excel model
    const adrIncrease = currentADR * 0.05; // 5% increase
    const occupancyIncrease = 0.03; // 3% lift
    const daysPerYear = 365;
    
    // Higher ADR benefit
    const higherADRRevenue = hotelRooms * (occupancyRate / 100) * adrIncrease * daysPerYear;
    
    // Higher occupancy benefit  
    const higherOccupancyRevenue = hotelRooms * occupancyIncrease * currentADR * daysPerYear;
    
    const totalAnnualRevenue = higherADRRevenue + higherOccupancyRevenue;
    
    // Annual costs
    const leaseCost = 3600 * 12; // $3,600/month
    const electricity = 1000;
    const maintenance = 6000; // $500/month
    const repairs = 500;
    const setupFee = 5000; // First year only
    
    const annualCosts = leaseCost + electricity + maintenance + repairs;
    const firstYearCosts = annualCosts + setupFee;
    
    return {
      totalAnnualRevenue: Math.round(totalAnnualRevenue),
      higherADRRevenue: Math.round(higherADRRevenue),
      higherOccupancyRevenue: Math.round(higherOccupancyRevenue),
      annualCosts,
      firstYearCosts,
      netReturn: Math.round(totalAnnualRevenue - annualCosts),
      firstYearNet: Math.round(totalAnnualRevenue - firstYearCosts),
      revparIncrease: Math.round((higherADRRevenue + higherOccupancyRevenue) / (hotelRooms * daysPerYear))
    };
  };
  
  // Calculate Developer ROI
  const calculateDeveloperROI = () => {
    // Revenue calculations based on Excel model
    const rentPremium = averageRent * 0.025; // 2.5% of average rent
    const grossRentIncrease = units * rentPremium * 12;
    const operatingExpenseRatio = 0.171; // Derived from Excel data
    const noiUplift = grossRentIncrease * (1 - operatingExpenseRatio);
    const capRate = 0.05; // 5% cap rate
    const propertyValueUplift = noiUplift / capRate;
    
    // Faster leasing benefit (7% increase in speed)
    const fasterLeasingRevenue = unitsToRent * (averageRent * 0.07);
    
    // Annual costs
    const leaseCost = 3000 * 12; // $3,000/month
    const electricity = 1000;
    const maintenance = 6000; // $500/month
    const repairs = 500;
    
    const annualCosts = leaseCost + electricity + maintenance + repairs;
    
    return {
      grossRentIncrease: Math.round(grossRentIncrease),
      noiUplift: Math.round(noiUplift),
      propertyValueUplift: Math.round(propertyValueUplift),
      fasterLeasingRevenue: Math.round(fasterLeasingRevenue),
      rentPremium: Math.round(rentPremium),
      annualCosts,
      netReturn: Math.round(noiUplift + fasterLeasingRevenue - annualCosts),
      totalBenefit: Math.round(propertyValueUplift + noiUplift + fasterLeasingRevenue)
    };
  };
  
  const hotelResults = calculateHotelROI();
  const developerResults = calculateDeveloperROI();

  // Benefits content varies by selected audience
  const benefitsHotel = [
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

  const benefitsDeveloper = [
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
  ];

  const benefitsForType = calculatorType === 'developer' ? benefitsDeveloper : benefitsHotel;

  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Use the actual item's offset rather than assuming equal widths
    const items = container.querySelectorAll<HTMLElement>('[data-gallery-item="true"]');
    const target = items[index];
    if (target) {
      container.scrollTo({ left: target.offsetLeft, behavior: 'smooth' });
      setCurrentIndex(index);
    }
  };

  const scrollNext = () => {
    const nextIndex = Math.min(currentIndex + 1, productCategories.length - 1);
    scrollToIndex(nextIndex);
  };

  const scrollPrev = () => {
    const prevIndex = Math.max(currentIndex - 1, 0);
    scrollToIndex(prevIndex);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const productCategories = [
    {
      id: 0,
      title: "INFINITESPA Experience",
      video: "/hero.mp4",
      titleParts: ["INFINITESPA", "Experience"],
    },
    {
      id: 1,
      title: "SLEEPBOX",
      image: "/airender1.png",
      titleParts: ["SLEEPBOX"],
    },
    {
      id: 7,
      title: "Mountain Haven",
      image: "/6_Photo - 1 (2).jpg",
      titleParts: ["Mountain", "Haven"],
    },
    {
      id: 6,
      title: "Tropical Paradise",
      image: "/airender4.png",
      titleParts: ["Tropical", "Paradise"],
    },
    {
      id: 3,
      title: "Alpine Sanctuary",
      image: "/airender2.png",
      titleParts: ["Alpine", "Sanctuary"],
    },
    {
      id: 5,
      title: "Waterfall Wellness",
      image: "/airender3.png",
      titleParts: ["Waterfall", "Wellness"],
    },
    {
      id: 4,
      title: "Modern Spa Retreat",
      image: "/airender6.png",
      titleParts: ["Modern", "Spa", "Retreat"],
    },
    {
      id: 8,
      title: "Luxury Wellness Oasis",
      image: "/6_Photo - 4 (1).jpg",
      titleParts: ["Luxury", "Wellness", "Oasis"],
    },
  ];

  return (
    <section
      className="w-full py-16 lg:py-24"
      style={{ backgroundColor: '#0b1c26' }}
      role="region"
      aria-labelledby="product-categories-heading"
    >
      <div className="ml-4 sm:ml-6 lg:ml-16 pr-4 sm:pr-6 lg:pr-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 lg:mb-12">
          <header className="text-left max-w-3xl">
            <h2
              id="product-categories-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight"
            >
              Infinite Spa — Luxury Wellness Ready
              Tomorrow, Not Next Year.
            </h2>
            <p className="mt-3 text-white/80 text-base sm:text-lg">
              Join Real Estate and Hospitality's #1 Trend With Infinite Spa. Modular and Mobile Wellness,
              Suitable For Any Environment.
            </p>
          </header>

          <nav
            className="flex gap-4 justify-start lg:justify-end"
            aria-label="Product navigation"
          >
            <button
              className={`w-8 h-8 lg:w-12 lg:h-12 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-opacity ${
                currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-70 hover:opacity-90'
              }`}
              aria-label="Previous products"
              type="button"
              onClick={scrollPrev}
              disabled={currentIndex === 0}
            >
              <div className="h-8 lg:h-12 flex items-center justify-center">
                <svg className="w-4 h-4 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'white' }}>
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            </button>

            <button
              className={`w-8 h-8 lg:w-12 lg:h-12 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-opacity ${
                currentIndex === productCategories.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-70 hover:opacity-90'
              }`}
              aria-label="Next products"
              type="button"
              onClick={scrollNext}
              disabled={currentIndex === productCategories.length - 1}
            >
              <div className="h-8 lg:h-12 flex items-center justify-center">
                <svg className="w-4 h-4 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'white' }}>
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            </button>
          </nav>
        </div>
      </div>

            <div 
              className="overflow-x-auto overflow-y-hidden scrollbar-hide" 
              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              style={{ 
                cursor: isDragging ? 'grabbing' : 'grab',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
        <div
          className="flex gap-1 lg:gap-2 ml-4 sm:ml-6 lg:ml-16 pb-4"
          role="list"
          aria-label="Product categories"
          style={{ minWidth: 'max-content' }}
        >
          {productCategories.map((category, index) => (
            <article
              key={category.id}
              data-gallery-item="true"
              className={`${index === 0 ? 'lg:w-[760px]' : 'lg:w-[400px]'} w-[260px] sm:w-[300px] flex-shrink-0`}
              role="listitem"
            >
              <div className="relative w-full h-[330px] sm:h-[380px] lg:h-[600px] bg-gray-200 overflow-hidden group cursor-pointer">
                {category.video ? (
                  <video
                    src={category.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    loading="lazy"
                    preload={index === 0 ? "auto" : "metadata"}
                    className="block w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <img
                    src={category.image}
                    alt={category.title}
                    loading={index < 2 ? "eager" : "lazy"}
                    className="block w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-500" />

              </div>


            </article>
          ))}
        </div>
      </div>

      {/* CTA below the gallery */}
      <div className="ml-4 sm:ml-6 lg:ml-16 pr-4 sm:pr-6 lg:pr-16 mt-8 lg:mt-10">
        <div className="flex justify-center sm:justify-start">
          <a
            href="https://buy.stripe.com/5kQcN5a6b7FVgWY9PIcwg00"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-white text-[#0b1c26] text-base sm:text-lg font-medium transition-colors duration-200 rounded-none"
          >
            Reserve My Infinite Spa
          </a>
        </div>
        <p className="text-xs text-white/80 text-center sm:text-left mt-3">*First Infinite Spas Shipping Fall of 2025.</p>
      </div>

      {/* Calculator Section with Benefits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-16 lg:mt-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Side - Benefits */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white mb-6 lg:mb-8 leading-tight text-center lg:text-left">
              Benefits
            </h2>
            
            <div className="space-y-6 lg:space-y-8">
              {/* First benefit */}
              {benefitsForType.length > 0 && (
                <div className="group border-l-2 border-white/30 pl-4 lg:pl-6">
                  <div>
                    <h3 className="text-lg lg:text-xl font-medium text-white mb-2 transition-colors">
                      {benefitsForType[0].title}
                    </h3>
                    <p className="text-sm lg:text-base text-white/80 leading-relaxed">
                      {benefitsForType[0].description}
                    </p>
                  </div>
                </div>
              )}

              {/* Remaining benefits */}
              {benefitsForType.slice(1).map((benefit, index) => (
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

          {/* Right Side - Advanced ROI Calculator */}
          <div className="bg-white p-6 lg:p-8 rounded-none order-1 lg:order-2">
            <div className="flex items-center gap-2 lg:gap-3 mb-4 lg:mb-6">
              <Calculator className="w-5 h-5 lg:w-6 lg:h-6 text-[#0b1c26]" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-[#0b1c26]">Infinite Spa ROI Calculator</h3>
            </div>
            
            {/* Calculator Type Selector */}
            <div className="mb-6">
              <div className="flex gap-2">
                <button
                  onClick={() => setCalculatorType('developer')}
                  className={`flex-1 py-2 px-3 text-sm font-medium transition-colors ${
                    calculatorType === 'developer' 
                      ? 'bg-[#0b1c26] text-white' 
                      : 'bg-black/5 text-[#0b1c26] hover:bg-black/10'
                  }`}
                >
                  Developer
                </button>
                <button
                  onClick={() => setCalculatorType('hotel')}
                  className={`flex-1 py-2 px-3 text-sm font-medium transition-colors ${
                    calculatorType === 'hotel' 
                      ? 'bg-[#0b1c26] text-white' 
                      : 'bg-black/5 text-[#0b1c26] hover:bg-black/10'
                  }`}
                >
                  Hotel
                </button>
              </div>
            </div>
            
            {calculatorType === 'hotel' ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-[#0b1c26] text-xs lg:text-sm font-medium mb-2">
                    Number of Rooms
                  </label>
                  <input
                    type="number"
                    value={hotelRooms}
                    onChange={(e) => setHotelRooms(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-white text-[#0b1c26] font-medium border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b1c26] focus:border-[#0b1c26] text-sm rounded"
                  />
                </div>
                
                <div>
                  <label className="block text-[#0b1c26] text-xs lg:text-sm font-medium mb-2">
                    Current ADR ($)
                  </label>
                  <input
                    type="number"
                    value={currentADR}
                    onChange={(e) => setCurrentADR(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-white text-[#0b1c26] font-medium border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b1c26] focus:border-[#0b1c26] text-sm rounded"
                  />
                </div>
                
                <div>
                  <label className="block text-[#0b1c26] text-xs lg:text-sm font-medium mb-2">
                    Occupancy Rate (%)
                  </label>
                  <input
                    type="number"
                    value={occupancyRate}
                    onChange={(e) => setOccupancyRate(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-white text-[#0b1c26] font-medium border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b1c26] focus:border-[#0b1c26] text-sm rounded"
                  />
                </div>
                
                <div className="pt-4 border-t border-[#0b1c26]/20 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#0b1c26]/80">Revenue Uplift:</span>
                    <span className="text-[#0b1c26] font-medium">${hotelResults.totalAnnualRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#0b1c26]/80">Annual Costs:</span>
                    <span className="text-[#0b1c26] font-medium">${hotelResults.annualCosts.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#0b1c26]/80">RevPAR Increase:</span>
                    <span className="text-[#0b1c26] font-medium">${hotelResults.revparIncrease}</span>
                  </div>
                  <div className="text-center pt-2">
                    <p className="text-[#0b1c26]/80 text-xs mb-1">Annual Net Return</p>
                    <p className="text-2xl font-bold text-[#0b1c26]">${hotelResults.netReturn.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-[#0b1c26] text-xs lg:text-sm font-medium mb-2">
                    Number of Units
                  </label>
                  <input
                    type="number"
                    value={units}
                    onChange={(e) => setUnits(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-white text-[#0b1c26] font-medium border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b1c26] focus:border-[#0b1c26] text-sm rounded"
                  />
                </div>
                
                <div>
                  <label className="block text-[#0b1c26] text-xs lg:text-sm font-medium mb-2">
                    Average Rent ($)
                  </label>
                  <input
                    type="number"
                    value={averageRent}
                    onChange={(e) => setAverageRent(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-white text-[#0b1c26] font-medium border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b1c26] text-sm rounded"
                  />
                </div>
                
                <div>
                  <label className="block text-[#0b1c26] text-xs lg:text-sm font-medium mb-2">
                    Units to Rent
                  </label>
                  <input
                    type="number"
                    value={unitsToRent}
                    onChange={(e) => setUnitsToRent(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-white text-[#0b1c26] font-medium border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b1c26] focus:border-[#0b1c26] text-sm rounded"
                  />
                </div>
                
                <div className="pt-4 border-t border-[#0b1c26]/20 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#0b1c26]/80">Property Value Uplift:</span>
                    <span className="text-[#0b1c26] font-medium">${developerResults.propertyValueUplift.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#0b1c26]/80">NOI Uplift:</span>
                    <span className="text-[#0b1c26] font-medium">${developerResults.noiUplift.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#0b1c26]/80">Rent Premium:</span>
                    <span className="text-[#0b1c26] font-medium">${developerResults.rentPremium}</span>
                  </div>
                  <div className="text-center pt-2">
                    <p className="text-[#0b1c26]/80 text-xs mb-1">Total Annual Benefit</p>
                    <p className="text-2xl font-bold text-[#0b1c26]">${developerResults.totalBenefit.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}; 
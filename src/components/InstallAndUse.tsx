import React from 'react';

export const InstallAndUse = () => {
  const steps = [
    'Delivered pre-assembled, set on-site in under 1 day',
    'Anchored via built-in trailer mounts + screw-in ground anchors',
    'ADA-compliant pathway not required due to trailer-based classification',
    'Default access control: weather-rated keypad lock',
    'Supports smart locks, NFC, PIN, or cloud access upgrades'
  ];
  
  const [activeStep, setActiveStep] = React.useState(0);
  const [hoveredStep, setHoveredStep] = React.useState<number | null>(null);

  return (
    <section className="w-full py-16 lg:py-24" aria-labelledby="install-use-heading">
      <div className="px-4 sm:px-6 lg:pr-4 lg:pr-8 mb-6 lg:mb-8 lg:ml-4 lg:ml-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <header className="mb-6 lg:mb-0 text-center lg:text-left">
            <h2
              id="install-use-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#0b1c26] leading-tight"
            >
              Easy to Install
            </h2>
          </header>


        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4 px-4 sm:px-6 lg:ml-4 lg:ml-8">
        {/* Video Section */}
        <div className="relative w-full aspect-video lg:aspect-square bg-gray-200 overflow-hidden order-2 lg:order-1">
          <video
            className="w-full h-full object-cover"
            style={{ objectPosition: '32% center' }}
            src="/easy.mp4"
            autoPlay
            loop
            muted
            playsInline
            loading="lazy"
            preload="metadata"
            poster="/6_Photo - 4 (1).jpg"
          />
        </div>

        {/* Steps List - matches video height */}
        <div className="px-2 sm:px-4 lg:px-8 min-h-[400px] lg:aspect-square flex flex-col order-1 lg:order-2">
          {steps.map((step, index) => {
            // Calculate dynamic height based on hover state
            const isHovered = hoveredStep === index;
            
            let heightClass;
            if (hoveredStep === null) {
              // All equal size when no hover - use fixed percentage instead of flex-1
              heightClass = 'h-[20%]';
            } else if (isHovered) {
              // Expanded section takes 28% of space
              heightClass = 'h-[28%]';
            } else {
              // Other sections share remaining 72% (18% each for 4 sections)
              heightClass = 'h-[18%]';
            }

            return (
              <div
                key={index}
                className={`group w-full border-t border-[#0d0c0924] cursor-pointer flex items-center overflow-hidden ${
                  index === steps.length - 1 ? 'border-b border-[#0d0c0924]' : ''
                } ${
                  isHovered 
                    ? 'bg-[#f8f8f8]' 
                    : 'bg-white'
                } ${heightClass}`}
                style={{
                  transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), height 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
                onMouseEnter={() => {
                  setHoveredStep(index);
                  setActiveStep(index);
                }}
                onMouseLeave={() => {
                  setHoveredStep(null);
                }}
                role="button"
                tabIndex={0}
                aria-label={`Step ${index + 1}: ${step}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setActiveStep(index);
                    setHoveredStep(index);
                  }
                }}
              >
                <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 w-full py-3 lg:py-4 pl-1 lg:pl-2">
                  {/* Clean numbered circle */}
                  <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 border-2 flex items-center justify-center text-sm sm:text-base lg:text-lg font-medium transition-all duration-600 ease-out ${
                    isHovered 
                      ? 'bg-[#0b1c26] text-white border-[#0b1c26] scale-105' 
                      : 'bg-white text-[#0b1c26] border-[#0b1c26]'
                  }`}>
                    {index + 1}
                  </div>
                  
                  {/* Step text */}
                  <div className={`text-sm sm:text-base lg:text-lg font-normal text-[#0b1c26] leading-tight flex-1 transition-all duration-600 ease-out ${
                    isHovered 
                      ? 'sm:text-lg lg:text-xl font-medium' 
                      : ''
                  }`}>
                    {step}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}; 
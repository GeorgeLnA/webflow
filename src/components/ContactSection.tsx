import React from "react";

export const ContactSection = () => {
  const contentData = [
    {
      id: 1,
      text: "We believe in providing ubiquitous access to the world's most exceptional wellness amenities, wherever life may find you.",
      className: "leading-tight text-black font-light tracking-wide text-center lg:text-left",
    },
    {
      id: 2,
      text: "Infinite Spa was born from a desire to dissolve the boundaries around luxury wellness, making it available to anyone, anywhere.",
      className: "leading-tight text-black font-light tracking-wide text-center lg:text-left",
    },
    {
      id: 3,
      text: "By opening the door to world-class experiences, we aim to uplift mood, nurture health, and extend the arc of human longevity.",
      className: "leading-tight text-black font-light tracking-wide text-center lg:text-left",
    },
  ];

  const formatTextWithBreaks = (text: string, id: number) => {
    return text;
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden">
          {/* Mobile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 bg-gray-200 overflow-hidden shadow-lg">
              <img
                src="/20250801_2322_Fashionable Business Team_simple_compose_01k1kvgawcfmgackxybhv7v7af.png"
                alt="Infinite Spa team"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center top' }}
              />
            </div>
          </div>

          {/* Mobile Text */}
          <div className="space-y-6 text-center">
            {contentData.map((content) => (
              <p 
                key={content.id} 
                className={`${content.className} text-lg lg:text-2xl`}
                style={{fontFamily: 'Montserrat, sans-serif'}}
              >
                {formatTextWithBreaks(content.text, content.id)}
              </p>
            ))}
          </div>

          {/* Mobile CTA Button */}
          <div className="flex justify-center mt-10">
            <a
              href="/our-story"
              className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-[#0b1c26] transition-all duration-300 ease-out border-2 border-[#0b1c26] rounded-none shadow-lg hover:scale-105 hover:shadow-[#0b1c26] hover:shadow-lg active:scale-95 bg-transparent hover:bg-[#0b1c26] hover:text-white"
              aria-label="Our Story"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-[#0b1c26] opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative font-medium text-lg tracking-wider">Our Story</span>
              <svg className="relative w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left Column - Image */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative w-80 h-80 bg-gray-200 overflow-hidden shadow-xl">
              <img
                src="/20250801_2322_Fashionable Business Team_simple_compose_01k1kvgawcfmgackxybhv7v7af.png"
                alt="Infinite Spa team"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center top' }}
              />
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="lg:col-span-3 space-y-6">
            {contentData.map((content) => (
              <p 
                key={content.id} 
                className={`${content.className} text-lg lg:text-2xl`}
                style={{fontFamily: 'Montserrat, sans-serif'}}
              >
                {formatTextWithBreaks(content.text, content.id)}
              </p>
            ))}
          </div>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex justify-start mt-12" style={{ paddingLeft: '70px' }}>
          <a
            href="/our-story"
            className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-[#0b1c26] transition-all duration-300 ease-out border-2 border-[#0b1c26] rounded-none shadow-lg hover:scale-105 hover:shadow-[#0b1c26] hover:shadow-lg active:scale-95 bg-transparent hover:bg-[#0b1c26] hover:text-white"
            aria-label="Our Story"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-[#0b1c26] opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative font-medium text-lg lg:text-xl tracking-wider">Our Story</span>
            <svg className="relative w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}; 
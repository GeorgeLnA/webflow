import React, { useEffect } from 'react';

const Booking = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-16">
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-normal text-[#0b1c26] mb-6 leading-tight">
              Book Your Consultation
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Schedule a call with our team to discuss your spa project, investment opportunities, or any questions you may have.
            </p>
          </div>

          {/* Calendly Widget */}
          <div className="w-full mb-8">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/your-calendly-link"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>

          {/* Book Directly Button */}
          <div className="text-center">
            <a
              href="https://calendly.com/your-calendly-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0b1c26] text-white font-medium hover:bg-[#0b1c26]/90 transition-colors duration-200 rounded-none text-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Directly
            </a>
          </div>

          {/* Alternative Contact Info */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Having trouble with the calendar? Contact us directly:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:info@infinitespa.co"
                className="text-[#0b1c26] hover:underline font-medium"
              >
                info@infinitespa.co
              </a>
              <span className="text-gray-400">|</span>
              <a
                href="tel:+1234567890"
                className="text-[#0b1c26] hover:text-gray-600 transition-colors font-medium"
              >
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking; 
import React from 'react';
import Footer from '../components/Footer';

const Confirmation = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-16">
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-5xl font-normal text-[#0b1c26] leading-tight mb-6">
              Thanks for reaching out
            </h1>
            <p className="text-lg text-gray-600 mb-10">
              We received your request and will contact you shortly. Prefer to speak now? Book a call with our team.
            </p>

            <div className="flex justify-center">
              <a
                href="https://calendly.com/matt-boney/infinite-spa-consult"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#0b1c26] text-white font-medium hover:bg-[#0b1c26]/90 transition-colors duration-200 rounded-none"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book a call
              </a>
            </div>

            <div className="mt-8">
              <a href="/" className="text-[#0b1c26] hover:underline">Return to home</a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Confirmation;



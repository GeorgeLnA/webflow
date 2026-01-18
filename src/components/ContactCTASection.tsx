import React from "react";
import { ArrowUpRight } from "lucide-react";

const ContactCTASection = () => {
  return (
    <section className="w-full h-[80vh] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url(/p-AMB-002038.png)] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#00000066]" />
      </div>
      <div className="relative z-10 h-full flex items-end pb-16 px-6 lg:px-16">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
          <div>
            <div 
              className="font-medium text-[#fffefc] text-lg mb-8"
              style={{ fontFamily: 'Inter' }}
            >
              Interested?
              <br />
              Let&apos;s connect.
            </div>
          </div>
          <div className="space-y-6">
            <p 
              className="font-normal text-[#fffefc] text-2xl md:text-3xl lg:text-4xl leading-relaxed"
              style={{ fontFamily: 'Inter' }}
            >
              Feel free to reach out.
              <br />
              We would love to hear from you.
            </p>
            <button
              className="bg-[#11388a] px-8 py-3 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#11388a] focus:ring-offset-2 hover:bg-[#0d2d73] cursor-pointer flex items-center gap-3"
              aria-label="Contact us"
            >
              <span 
                className="font-medium text-[#fffefc] text-base"
                style={{ fontFamily: 'Inter' }}
              >
                Contact us
              </span>
              <ArrowUpRight className="w-5 h-5 text-[#fffefc]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTASection; 
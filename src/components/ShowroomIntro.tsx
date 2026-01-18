import React from 'react';
import { ArrowRight } from 'lucide-react';

const ShowroomIntro = () => {
  return (
    <section className="relative w-full py-24 bg-white overflow-visible">
      {/* Image that breaks out of container - positioned absolutely */}
      <div className="absolute left-0 top-80 w-96 h-96">
        <div className="relative">
          <p className="text-lg font-semibold text-gray-900 mb-8 leading-relaxed ml-6">
            <strong>Infinite Spa offers an all-in-one service for the completion of your wellness project.</strong>
          </p>
          
          <div className="aspect-square mb-8 overflow-hidden ml-6">
            <img 
              src="/6_Photo - 2 (2).jpg" 
              alt="Luxury spa interior" 
              className="w-full h-full object-cover"
              width="512" 
              height="512"
            />
          </div>

          <div className="inline-block ml-6">
            <a 
              href="/about" 
              className="group inline-flex items-center text-blue-dark hover:text-blue-800 transition-colors"
            >
              <span className="relative overflow-hidden">
                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                  Learn more
                </span>
                <span className="absolute top-full left-0 block transition-transform duration-300 group-hover:-translate-y-full">
                  Learn more
                </span>
              </span>
              <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="w-5 h-5" />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Text that breaks out of container - positioned absolutely */}
      <div className="absolute right-0 top-80 w-3/5 pr-6">
        <div className="leading-relaxed text-black space-y-6 font-thin tracking-tight" style={{fontFamily: 'Montserrat, sans-serif', fontSize: '2.75rem'}}>
          <p>
            In our showroom, we show a wide selection of spa designs and a variety of inspiring wellness concepts and styles to help you discover your vision and bring your dream spa project to life.
          </p>
          <p>
            Our goal is to offer a comprehensive service for every budget that completely fulfills your needs and wishes from planning to execution.
          </p>
          <p>
            Thanks to our 3D visualizations for spa design, individual concepts are created that combine well thought-out planning, perfect materials and stylish implementation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShowroomIntro; 
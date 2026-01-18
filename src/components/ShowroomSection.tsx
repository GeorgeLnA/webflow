import React from 'react';
import { ArrowRight } from 'lucide-react';

const ShowroomSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Image and Learn More */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Infinite Spa offers an all-in-one service for the completion of your wellness project.
            </p>
            
            <div className="relative">
              <img 
                src="/6_Photo - 2 (2).jpg" 
                alt="Spa showroom with circular table and modern design"
                className="w-full aspect-[4/3] object-cover "
              />
            </div>
            
            <a 
              href="https://calendly.com/matt-boney/infinite-spa-consult"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-900 hover:text-blue-dark transition-colors group"
            >
              <span className="text-lg font-medium mr-3">Learn more</span>
              <div className="w-8 h-8 bg-pink-400  flex items-center justify-center group-hover:bg-pink-500 transition-colors">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </a>
          </div>

          {/* Right Column - Main Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
              In our showroom, we show a wide selection of spas and a variety of inspiring designs and styles to help you discover your vision and bring your dream project to life.
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              Our goal is to offer a comprehensive service for every budget that completely fulfills your needs and wishes from planning to execution.
            </p>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              Thanks to our 3D visualizations for spa design, individual concepts are created that combine well thought-out planning, perfect materials and stylish implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowroomSection; 
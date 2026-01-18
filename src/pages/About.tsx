import React from 'react';
import { Heart, Target, Users } from 'lucide-react';
import Footer from '../components/Footer';

const About = () => (
  <div className="min-h-screen bg-white overflow-x-hidden">
    {/* Introduction Section - with top padding for fixed header */}
    <section className="pt-32 pb-16 relative overflow-hidden" style={{ backgroundColor: '#0a1f4a' }}>
      <div className="absolute inset-0 bg-blue-700 bg-opacity-5"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-7xl font-normal text-white leading-tight mb-8">About Us</h1>
          <p className="text-xl lg:text-2xl text-white font-light leading-relaxed max-w-3xl mx-auto" style={{fontFamily: 'Montserrat, sans-serif'}}>
            We're passionate about bringing luxury wellness experiences to everyone, everywhere. Our mission is to make premium spa amenities accessible through innovative mobile solutions.
          </p>
        </div>
        

      </div>
    </section>

    {/* Founders Section */}
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-normal text-[#0d0c09] leading-tight mb-6">Meet Our Founders</h2>
          <p className="text-xl text-[#0d0c09] font-light max-w-3xl mx-auto" style={{fontFamily: 'Montserrat, sans-serif'}}>
            Visionary leaders dedicated to transforming the wellness industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Matt */}
          <div className="bg-[#0a1f4a]  p-16 text-center hover:shadow-lg transition-shadow min-h-[600px]">
            <div className="w-48 h-48 bg-gray-200 mx-auto mb-6 overflow-hidden">
              <img 
                src="/1736995044237.jpg" 
                alt="Matt - Co-Founder & CEO" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-normal text-white mb-2">Matt</h3>
            <p className="text-white font-medium mb-4">Co-Founder & CEO</p>
            <p className="text-white font-light leading-relaxed">
              With a passion for wellness innovation and sustainable design, Maat leads our vision 
              to make luxury spa experiences accessible worldwide. His expertise in business development 
              and strategic partnerships drives Infinite Spa's global expansion.
            </p>
          </div>

          {/* Misha */}
          <div className="bg-[#0a1f4a]  p-16 text-center hover:shadow-lg transition-shadow min-h-[600px]">
            <div className="w-48 h-48 bg-gray-200 mx-auto mb-6 overflow-hidden">
              <img 
                src="/1516866626270.jpg" 
                alt="Misha - Co-Founder & CTO" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-normal text-white mb-2">Misha</h3>
            <p className="text-white font-medium mb-4">Co-Founder & CTO</p>
            <p className="text-white font-light leading-relaxed">
              A technology visionary with deep expertise in mobile solutions and smart wellness systems. 
              Misha oversees our technical innovation and ensures every Infinite Spa installation 
              represents the cutting edge of wellness technology.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Values Section */}
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-normal text-[#0d0c09] leading-tight mb-6">Our Values</h2>
          <p className="text-xl text-[#0d0c09] font-light max-w-3xl mx-auto" style={{fontFamily: 'Montserrat, sans-serif'}}>
            Three core principles guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50  p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#0a1f4a]  flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-normal text-[#0d0c09] mb-4">Wellness First</h3>
            <p className="text-[#0d0c09] font-light leading-relaxed">
              We believe wellness should be accessible to everyone. Our spa solutions prioritize 
              health, relaxation, and rejuvenation in every design.
            </p>
          </div>

          <div className="bg-gray-50  p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#0a1f4a]  flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-normal text-[#0d0c09] mb-4">Innovation</h3>
            <p className="text-[#0d0c09] font-light leading-relaxed">
              We combine cutting-edge technology with timeless spa traditions to create 
              unique, turnkey wellness solutions for modern properties.
            </p>
          </div>

          <div className="bg-gray-50  p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#0a1f4a]  flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-normal text-[#0d0c09] mb-4">Community</h3>
            <p className="text-[#0d0c09] font-light leading-relaxed">
              We build lasting relationships with our clients, creating spaces that bring 
              people together and foster wellness communities.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Vision Section */}
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-normal text-[#0d0c09] leading-tight mb-8">Our Vision</h2>
            <p className="text-[#0d0c09] text-lg font-light leading-relaxed mb-6" style={{fontFamily: 'Montserrat, sans-serif'}}>
              To transform how people experience wellness by making luxury spa amenities 
              universally accessible. We envision a world where premium wellness experiences 
              are not limited by location or circumstance, but available wherever people 
              live, work, and gather.
            </p>
            <p className="text-[#0d0c09] text-lg font-light leading-relaxed" style={{fontFamily: 'Montserrat, sans-serif'}}>
              By opening the door to world-class experiences, we aim to uplift mood, nurture health, 
              and extend the arc of human longevity.
            </p>
          </div>
          <div className="relative">
            <img 
              src="/6_Photo - 3 (2).jpg" 
              alt="Vision" 
              className="w-full h-96 object-cover "
            />
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="w-full h-screen/2 overflow-hidden" style={{ background: '#0a1f4a' }}>
      <div className="h-full flex flex-col justify-center items-center p-16 lg:p-24 text-center text-white">
        <h3 className="text-4xl lg:text-6xl font-normal mb-8 leading-tight">Ready to Experience Infinite Wellness?</h3>
        <p className="text-xl lg:text-2xl font-light opacity-90 max-w-4xl mx-auto leading-relaxed mb-12">
          Join us in making wellness truly infinite. Discover how our innovative spa solutions 
          can transform your space and elevate your wellness experience.
        </p>
        <a 
          href="https://calendly.com/matt-boney/infinite-spa-consult"
          target="_blank"
          rel="noopener noreferrer"
          className="px-12 py-6 bg-white text-[#0a1f4a] hover:bg-gray-50 transition-colors font-medium text-xl inline-block"
        >
          Get Started Today
        </a>
      </div>
    </section>

    <Footer />
  </div>
);

export default About; 
import React, { useEffect, useState } from 'react';
import { Home, Menu, X } from 'lucide-react';

const Header = () => {
  const [isHero, setIsHero] = useState(true);
  const [isMainPage, setIsMainPage] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check if we're on the main page
    setIsMainPage(window.location.pathname === '/');
    
    const handleScroll = () => {
      if (window.location.pathname === '/') {
        // Main page logic - check hero section
        const hero = document.getElementById('hero');
        if (hero) {
          const rect = hero.getBoundingClientRect();
          setIsHero(rect.bottom > 80);
        }
      } else {
        // Other pages - always show navigation
        setIsHero(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for route changes
  useEffect(() => {
    const handleLocationChange = () => {
      const isMain = window.location.pathname === '/';
      setIsMainPage(isMain);
      if (!isMain) {
        setIsHero(false);
      }
    };
    
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-sm" style={{ backgroundColor: '#0b1c26' }}>
      <div className="w-full">
        <div className="px-6 flex items-center justify-between transition-all duration-300 py-1">
          {/* Logo */}
          <div className="relative transition-opacity duration-500 ease-in-out opacity-100">
            <a href="/" className="block w-48 h-16 bg-transparent rounded flex items-center justify-center p-0 hover:opacity-80">
              <img 
                src="/newlogo.png"
                alt="Infinite Spa Logo" 
                className="w-full h-full object-contain" 
                style={{ background: 'transparent' }}
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center items-center">
            <div className="flex items-center space-x-8">
              <a href="/" className="font-medium text-white hover:text-gray-200 transition-colors">Home</a>
              <a href="/our-story" className="font-medium text-white hover:text-gray-200 transition-colors">Our Story</a>

              <a href="/contact" className="font-medium text-white hover:text-gray-200 transition-colors">Contact us</a>
            </div>
          </nav>
          
          {/* Desktop QUOTE Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="/dealer" 
              className="group relative inline-flex items-center justify-center px-5 py-2.5 overflow-hidden font-medium text-white transition-all duration-300 ease-out border-2 border-white rounded-none hover:scale-105 active:scale-95 bg-transparent hover:bg-white hover:text-[#0b1c26]"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative font-medium text-sm tracking-wider">Become a Dealer</span>
            </a>
            <a 
              href="https://calendly.com/matt-boney/infinite-spa-consult" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-5 py-2.5 overflow-hidden font-medium text-white transition-all duration-300 ease-out border-2 border-white rounded-none hover:scale-105 active:scale-95 bg-transparent hover:bg-white hover:text-[#0b1c26]"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative font-medium text-sm tracking-wider">Book a Call</span>
              <svg className="relative w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-gray-200 transition-colors p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#0b1c26] border-t border-white/10">
            <div className="px-6 py-4 space-y-4">
              {/* Mobile Navigation Links */}
              <div className="space-y-3">
                <a 
                  href="/" 
                  className="block text-white hover:text-gray-200 transition-colors py-2 text-lg"
                  onClick={closeMobileMenu}
                >
                  Home
                </a>
                <a 
                  href="/our-story" 
                  className="block text-white hover:text-gray-200 transition-colors py-2 text-lg"
                  onClick={closeMobileMenu}
                >
                  Our Story
                </a>

                <a 
                  href="/contact" 
                  className="block text-white hover:text-gray-200 transition-colors py-2 text-lg"
                  onClick={closeMobileMenu}
                >
                  Contact us
                </a>
              </div>
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <a 
                  href="/dealer" 
                  className="group relative inline-flex items-center justify-center w-full px-6 py-3 overflow-hidden font-medium text-white transition-all duration-300 ease-out border-2 border-white rounded-none hover:scale-105 active:scale-95 bg-transparent hover:bg-white hover:text-[#0b1c26]"
                  onClick={closeMobileMenu}
                >
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-transform duration-300 group-hover:-translate-x-40 ease"></span>
                  <span className="relative font-medium text-base tracking-wider">Become a Dealer</span>
                </a>
                <a 
                  href="https://calendly.com/matt-boney/infinite-spa-consult" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center w-full px-6 py-3 overflow-hidden font-medium text-white transition-all duration-300 ease-out border-2 border-white rounded-none hover:scale-105 active:scale-95 bg-transparent hover:bg-white hover:text-[#0b1c26]"
                  onClick={closeMobileMenu}
                >
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-transform duration-300 group-hover:-translate-x-40 ease"></span>
                  <span className="relative font-medium text-base tracking-wider">Book a Call</span>
                  <svg className="relative w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
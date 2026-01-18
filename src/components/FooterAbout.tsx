import React from "react";
import { Facebook, Instagram } from "lucide-react";

const FooterAbout = () => {
  return (
    <footer className="w-full bg-[#f7f1e8] py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Description & Social */}
          <div className="lg:col-span-1">
            <p 
              className="font-normal text-[#11388a] text-2xl lg:text-3xl leading-tight mb-8"
              style={{ fontFamily: 'Inter' }}
            >
              Spa experiences that elevate your wellness journey
            </p>
            
            {/* Social Links */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#11388a] flex items-center justify-center">
                  <Facebook className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium text-[#11388a]" style={{ fontFamily: 'Inter' }}>Facebook</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#11388a] flex items-center justify-center">
                  <Instagram className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium text-[#11388a]" style={{ fontFamily: 'Inter' }}>Instagram</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-medium text-[#11388a] text-lg mb-6" style={{ fontFamily: 'Inter' }}>
              Opening Hours
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium text-[#11388a]/60" style={{ fontFamily: 'Inter' }}>Mo - Fr</span>
                <span className="font-normal text-[#11388a]/60" style={{ fontFamily: 'Inter' }}>10:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-[#11388a]/60" style={{ fontFamily: 'Inter' }}>Sa</span>
                <span className="font-normal text-[#11388a]/60" style={{ fontFamily: 'Inter' }}>by appointment</span>
              </div>
            </div>
            <div className="mt-6 bg-[#fffefc] p-4">
              <p className="font-medium text-[#11388a] text-sm" style={{ fontFamily: 'Inter' }}>
                Annual vacation: 25.07.-17.08.
              </p>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-medium text-[#11388a] text-lg mb-6" style={{ fontFamily: 'Inter' }}>
              Pages
            </h3>
            <ul className="space-y-3">
              {['Home', 'About us', 'Our Story', 'Technology', 'Contact', 'Booking'].map((link) => (
                <li key={link}>
                  <a 
                    href={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`}
                    className="font-normal text-[#11388a]/60 hover:text-[#11388a] transition-colors"
                    style={{ fontFamily: 'Inter' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[#11388a] mb-4">Contact Information</h3>
            <div className="space-y-2">
              <p className="text-[#11388a] text-sm">
                <strong>Location:</strong> Miami, FL
              </p>
              <p className="text-[#11388a] text-sm">
                <strong>Phone:</strong> +1 (208) 709-7720
              </p>
              <p className="text-[#11388a] text-sm">
                <strong>Email:</strong> info@infinitespa.co
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[#11388a] mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/infinitespa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-[#11388a] hover:text-[#11388a]/80 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="font-medium text-[#11388a]">LinkedIn</span>
              </a>
              <a 
                href="https://www.instagram.com/infinitespa.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-[#11388a] hover:text-[#11388a]/80 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                </svg>
                <span className="font-medium text-[#11388a]">@infinitespa.co</span>
              </a>
            </div>
          </div>

        </div>

        {/* Logo Bar */}
        <div className="mt-12 pt-8 border-t border-[#11388a]/20">
          <div className="flex justify-center">
            <img
              src="/newlogo.png"
              alt="Infinite Spa Logo"
              className="h-12 object-contain"
            />
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-8 pt-6 border-t border-[#11388a]/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 text-sm">
            <a
              href="#"
              className="font-medium text-[#11388a] hover:underline"
              style={{ fontFamily: 'Inter' }}
            >
              Privacy
            </a>
            <span className="text-[#11388a]/60">|</span>
            <a
              href="#"
              className="font-medium text-[#11388a] hover:underline"
              style={{ fontFamily: 'Inter' }}
            >
              Legal Infos
            </a>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-[#11388a]/60">
            <span style={{ fontFamily: 'Inter' }}>© 2025 Infinite Communities</span>
            <span>|</span>
            <span style={{ fontFamily: 'Inter' }}>Website by <span className="text-[#11388a] font-medium">Infinite</span></span>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center pt-8 border-t border-[#11388a]/20">
          <p className="text-[#11388a]/60 text-sm">
            © 2025 Infinite Communities. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterAbout; 
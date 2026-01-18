import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Footer from '../components/Footer';
import { submitForm } from '../lib/formService';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDescription: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    setIsSubmitting(true);

    try {
      const result = await submitForm(formData, 'contact');

      if (result.success) {
        setSuccessMessage(result.message);
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectDescription: ''
        });
      } else {
        setErrorMessage(result.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div className="pt-16">
        {/* Contact Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-normal text-[#0d0c09] leading-tight mb-8">Get In Touch</h2>
              
              <div className="space-y-6 mb-12">
                                       <div className="flex items-center space-x-4">
                         <div className="w-12 h-12 bg-[#0b1c26]  flex items-center justify-center">
                           <Mail className="w-6 h-6 text-white" />
                         </div>
                  <div>
                    <h3 className="font-medium text-[#0d0c09] text-lg">Email</h3>
                    <p className="text-[#0d0c09] font-light">info@infinitespa.co</p>
                  </div>
                </div>

                                       <div className="flex items-center space-x-4">
                         <div className="w-12 h-12 bg-[#0b1c26]  flex items-center justify-center">
                           <Phone className="w-6 h-6 text-white" />
                         </div>
                  <div>
                    <h3 className="font-medium text-[#0d0c09] text-lg">Phone</h3>
                    <p className="text-[#0d0c09] font-light">+1 (208) 709-7720</p>
                  </div>
                </div>

                                       <div className="flex items-center space-x-4">
                         <div className="w-12 h-12 bg-[#0b1c26]  flex items-center justify-center">
                           <MapPin className="w-6 h-6 text-white" />
                         </div>
                  <div>
                    <h3 className="font-medium text-[#0d0c09] text-lg">Location</h3>
                    <p className="text-[#0d0c09] font-light">Miami, FL</p>
                  </div>
                </div>
              </div>


            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-3xl font-normal text-[#0d0c09] mb-8">Start Your Project</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#0d0c09] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-[#0b1c26] focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#0d0c09] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-[#0b1c26] focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#0d0c09] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-[#0b1c26] focus:border-transparent"
                    placeholder="+1 (208) 709-7720"
                  />
                </div>

                <div>
                  <label htmlFor="projectDescription" className="block text-sm font-medium text-[#0d0c09] mb-2">
                    Project Description
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    rows={4}
                    value={formData.projectDescription}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-[#0b1c26] focus:border-transparent"
                    placeholder="Tell us about your spa project, property type, and vision..."
                  />
                </div>

                {/* Success/Error Messages */}
                {successMessage && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                    {successMessage}
                  </div>
                )}
                {errorMessage && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#0b1c26] text-white py-4 px-8 hover:bg-[#0b1c26]/90 transition-colors flex items-center justify-center space-x-2 font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Inquiry'}</span>
                    <Send className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => window.open('https://buy.stripe.com/5kQcN5a6b7FVgWY9PIcwg00', '_blank')}
                    className="border-2 border-[#0b1c26] text-[#0b1c26] py-4 px-8 font-medium hover:bg-[#0b1c26] hover:text-white transition-colors flex items-center justify-center space-x-2 text-lg"
                  >
                    <span>Reserve Now</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contact; 
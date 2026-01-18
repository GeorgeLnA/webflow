import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { submitForm } from '../lib/formService';

const Dealer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    zipCode: '',
    country: '',
    phone: '',
    email: '',
    onlineOnly: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
      const result = await submitForm(formData, 'dealer');

      if (result.success) {
        setSuccessMessage(result.message);
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          zipCode: '',
          country: '',
          phone: '',
          email: '',
          onlineOnly: ''
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

  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "A Product That Stands Out",
      points: [
        "The only luxury wellness unit that combines sauna, hot tub (installed from your selection of units), and plunge (installed from your selection of units).",
        "Sleek, modern design that makes a statement in any showroom."
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Easy to Sell, Easy to Deliver",
      points: [
        "Pre-assembled, plug-and-play units.",
        "Installed in less than 24 hours with no major construction required."
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      ),
      title: "A Market on the Rise",
      points: [
        "The global wellness industry is booming.",
        "Customers are actively seeking luxury health and recovery experiences.",
        "Infinite Spa helps you capture this demand with a premium, proven product."
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      title: "Full Dealer Support",
      points: [
        "Marketing toolkit with brochures, videos, and showroom signage.",
        "Staff training and sales resources.",
        "Lead referrals from Infinite Spa's national campaigns.",
        "Ongoing support from a dedicated partner team."
      ]
    }
  ];

  const dealerBenefits = [
    "Expand your portfolio with a truly differentiated product.",
    "Gain access to Infinite Spa's growing brand reputation.",
    "Enjoy strong support in marketing, sales, and logistics.",
    "Unlock opportunities for territory protection in select markets."
  ];

  const howItWorksSteps = [
    {
      step: 1,
      title: "Apply Online",
      description: "Submit your dealer application."
    },
    {
      step: 2,
      title: "Get Approved",
      description: "Our team will review and respond quickly."
    },
    {
      step: 3,
      title: "Showcase Infinite Spa",
      description: "Add a demo to your showroom and capture attention."
    },
    {
      step: 4,
      title: "Grow Your Business",
      description: "Offer Infinite Spa to your customers and elevate your dealership."
    }
  ];

  const requirements = [
    "A brick-and-mortar retail showroom in an open Infinite Spa territory is required.",
    "Dealer must be willing to display Infinite Spa branded point-of-purchase materials in the retail showroom.",
    "Dealer agrees with Infinite Spa's internet policies and Infinite Spa products must maintain a prominent position on dealer's website.",
    "Dealer must commit to attend sales, technical service, and management training."
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-[#0b1c26]">
          <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
            <h1 className="text-4xl lg:text-6xl font-normal text-white leading-tight mb-6">
              Join the Infinite Spa Dealer Network
            </h1>
            <p className="text-2xl text-white/80 font-light mb-8" style={{fontFamily: 'Montserrat, sans-serif'}}>
              A Premium Product. A Premium Opportunity.
            </p>
            <p className="text-lg text-white/70 max-w-4xl mx-auto leading-relaxed" style={{fontFamily: 'Montserrat, sans-serif'}}>
              Infinite Spa has redefined luxury wellness with our 3-in-1 turnkey unit — sauna, hot tub, and cold plunge — engineered to install in less than 24 hours. We're inviting a select group of dealers to represent Infinite Spa and bring this one-of-a-kind experience to customers across the country.
            </p>
          </div>
        </section>

        {/* Why Partner Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <h2 className="text-4xl lg:text-5xl font-normal text-[#0d0c09] leading-tight mb-16 text-center">
              Why Partner With Infinite Spa
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="group p-8 border border-gray-200 hover:border-[#0b1c26] transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start mb-6">
                    <div className="text-[#0b1c26] mr-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-2xl font-medium text-[#0d0c09] group-hover:text-[#0b1c26] transition-colors">
                      {benefit.title}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {benefit.points.map((point, pointIndex) => (
                      <p key={pointIndex} className="text-lg text-[#0d0c09] leading-relaxed" style={{fontFamily: 'Montserrat, sans-serif'}}>
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dealer Benefits Section */}
        <section className="py-16 bg-[#0b1c26]">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <h2 className="text-4xl lg:text-5xl font-normal text-white leading-tight mb-12 text-center">
              Dealer Benefits
            </h2>
            
            <div className="space-y-4">
              {dealerBenefits.map((benefit, index) => (
                <div key={index} className="group flex items-center p-6 bg-white border border-gray-200 hover:border-white hover:bg-gray-50 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-12 h-12 bg-[#0b1c26] text-white flex items-center justify-center text-xl font-bold group-hover:bg-white group-hover:text-[#0b1c26] group-hover:border-2 group-hover:border-[#0b1c26] transition-all duration-300">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-[#0d0c09] leading-relaxed group-hover:text-[#0b1c26] transition-colors" style={{fontFamily: 'Montserrat, sans-serif'}}>
                      {benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <h2 className="text-4xl lg:text-5xl font-normal text-[#0d0c09] leading-tight mb-16 text-center">
              How It Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorksSteps.map((step, index) => (
                <div key={index} className="group text-center p-6 border border-gray-200 hover:border-[#0b1c26] transition-all duration-300 hover:shadow-lg">
                                  <div className="w-12 h-12 bg-[#0b1c26] text-white flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {step.step}
                </div>
                  <h3 className="text-xl font-medium text-[#0d0c09] mb-4 group-hover:text-[#0b1c26] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-lg text-[#0d0c09] leading-relaxed" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#0b1c26]">
          <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-normal text-white leading-tight mb-8">
              Ready to Grow With Infinite Spa?
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8" style={{fontFamily: 'Montserrat, sans-serif'}}>
              Infinite Spa is opening limited dealer partnerships in key territories. Apply today to secure your place in the future of wellness.
            </p>
          </div>
        </section>

        {/* Dealer Form Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-normal text-[#0d0c09] leading-tight mb-6">
                Apply to Become a Dealer
              </h2>
              <p className="text-xl text-[#0d0c09] font-light" style={{fontFamily: 'Montserrat, sans-serif'}}>
                Take the next step in accelerating your growth and profitability.
              </p>
            </div>

            {/* Success/Error Messages */}
            {successMessage && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-[#0d0c09] mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#0b1c26] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-[#0d0c09] mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#0b1c26] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-[#0d0c09] mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#0b1c26] focus:border-transparent"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-[#0d0c09] mb-2">
                    Zip/Postal Code *
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#0b1c26] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-[#0d0c09] mb-2">
                    Country *
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#0b1c26] focus:border-transparent"
                    required
                  >
                    <option value="">Select Country</option>
                    <option value="US">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#0d0c09] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#0b1c26] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#0d0c09] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#0b1c26] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="onlineOnly" className="block text-sm font-medium text-[#0d0c09] mb-2">
                  Online Only Business? *
                </label>
                <select
                  id="onlineOnly"
                  name="onlineOnly"
                  value={formData.onlineOnly}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#0b1c26] focus:border-transparent"
                  required
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition-all duration-300 ease-out bg-[#0b1c26] hover:bg-[#0b1c26]/90 rounded-none shadow-lg hover:scale-105 hover:shadow-[#0b1c26] hover:shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative font-medium text-lg tracking-wider">
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </span>
              </button>
            </form>

            <p className="text-sm text-gray-600 mt-6 text-center" style={{fontFamily: 'Montserrat, sans-serif'}}>
              By entering my email, I consent to receive electronic communications from Infinite Spa. Your privacy is 100% guaranteed. Your information will not be shared.
            </p>
          </div>
        </section>

        {/* Dealer Requirements Section */}
        <section className="py-16 bg-[#0b1c26]">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <h2 className="text-4xl lg:text-5xl font-normal text-white leading-tight mb-12 text-center">
              Dealer Requirements
            </h2>
            
            <div className="space-y-4">
              {requirements.map((requirement, index) => (
                <div key={index} className="group flex items-center p-6 bg-white border border-gray-200 hover:border-white hover:bg-gray-50 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-12 h-12 bg-[#0b1c26] text-white flex items-center justify-center text-xl font-bold group-hover:bg-white group-hover:text-[#0b1c26] group-hover:border-2 group-hover:border-[#0b1c26] transition-all duration-300">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-[#0d0c09] leading-relaxed group-hover:text-[#0b1c26] transition-colors" style={{fontFamily: 'Montserrat, sans-serif'}}>
                      {requirement}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Dealer;

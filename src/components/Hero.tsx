import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitForm } from '../lib/formService';

const Hero = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const validatePhone = (value: string) => /[0-9()\-+\s]{7,}/.test(value);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!validatePhone(phone)) {
      setErrorMessage('Please enter a valid phone number.');
      return;
    }
    if (!location) {
      setErrorMessage('Please select your location.');
      return;
    }

    setIsSubmitting(true);
    try {
      const formData = {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        location: location
      };

      const result = await submitForm(formData, 'hero');

      if (result.success) {
        setSuccessMessage(result.message);
        setName('');
        setEmail('');
        setPhone('');
        setLocation('');
        navigate('/confirmation');
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

  const renderFormCard = () => (
    <div className="w-full backdrop-blur-sm bg-black/50 p-4 sm:p-5 md:p-6 max-w-sm lg:max-w-sm xl:max-w-md">
              <h2
        className="text-white text-lg sm:text-xl font-medium tracking-wide mb-3"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        Get Your Free Modular Spa Quote Today
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label htmlFor="hero-name" className="block text-white/80 text-xs mb-1">Name</label>
          <input
            id="hero-name"
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 bg-white/95 text-black placeholder-black/50 outline-none focus:ring-2 focus:ring-white focus:ring-offset-0 text-sm"
            placeholder="Jane Doe"
            required
          />
        </div>
        <div>
          <label htmlFor="hero-email" className="block text-white/80 text-xs mb-1">Email</label>
          <input
            id="hero-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 bg-white/95 text-black placeholder-black/50 outline-none focus:ring-2 focus:ring-white focus:ring-offset-0 text-sm"
            placeholder="jane@example.com"
            required
          />
        </div>
        <div>
          <label htmlFor="hero-phone" className="block text-white/80 text-xs mb-1">Phone</label>
          <input
            id="hero-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 bg-white/95 text-black placeholder-black/50 outline-none focus:ring-2 focus:ring-white focus:ring-offset-0 text-sm"
            placeholder="+1 555 555 5555"
            required
          />
        </div>
        <div>
          <label htmlFor="hero-location" className="block text-white/80 text-xs mb-1">Location</label>
          <select
            id="hero-location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3 py-2 bg-white/95 text-black outline-none focus:ring-2 focus:ring-white focus:ring-offset-0 text-sm"
            required
          >
            <option value="">Select your location</option>
            <option value="US">US</option>
            <option value="Canada">Canada</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {errorMessage && (
          <p className="text-red-300 text-xs" role="alert">{errorMessage}</p>
        )}
        {successMessage && (
          <p className="text-green-300 text-xs" role="status">{successMessage}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full group relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-medium text-white transition-all duration-300 ease-out rounded-none border-2 border-white hover:scale-[1.02] hover:shadow-white hover:shadow-2xl active:scale-95 disabled:opacity-70"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative font-semibold text-sm tracking-wider">
            {isSubmitting ? 'Sending…' : 'Get My Free Quote'}
          </span>
        </button>

        <p className="hidden lg:block text-xs text-white/70 text-center">We respect your privacy. No spam.</p>
      </form>
    </div>
  );

  return (
    <section
      id="hero"
      className="relative min-h-[55vh] lg:min-h-[55vh] min-h-[85vh] overflow-hidden bg-[#0b1c26] lg:bg-transparent py-10 lg:py-14 border-0"
    >
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover object-top lg:object-center z-0 -top-40 lg:top-0"
        src="/Gemini_Generated_Image_221u17221u17221u Large.jpeg"
        alt="Infinite Spa luxury wellness experience"
      />

      {/* Mobile Content Overlay (separate layout) */}
      <div className="relative z-10 min-h-[75vh] lg:min-h-[55vh] flex items-end pb-4 lg:items-center lg:pt-10 lg:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="w-full">
            <div className="max-w-sm mx-auto -mb-14">
              {renderFormCard()}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop/Tablet Content Overlay (unchanged) */}
      <div className="relative z-10 min-h-[55vh] hidden lg:flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="flex justify-end pt-12">
            {renderFormCard()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
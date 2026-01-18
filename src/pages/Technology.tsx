import React from 'react';
import { Cpu, Brain, Leaf, Zap, LineChart, WifiOff, Database } from 'lucide-react';
import Footer from '../components/Footer';

const Technology = () => {

  const innovationTabs = [
    {
      title: "Automatic Water Care",
      description: "Smart systems manage water balance and cleanliness with minimal manual input, cutting down maintenance time by up to 85%.",
      icon: <Brain className="w-8 h-8" />,
      efficiency: "High-performance filtration and precision control",
      response: "Real-time adjustments, no internet needed"
    },
    {
      title: "Built for Reliability",
      description: "Our modular design means fewer moving parts and faster repairs. Key components are easily accessible and engineered for long-term durability.",
      icon: <LineChart className="w-8 h-8" />,
      efficiency: "Up to 99% uptime with simplified servicing",
      response: "Designed for fast diagnostics and swap-outs"
    },
    {
      title: "Fast, Efficient Heating",
      description: "Our spas heat quickly and hold temperature thanks to compact insulation and high-efficiency heaters—ideal for energy-conscious homes.",
      icon: <Zap className="w-8 h-8" />,
      efficiency: "Up to 60% lower energy use vs traditional setups",
      response: "Rapid warm-up, no lag time"
    },
    {
      title: "Personal Comfort Controls",
      description: "Simple preset modes let you adjust temperature, lighting, and optional aromatherapy for a tailored spa experience—no complex tech needed.",
      icon: <Cpu className="w-8 h-8" />,
      efficiency: "Intuitive user settings for maximum comfort",
      response: "Instant adjustment via app or panel"
    }
  ];

  const systemArchitecture = [
    {
      layer: "Local Control Unit",
      description: "Each spa comes with a built-in local controller for smooth operation—no constant Wi-Fi required",
      components: ["Pre-configured control board", "On-site settings", "Power-safe fallback mode", "No cloud dependency"]
    },
    {
      layer: "Smart Sensor System", 
      description: "Essential sensors monitor temperature, water flow, and chemical balance to keep your spa running smoothly",
      components: ["Easy-to-maintain probes", "Temperature & flow monitoring", "Optional pH & chemical kits"]
    },
    {
      layer: "Smart Performance Logic",
      description: "Simple automation helps your spa run efficiently—no AI buzzwords, just intelligent design",
      components: ["Pre-programmed cycles", "System alerts", "Efficient scheduling"]
    },
    {
      layer: "User Control Options",
      description: "Control your spa via app, touch panel, or optional voice system—whatever works best for you",
      components: ["Mobile app with presets", "Easy-to-use control panel", "Optional voice integration"]
    }
  ];

  const sustainabilityMetrics = [
    { metric: "Energy Reduction", value: "Up to 60%", description: "lower energy use thanks to efficient insulation" },
    { metric: "Water Conservation", value: "45%", description: "less waste with optional cover and filter upgrades" },
    { metric: "Chemical Usage", value: "Reduced", description: "chemical use via controlled circulation" },
    { metric: "Carbon Footprint", value: "Compact", description: "low-footprint units for efficient logistics" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-16">
        {/* Revolutionary Innovations Section - Unique Grid Layout */}
        <section className="w-full py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#0b1c26] leading-tight mb-6">
                Revolutionary Spa Simplicity
              </h2>
              <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{fontFamily: 'Montserrat, sans-serif'}}>
                Our modular spa systems deliver luxury wellness experiences that are quick to install, easy to maintain, and designed for modern living—without the over-engineering.
              </p>
            </div>

            {/* Grid Layout - 2x2 on Desktop, Stack on Mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {innovationTabs.map((tab, index) => (
                <div 
                  key={index}
                  className="group cursor-pointer border border-gray-200 hover:border-[#0b1c26] transition-all duration-300 p-8"

                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-[#0b1c26] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      {React.cloneElement(tab.icon, { 
                        className: "w-8 h-8 text-white" 
                      })}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-medium text-[#0b1c26] mb-4 group-hover:text-black transition-colors">
                        {tab.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6" style={{fontFamily: 'Montserrat, sans-serif'}}>
                        {tab.description}
                      </p>
                      <div className="space-y-2 text-sm text-gray-500">
                        <div className="flex justify-between">
                          <span>Efficiency:</span>
                          <span className="font-medium text-[#0b1c26]">{tab.efficiency}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Response:</span>
                          <span className="font-medium text-[#0b1c26]">{tab.response}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Spacer under second section */}
        <div className="w-full h-8 bg-white"></div>

        {/* System Architecture Section - Cool Layered Cards Design */}
        <section
          className="w-full py-16 lg:py-32"
          style={{ backgroundColor: '#0b1c26' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight mb-6">
                System Design
              </h2>
              <p className="text-base lg:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed" style={{fontFamily: 'Montserrat, sans-serif'}}>
                A simple, robust framework designed for real-world reliability and luxury performance—no overcomplicated tech stack required.
              </p>
            </div>

            {/* Simple Clean Cards Layout */}
            <div className="space-y-8 lg:space-y-12">
              {systemArchitecture.map((layer, index) => (
                <div key={index} className="border border-white/20 p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
                    {/* Layer Number */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-white flex items-center justify-center text-[#0b1c26] font-bold text-2xl">
                        {index + 1}
                      </div>
                    </div>

                    {/* Layer Content */}
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-medium text-white mb-4">
                        {layer.layer}
                      </h3>
                      <p className="text-white/80 leading-relaxed mb-6 text-base lg:text-lg" style={{fontFamily: 'Montserrat, sans-serif'}}>
                        {layer.description}
                      </p>
                      
                      {/* Components Grid */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                        {layer.components.map((component, idx) => (
                          <div 
                            key={idx} 
                            className="border border-white/20 p-3 text-center"
                          >
                            <span className="text-white/90 font-medium text-xs lg:text-sm block">
                              {component}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Spacer under third section */}
        <div className="w-full h-4 bg-white"></div>

        {/* AI & Automation Section - Unique Center-Focused Layout */}
        <section className="w-full py-16 lg:py-32 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#0b1c26] leading-tight mb-6">
                Automation System
              </h2>
              <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{fontFamily: 'Montserrat, sans-serif'}}>
                Our spas come pre-configured with automated settings that handle the essentials—heat, filtration, lighting—so you don't have to.
              </p>
            </div>

            {/* Features in horizontal row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0b1c26] mx-auto flex items-center justify-center mb-6">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-medium text-[#0b1c26] mb-4">
                    User Preferences
                  </h3>
                  <p className="text-gray-600 leading-relaxed" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    Save your preferred temperature and lighting modes for quick access—no learning curve or complicated setup.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0b1c26] mx-auto flex items-center justify-center mb-6">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-medium text-[#0b1c26] mb-4">
                    Efficient Operation
                  </h3>
                  <p className="text-gray-600 leading-relaxed" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    Built-in routines maintain optimal performance with minimal input, keeping your spa efficient day and night.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0b1c26] mx-auto flex items-center justify-center mb-6">
                    <WifiOff className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-medium text-[#0b1c26] mb-4">
                    Offline-Ready Control
                  </h3>
                  <p className="text-gray-600 leading-relaxed" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    All key functions operate without needing a cloud connection—perfect for remote properties or unreliable internet.
                  </p>
                </div>
              </div>
          </div>
        </section>

        {/* Sustainability Technology - matching Benefits design exactly */}
        <section id="sustainability" className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Left Side - Benefits */}
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-black mb-6 lg:mb-8 leading-tight text-center lg:text-left">
                  Environmental Benefits
                </h2>
                
                <div className="space-y-6 lg:space-y-8">
                  <div className="group border-l-2 border-[#0b1c26] pl-4 lg:pl-6">
                    <div className="flex items-start gap-3">
                      <Zap className="w-6 h-6 text-[#0b1c26] mt-1" />
                      <div>
                        <h3 className="text-lg lg:text-xl font-medium text-black mb-2 group-hover:text-gray-800 transition-colors">
                          Energy-Aware Setup
                        </h3>
                        <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                          Spas can be installed with optional smart timers to align energy use with off-peak hours or green energy sources.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group border-l-2 border-[#0b1c26] pl-4 lg:pl-6">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#0b1c26] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 8.172V5L8 4z" />
                      </svg>
                      <div>
                        <h3 className="text-lg lg:text-xl font-medium text-black mb-2 group-hover:text-gray-800 transition-colors">
                          Water-Saving Design
                        </h3>
                        <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                          High-efficiency filters and cover systems reduce water waste and help maintain quality between cleanings.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group border-l-2 border-[#0b1c26] pl-4 lg:pl-6">
                    <div className="flex items-start gap-3">
                      <Leaf className="w-6 h-6 text-[#0b1c26] mt-1" />
                      <div>
                        <h3 className="text-lg lg:text-xl font-medium text-black mb-2 group-hover:text-gray-800 transition-colors">
                          Low Environmental Impact
                        </h3>
                        <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                          Our modular systems are designed with recyclable materials and minimal footprint—eco-conscious and efficient.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group border-l-2 border-[#0b1c26] pl-4 lg:pl-6">
                    <div className="flex items-start gap-3">
                      <Database className="w-6 h-6 text-[#0b1c26] mt-1" />
                      <div>
                        <h3 className="text-lg lg:text-xl font-medium text-black mb-2 group-hover:text-gray-800 transition-colors">
                          Smart Use of Resources
                        </h3>
                        <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                          Pre-set routines help limit overuse of energy, water, and chemicals—no AI hype needed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Environmental Metrics Dashboard */}
              <div className="bg-[#0b1c26] p-6 lg:p-8 rounded-none order-1 lg:order-2">
                <div className="flex items-center gap-2 lg:gap-3 mb-4 lg:mb-6">
                  <Leaf className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-white">Environmental Impact</h3>
                </div>
                
                <div className="space-y-4 lg:space-y-6">
                  {sustainabilityMetrics.map((metric, index) => (
                    <div key={index}>
                      <label className="block text-white text-xs lg:text-sm font-medium mb-2">
                        {metric.metric}
                      </label>
                      <div className="w-full px-3 lg:px-4 py-2 lg:py-3 bg-white text-[#0b1c26] font-medium border-0 text-sm lg:text-base flex justify-between items-center">
                        <span className="font-bold text-lg">{metric.value}</span>
                        <span className="text-sm text-gray-600">{metric.description}</span>
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-3 lg:pt-4 border-t border-white/20">
                    <div className="text-center">
                      <p className="text-white/80 text-xs lg:text-sm mb-1">Environmental Rating</p>
                      <p className="text-xl lg:text-2xl font-bold text-white">A+ Practical Sustainability</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* CTA Section - matching MainPageCTASection design exactly */}
        <section
          className="w-full py-12 lg:py-16 relative overflow-hidden bg-white"
          role="region"
          aria-label="Book a call section"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Responsive Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 lg:gap-12 items-center">
              {/* Content */}
              <div className="lg:col-span-2 text-center lg:text-left">
                <div className="space-y-3 lg:space-y-4">
                  <h2 className="text-[#0b1c26] text-2xl sm:text-3xl lg:text-4xl font-light leading-tight">
                    Experience the Simplicity
                  </h2>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    Book a demo to see how easy it is to own and install your own luxury modular spa—built for real homes, not tech labs.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-end">
                <a
                  href="https://calendly.com/matt-boney/infinite-spa-consult"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 overflow-hidden font-medium text-[#0b1c26] transition-all duration-300 ease-out border-2 border-[#0b1c26] rounded-none shadow-lg hover:scale-105 active:scale-95 bg-transparent hover:bg-[#0b1c26] hover:text-white"
                  aria-label="Book a demo"
                >
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-[#0b1c26] opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative font-bold text-base sm:text-lg tracking-wider">Book Demo</span>
                  <svg className="relative w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
      
      <Footer />
    </div>
  );
};

export default Technology;
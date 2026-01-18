import { Building, Award } from 'lucide-react';
import Footer from '../components/Footer';

const OurStory = () => {
  const developers = [
    {
      name: "Misha Krymov",
      role: "Product",
      image: "/1516866626270.jpg",
      experience: "3x Founder, Award-winning architect, founder of a micro-hotel brand",
      bestBuilds: [
        "Sleepbox micro-hotel installations",
        "Award-winning architectural projects", 
        "Innovative modular hospitality solutions"
      ],
      bestCompanies: [
        "MIT"
      ]
    },
    {
      name: "Matt Boney",
      role: "CEO", 
      image: "/1736995044237.jpg",
      experience: "2X Founder, 12 years in hospitality",
      bestBuilds: [
        "Daypass platform success",
        "Hospitality technology solutions",
        "Revenue generation systems"
      ],
      bestCompanies: [
        "Brown University"
      ]
    },
    {
      name: "George Lowe",
      role: "Marketing",
      image: "/1748689370419.jpeg",
      experience: "Brand strategy and growth marketing leader",
      bestBuilds: [
        "Brand partnerships",
        "Demand generation campaigns"
      ],
      bestCompanies: [
        "Oxford University"
      ]
    },
    {
      name: "David Nartov",
      role: "Tech",
      image: "/1721175526756.jpeg",
      experience: "Technical architecture and platform engineering",
      bestBuilds: [
        "Scalable backend systems",
        "AI-assisted automation"
      ],
      bestCompanies: [
        "Oxford University"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div className="pt-16">

        {/* The Team Section */}
        <section 
          className="w-full py-8 lg:py-16"
          style={{ backgroundColor: '#0b1c26' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight mb-6">
                Meet the Team
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {developers.map((developer, index) => (
                <div key={index} className="bg-white p-8 shadow-lg">
                  <div className="flex flex-col items-center text-center mb-8">
                    <div className="w-32 h-32 bg-gray-200 overflow-hidden mb-6">
                      <img
                        src={developer.image}
                        alt={developer.name}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: 'center top' }}
                      />
                    </div>
                    <h3 className="text-2xl font-medium text-[#0b1c26] mb-2">{developer.name}</h3>
                    <p className="text-gray-600 text-lg mb-4">{developer.role}</p>
                    <p className="text-[#0b1c26] font-medium">{developer.experience}</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium text-[#0b1c26] mb-3 flex items-center">
                        <Building className="w-5 h-5 mr-2" />
                        Best Builds
                      </h4>
                      <ul className="space-y-2">
                        {developer.bestBuilds.map((build, idx) => (
                          <li key={idx} className="text-gray-600 pl-4 border-l-2 border-[#0b1c26]">
                            {build}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-[#0b1c26] mb-3 flex items-center">
                        <Award className="w-5 h-5 mr-2" />
                        Education
                      </h4>
                      <ul className="space-y-2">
                        {developer.bestCompanies.map((company, idx) => (
                          <li key={idx} className="text-gray-600 pl-4 border-l-2 border-[#0b1c26]">
                            {company}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#0b1c26] mb-8">Our Mission</h3>
              <div className="space-y-6 text-xl text-gray-600" style={{fontFamily: 'Montserrat, sans-serif'}}>
                <p>
                  We’re not just upgrading spaces—we’re transforming how wellness is experienced. Infinite Spa exists to help people reset, recharge, and reconnect, wherever they are.
                </p>
                <p>
                  Founded in 2025, Infinite Spa was built on a bold mission: to bring high-quality wellness experiences to everyone, everywhere.
                </p>
                <p>
                  Our team’s roots run deep in hospitality and design. From working closely with hotels to elevate guest experiences, we saw firsthand how limited many properties were in delivering truly elevated wellness offerings. At the same time, our team had experience pioneering modular design innovations that made hospitality spaces more flexible, space-efficient, and scalable. These combined insights revealed a powerful opportunity: to create wellness spaces that are not only premium, but also faster to build, more affordable to operate, and consistently higher in quality.
                </p>
                <p>
                  That vision quickly grew beyond hotels. Today, Infinite Spa is reimagining wellness across multifamily and residential developments as well—bringing resort-level amenities right into people’s everyday lives. Whether it’s a luxury apartment complex, a residential community, or a hotel property, Infinite Spa delivers plug-and-play wellness experiences designed to heal, inspire, and uplift.
                </p>
                <p>
                  Our mission is simple yet powerful: to make wellness universal. Faster to build, smarter to operate, and designed to nurture body, mind, and spirit—Infinite Spa is here to transform the future of wellness.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default OurStory;
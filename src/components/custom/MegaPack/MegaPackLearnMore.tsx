import React from "react";
import Navbar from '../../common/Navbar';
import Footer from './layout/Footer';
import HeroSection from './sections/HeroSection';
import SpecificationsSection from './sections/SpecificationsSection';
import CTASection from './sections/CTASection';

const caseStudyData = [
  {
    title: 'Angleton, Texas',
    description:
      'The Gambit Energy Storage Park is an 81-unit, 100 MW system that provides the grid with renewable energy storage and greater outage protection during severe weather.',
    image:
      'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Megapack_CaseStudy_Texas_D',
  },
  {
    title: 'Soldotna, Alaska',
    description:
      'Homer Electric installed a 37-unit, 46 MW system to increase renewable energy capacity along Alaska’s rural Kenai Peninsula, reducing reliance on gas turbines and helping to prevent outages.',
    image:
      'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Megapack_CaseStudy_Soldotna_D',
  },
  {
    title: 'Victoria, Australia',
    description:
      'The Victoria Big Battery—a 212-unit, 350 MW system—is one of the largest renewable energy storage parks in the world, providing backup protection to Victoria.',
    image:
      'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Megapack_CaseStudy_Australia_D',
  },
];

function SolarPanel() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />

        {/* Text and image section */}
        <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 w-full rounded-lg overflow-hidden shadow-md">
            <img
              src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Megapack_CleanerGrid_D"
              alt="Megapack Grid"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-1/2 w-full">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">A Cleaner Grid</h2>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
              The future of renewable energy relies on large-scale energy storage. Megapack is a powerful battery that
              provides energy storage and support, helping to stabilize the grid and prevent outages. By strengthening our
              sustainable energy infrastructure, we can create a cleaner grid that protects our communities and the
              environment.
            </p>
          </div>
        </section>

        {/* Image text */}
        <section className="relative bg-cover bg-center h-[80vh] text-white" style={{ backgroundImage: "url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Megapack_Outage_D')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Resiliency</h2>
            <p className="max-w-2xl text-lg md:text-xl">
              Megapack stores energy for the grid reliably and safely, eliminating the need for gas peaker plants and helping to avoid outages.
              Each unit can store over <strong>3.9 MWh</strong> of energy—that's enough energy to power an average of <strong>3,600 homes</strong> for one hour.
            </p>
          </div>
        </section>

        {/* Text and video section */}
        <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 w-full">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Easy Installation</h2>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
              Each Megapack unit ships fully assembled and ready to operate, allowing for quick installation timelines and reduced complexity. Systems require minimal maintenance and include up to a 20-year warranty.
            </p>
          </div>

          <div className="md:w-1/2 w-full rounded-lg overflow-hidden shadow-md">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Megapack_Installation_D.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        {/* Image text */}
        <section className="relative bg-cover bg-center h-[80vh] text-white" style={{ backgroundImage: "url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Megapack_FullyIntegrated_D')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Fully Integrated</h2>
            <p className="max-w-2xl text-lg md:text-xl">
              Megapack delivers more power and reliability at a lower cost over its lifetime. Each battery module is paired with its own inverter for improved efficiency and increased safety. With over-the-air software updates, Megapack gets better over time.
            </p>
          </div>
        </section>

        {/* Text and video section */}
        <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 w-full rounded-lg overflow-hidden shadow-md">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Megapack_Safety_D.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="md:w-1/2 w-full">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Safe by Design</h2>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
              Megapack is one of the safest battery storage products of its kind. Units undergo extensive fire testing and include integrated safety systems, specialized monitoring software and 24/7 support.
            </p>
          </div>
        </section>

        {/* Case Studies */}
        <div className="relative w-full bg-black text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Case Studies</h2>
            <p className="mb-12 text-lg sm:text-xl text-gray-300 max-w-3xl">
              Megapack systems are customizable and infinitely scalable, making them suitable for projects of various sizes and locations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudyData.map((item, index) => (
                <div key={index} className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-300 mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <SpecificationsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default SolarPanel;

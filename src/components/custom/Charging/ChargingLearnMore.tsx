import React from "react";
import Navbar from "../../common/Navbar";
import Footer from "./layout/Footer";
import HeroSection from "./sections/HeroSection";
import SpecificationsSection from "./sections/SpecificationsSection";
import CTASection from "./sections/CTASection";
import StorageSection from "./sections/StorageSection";
import DurabilitySection from "./sections/DurabilitySection";

function Charging() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />

        {/* Plug In, Charge and Go Section */}
        <section className="text-center px-4 py-12 sm:py-14 md:py-16 max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Plug In, Charge and Go
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            With plenty of range for both daily drives and road trips, Tesla
            vehicles get you where you want to go. Charging is fast, convenient
            and available anywhere with electricity.
          </p>
          <button className="border border-black px-4 sm:px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition mb-10">
            Help Me Charge
          </button>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Cards */}
            {[
              {
                title: "While You Sleep",
                desc: (
                  <>
                    <a href="#" className="underline">
                      Plug in at home
                    </a>{" "}
                    or at nearby public chargers.
                  </>
                ),
                img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Charging-Plug-In-While-You-Sleep-Desktop.jpg",
              },
              {
                title: "During the Day",
                desc: (
                  <>
                    Charge at a{" "}
                    <a href="#" className="underline">
                      local Supercharger
                    </a>{" "}
                    or at your workplace.
                  </>
                ),
                img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Charging-Plug-In-During-The-Day-Desktop.jpg",
              },
              {
                title: "On Road Trips",
                desc: (
                  <>
                    Recharge at Superchargers on the way or at{" "}
                    <a href="#" className="underline">
                      your destination
                    </a>
                    .
                  </>
                ),
                img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Charging-Plug-In-On-Road-Trips-Desktop.jpg",
              },
            ].map((card, i) => (
              <div key={i}>
                <img src={card.img} alt={card.title} className="rounded-lg mb-4 w-full h-auto" />
                <h2 className="font-semibold text-lg sm:text-xl mb-1">{card.title}</h2>
                <p className="text-sm sm:text-base text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Start Your Day Fully Charged Section */}
        <section className="w-full bg-white py-10 px-4">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <div className="w-full">
              <img
                src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Charging-Start-Your-Day-Fully-Charged-Desktop.jpg"
                alt="Charging at home"
                className="w-full h-auto object-cover rounded"
              />
            </div>

            <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between mt-10 lg:pl-10 gap-6 text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
                  Start Your Day Fully Charged
                </h2>
                <button className="border border-black text-black px-6 py-2 rounded hover:bg-black hover:text-white transition font-medium">
                  Learn More
                </button>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-md">
                Charge at home and wake up to a charged battery every day. Our
                charging options are designed for every property.
              </p>
            </div>
          </div>
        </section>

        <StorageSection />
        <DurabilitySection />

        {/* Trusted Expertise Section */}
        <section className="bg-white w-full py-12 sm:py-14 md:py-16 px-6 sm:px-10 md:px-20">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="md:w-[35%]">
              <p className="text-sm sm:text-base text-gray-700 mb-1">Installation</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">Trusted Expertise</h2>
              <a
                href="#"
                className="inline-block border-2 border-black py-2 px-6 sm:px-8 font-medium hover:bg-black hover:text-white transition"
              >
                Order Now
              </a>
            </div>

            <div className="md:w-[60%] text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                Our in-house team of energy professionals has installed nearly{" "}
                <strong>4.0 GW</strong> of solar across approximately{" "}
                <strong>480,000 roofs</strong>—cumulatively generating over{" "}
                <strong>25.0 TWhs</strong> of clean energy. From design to power
                on, we take care of everything.
              </p>
            </div>
          </div>
        </section>

        {/* Skip the Gas Station Section */}
        <section className="w-full">
          <img
            src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Charging-Skip-The-Gas-Station-Desktop.jpg"
            alt="Skip the gas station"
            className="w-full h-auto object-cover"
          />
        </section>

        <SpecificationsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default Charging;

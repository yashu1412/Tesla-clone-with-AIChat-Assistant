import type React from 'react';

const InteriorSection: React.FC = () => {
  return (
    <section className="relative bg-black text-white py-20">
      <div className="tesla-container max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-medium text-center mb-16">
          Interior of the Future
        </h2>

        {/* First Row: Image Left - Text Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mb-16 px-4">
          <div>
            <img
              src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-X-Interior-Grid-B-DMT.jpg" // Replace with actual path
              alt="Interior Console"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Stay Connected</h3>
            <p className="text-sm text-gray-300">
              Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.
            </p>
          </div>
        </div>

        {/* Second Row: Text Left - Image Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-4">
          <div className="order-2 md:order-1">
            <h3 className="text-xl font-semibold mb-3">Sublime Sound</h3>
            <p className="text-sm text-gray-300">
              A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are.
            </p>
          </div>
          <div className="order-1 md:order-2">
          <video
  src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/MS-Interior-Grid-2-Audio-Desktop.mp4" // Replace with your actual video URL
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-auto object-cover rounded-lg"
/>

          </div>
        </div>
                {/* 3rd Row: Image Left - Text Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mb-16 px-4">
          <div>
            <img
              src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_584,w_1040,c_fit,f_auto,q_auto:best/MS-Interior-Grid-D-Desktop" // Replace with actual path
              alt="Interior Console"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Room for Everything</h3>
            <p className="text-sm text-gray-300">
            With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteriorSection;

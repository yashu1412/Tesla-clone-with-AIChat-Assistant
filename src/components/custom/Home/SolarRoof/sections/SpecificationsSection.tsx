import type React from 'react';
import Section from '../layout/Section';
import Specifications from '../ui/Specifications';

const SpecificationsSection: React.FC = () => {
  return (
    <Section id="specs" className="bg-black text-white py-20 min-h-0">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-medium text-center mb-12">
          Solar Roof Specs
        </h2>

        {/* Image Section */}
        <div className="flex justify-center mb-12">
          <img
            src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/solar-roof-specifications-us-desktop.png" // ← Update the path as per your project structure
            alt="Solar Tile"
            className="w-full max-w-4xl object-contain"
          />
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-1 text-base lg:grid-cols-2 gap-8">
          <Specifications
            title="Tile Specs"
            items={[
              {
                label: 'Dimensions',
                value: '15" x 45"',
              },
              {
                label: 'Solar Glass Tiles',
                value: '72 W',
              },
              {
                label: 'Steel Tiles',
                value: 'Corrosion and weather resistant',
              },
            ]}
          />

          <Specifications
            title="Performance Ratings"
            items={[
              {
                label: 'Tile and Power Warranty',
                value: '25 years',
              },
              {
                label: 'Fire Rating',
                value: 'Class A (highest rating)',
              },
              {
                label: 'Hail Rating',
                value: 'Class 4 (highest rating)',
              },
              {
                label: 'Wind Rating',
                value: 'Class F (highest rating)',
              },
              {
                label: 'Roof Pitch',
                value: '≥ 2:12',
              },
            ]}
          />
        </div>
      </div>
    </Section>
  );
};

export default SpecificationsSection;

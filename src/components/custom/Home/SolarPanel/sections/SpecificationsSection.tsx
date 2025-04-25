import type React from 'react';
import Section from '../layout/Section';
import Specifications from '../ui/Specifications';

const SpecificationsSection: React.FC = () => {
  return (
    <Section id="specs" className="bg-black text-white py-20 min-h-0">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-medium text-center mb-12">
          Solar Panel System Specs
        </h2>

        <div className="grid grid-cols-1 text-base lg:grid-cols-2 gap-8">
          <Specifications
            title="Design"
            items={[
              {
                label: 'Dimensions',
                value: '74.4 x 41.2 x 1.57 (including frame)',
              },
              {
                label: 'Inverter Dimensions',
                value: '26 x 16 x 6',
              },
              {
                label: 'Materials',
                value: 'Black anodized aluminum alloy frame, black backsheet, glass and solar cells',
              },
            ]}
          />

          <Specifications
            title="Features"
            items={[
              {
                label: 'Wattage',
                value: '405 W',
              },
              {
                label: 'Operating Temperature',
                value: '-40F up to +185F',
              },
              {
                label: 'Inverter Power',
                value: '7.6 kW / 5.7 kW / 5 kW / 3.8 kW 98% efficiency',
              },
              {
                label: 'Certification',
                value: 'IEC / UL 61730, CEC Listed, IEC 61215',
              },
            ]}
          />

          <Specifications
            title="Warranty"
            items={[
              {
                label: 'Warranty',
                value: '25-year performance guarantee',
              },
              {
                label: 'Inverter Warranty',
                value: '12.5 years',
              },
            ]}
          />

          <Specifications
            title="Other"
            items={[
              {
                label: "Owner's Manual",
                value: 'Available on Tesla Support',
              },
            ]}
          />
        </div>
      </div>
    </Section>
  );
};

export default SpecificationsSection;

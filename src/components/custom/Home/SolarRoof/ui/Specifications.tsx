import type React from 'react';
import type { SpecificationProps } from '../../types';

const Specifications: React.FC<SpecificationProps> = ({ title, items }) => {
  return (
    <div className="border-t border-neutral-800 py-6">
      <h3 className="text-lg font-medium mb-4">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
        {items.map((item) => (
          <div key={`${title}-${item.label}`} className="mb-2">
            <h4 className="text-xl text-neutral-500 uppercase mb-1">{item.label}</h4>
            <p className="text-base">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specifications;

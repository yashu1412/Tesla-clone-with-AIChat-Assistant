import type React from 'react';
import type { FeatureCardProps } from '../../types';

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center text-center p-4 md:p-6">
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-3xl font-medium mb-2">{title}</h3>
      <p className="text-xl text-neutral-400">{description}</p>
    </div>
  );
};

export default FeatureCard;

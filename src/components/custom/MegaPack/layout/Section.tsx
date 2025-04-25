import type React from 'react';
import type { SectionProps } from '../../types';

const Section: React.FC<SectionProps> = ({ id, className = '', children, background }) => {
  const sectionStyle = background
    ? {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {};

  return (
    <section
      id={id}
      className={`relative min-h-screen flex flex-col items-center justify-center px-4 ${className}`}
      style={sectionStyle}
    >
      {children}
    </section>
  );
};

export default Section;

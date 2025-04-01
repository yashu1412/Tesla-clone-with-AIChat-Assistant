
import React from "react";
import { Link } from "react-router-dom";

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  backgroundVideo?: string;
  textColor?: string;
  buttonType?: "light" | "dark";
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
  logoImage?: string;
  isFirst?: boolean;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  backgroundVideo,
  textColor = "white",
  buttonType = "light",
  primaryButtonText = "Order Now",
  secondaryButtonText = "Learn More",
  primaryButtonLink = "/",
  secondaryButtonLink = "/",
  logoImage,
  isFirst = false,
}) => {
  return (
    <div className={`relative w-full h-screen ${isFirst ? 'pt-16' : ''} snap-center`}>
      {backgroundVideo ? (
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      ) : (
        <img
          src={backgroundImage}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}

      {/* Content Overlay */}
      <div className="absolute top-[15%] w-full text-center">
        {logoImage ? (
          <img src={logoImage} alt={title} className="h-12 mx-auto mb-4" />
        ) : (
          <h1 className={`text-5xl font-bold text-${textColor}`}>{title}</h1>
        )}
        {subtitle && (
          <p className={`text-xl mt-2 text-${textColor}`}>{subtitle}</p>
        )}
      </div>

      {/* Buttons */}
      <div className="absolute bottom-[15%] w-full flex flex-col md:flex-row justify-center items-center gap-4 px-6">
        <Link
          to={primaryButtonLink}
          className={`${
            buttonType === "light"
              ? "bg-[#393c41] text-white hover:bg-[#4d5155]"
              : "bg-white text-black hover:bg-gray-200"
          } px-12 py-2 rounded text-sm font-medium w-full md:w-auto md:min-w-[264px] text-center`}
        >
          {primaryButtonText}
        </Link>
        {secondaryButtonText && (
          <Link
            to={secondaryButtonLink}
            className={`${
              buttonType === "light"
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-[#393c41] text-white hover:bg-[#4d5155]"
            } px-12 py-2 rounded text-sm font-medium w-full md:w-auto md:min-w-[264px] text-center`}
          >
            {secondaryButtonText}
          </Link>
        )}
      </div>

      {/* Down Arrow for first section */}
      {isFirst && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
    </div>
  );
};

export default ProductSection;

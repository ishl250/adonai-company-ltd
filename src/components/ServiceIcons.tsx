import React from 'react';

interface ServiceIconProps {
  className?: string;
  size?: number;
}

/**
 * 1. House Finishing & Plastering Custom Icon
 * Features: Laser-aligned floor tile grid, gypsum false ceiling layer, and precision finishing trowel.
 */
export const HouseFinishingIcon: React.FC<ServiceIconProps> = ({ className = 'w-7 h-7 text-[#76b82a]' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Background subtle geometric shield */}
    <rect x="4" y="4" width="40" height="40" rx="10" fill="currentColor" fillOpacity="0.12" />
    
    {/* Gypsum false ceiling tier */}
    <path
      d="M10 14H38M14 19H34"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    
    {/* Tiled floor laser alignment grid */}
    <rect x="10" y="24" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2.2" />
    <rect x="25" y="24" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2.2" />
    
    {/* Precision finishing trowel */}
    <path
      d="M26 11L33 18L28 23L21 16L26 11Z"
      fill="currentColor"
      fillOpacity="0.3"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <path
      d="M33 18L37 22"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    
    {/* Laser alignment dot */}
    <circle cx="24" cy="30.5" r="2" fill="#76b82a" />
  </svg>
);

/**
 * 2. House Building & Structural Masonry Custom Icon
 * Features: Multi-story reinforced concrete columns, structural roof truss & certified brickwork bond.
 */
export const HouseBuildingIcon: React.FC<ServiceIconProps> = ({ className = 'w-7 h-7 text-[#76b82a]' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Shield container */}
    <rect x="4" y="4" width="40" height="40" rx="10" fill="currentColor" fillOpacity="0.12" />
    
    {/* Engineered Roof Gable */}
    <path
      d="M8 22L24 8L40 22"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    
    {/* Structural Columns & Walls */}
    <path
      d="M14 22V40M34 22V40"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    
    {/* Brickwork bond lines */}
    <path
      d="M14 28H34M14 34H34M24 22V28M19 28V34M29 28V34M24 34V40"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    
    {/* Foundation base footing */}
    <path
      d="M8 40H40"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * 3. House Painting & Designing Custom Icon
 * Features: Precision paint roller with flowing coating streak and decorative color palette drops.
 */
export const HousePaintingIcon: React.FC<ServiceIconProps> = ({ className = 'w-7 h-7 text-[#76b82a]' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Shield container */}
    <rect x="4" y="4" width="40" height="40" rx="10" fill="currentColor" fillOpacity="0.12" />
    
    {/* Paint Roller Cylinder */}
    <rect
      x="12"
      y="10"
      width="22"
      height="10"
      rx="3"
      fill="currentColor"
      fillOpacity="0.3"
      stroke="currentColor"
      strokeWidth="2.4"
    />
    
    {/* Roller Handle Frame */}
    <path
      d="M34 15H38V24H25V33"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    
    {/* Wooden Grip Handle */}
    <rect x="22" y="33" width="6" height="9" rx="2" fill="currentColor" />
    
    {/* Fresh paint drip / color flow */}
    <path
      d="M14 20V27C14 28.5 15.5 29.5 17 29.5C18.5 29.5 20 28.5 20 27V20"
      fill="currentColor"
      fillOpacity="0.25"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="17" cy="34" r="1.5" fill="currentColor" />
    
    {/* Sparkle finish */}
    <path
      d="M10 12L12 8L14 12L18 14L14 16L12 20L10 16L6 14L10 12Z"
      fill="currentColor"
      opacity="0.8"
    />
  </svg>
);

/**
 * 4. Interior & Exterior Architectural Design Custom Icon
 * Features: Isometric 3D floor layout cube, spatial coordinate axis & architectural compass rays.
 */
export const ArchitecturalDesignIcon: React.FC<ServiceIconProps> = ({ className = 'w-7 h-7 text-[#76b82a]' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Shield container */}
    <rect x="4" y="4" width="40" height="40" rx="10" fill="currentColor" fillOpacity="0.12" />
    
    {/* 3D Isometric Room Projection */}
    {/* Top plane */}
    <path
      d="M24 10L37 17.5L24 25L11 17.5L24 10Z"
      fill="currentColor"
      fillOpacity="0.2"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinejoin="round"
    />
    
    {/* Left wall */}
    <path
      d="M11 17.5V32.5L24 40V25L11 17.5Z"
      fill="currentColor"
      fillOpacity="0.1"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinejoin="round"
    />
    
    {/* Right wall */}
    <path
      d="M37 17.5V32.5L24 40V25L37 17.5Z"
      fill="currentColor"
      fillOpacity="0.3"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinejoin="round"
    />
    
    {/* Interior drafting grid line */}
    <path
      d="M24 17.5L30.5 21.25M17.5 21.25L24 25"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeDasharray="2 2"
    />
    
    {/* Lighting focal point */}
    <circle cx="24" cy="17.5" r="2" fill="currentColor" />
  </svg>
);

/**
 * 5. House Renovation & Modernization Custom Icon
 * Features: Circular modernization renewal arrow with structural restoration hammer & transformation sparkles.
 */
export const HouseRenovationIcon: React.FC<ServiceIconProps> = ({ className = 'w-7 h-7 text-[#76b82a]' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Shield container */}
    <rect x="4" y="4" width="40" height="40" rx="10" fill="currentColor" fillOpacity="0.12" />
    
    {/* Circular transformation arrows */}
    <path
      d="M11 24C11 16.8203 16.8203 11 24 11C28.5 11 32.4 13.3 34.8 16.8M37 24C37 31.1797 31.1797 37 24 37C19.5 37 15.6 34.7 13.2 31.2"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M36 12V17H31M12 36V31H17"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    
    {/* Center renovation hammer */}
    <path
      d="M20 28L28 20"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
    />
    <path
      d="M25 17L30 22L33 19L28 14L25 17Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    
    {/* Modernization spark */}
    <circle cx="24" cy="24" r="2" fill="currentColor" />
  </svg>
);

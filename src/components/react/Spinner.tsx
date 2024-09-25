// File: Spinner.tsx
// A reusable spinner component that provides a customizable loading indicator 
// using SVG and Tailwind CSS animation.

import React from 'react';

const Spinner = () => {
  return (
    <div className="animate-spin">
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgb(66, 133, 244)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgb(255, 255, 255)', stopOpacity: 0 }} />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" stroke="url(#grad1)" strokeWidth="10" fill="none" />
      </svg>
    </div>
  )
}

export default Spinner;

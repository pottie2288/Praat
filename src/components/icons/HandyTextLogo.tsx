import React from "react";

const HandyTextLogo = ({
  width,
  height,
  className,
}: {
  width?: number;
  height?: number;
  className?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 930 328"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>
        {`
          .praat-text {
            font-family: ui-rounded, 'SF Pro Rounded', 'Nunito', 'Baloo 2', system-ui, sans-serif;
            font-weight: 900;
            font-size: 260px;
            dominant-baseline: central;
            text-anchor: middle;
          }
        `}
      </style>
      {/* Outer thick stroke */}
      <text x="465" y="164" className="praat-text logo-stroke" strokeWidth="40" strokeLinejoin="round" fill="none">
        praat
      </text>
      {/* Inner fill and thinner stroke */}
      <text x="465" y="164" className="praat-text logo-primary" strokeWidth="12" strokeLinejoin="round">
        praat
      </text>
    </svg>
  );
};

export default HandyTextLogo;

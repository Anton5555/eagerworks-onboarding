import React from "react";

interface IconProps {
  width?: number;
}

const FiltersIcon: React.FC<IconProps> = ({ width }) => {
  return (
    <svg
      width={width ?? "28"}
      height={width ?? "28"}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="14" cy="14" r="13.5" stroke="url(#paint0_linear_250_3599)" />
      <defs>
        <linearGradient
          id="paint0_linear_250_3599"
          x1="-0.857143"
          y1="29.6333"
          x2="35.2636"
          y2="-4.05886"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0F58B7" />
          <stop offset="1" stopColor="#62D9FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default FiltersIcon;

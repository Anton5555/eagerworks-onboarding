import React from "react";

interface IconProps {
  width?: number;
}

const StarIcon: React.FC<IconProps> = ({ width }) => (
  <svg
    width={width ?? "12"}
    height={width ?? "13"}
    viewBox="0 0 12 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.87118 9.88766L9.49957 12.0776L8.5367 7.95017L11.7424 5.1731L7.52098 4.80908L5.87118 0.922363L4.22138 4.80908L0 5.1731L3.19979 7.95017L2.24279 12.0776L5.87118 9.88766Z"
      fill="url(#paint0_linear_7416_1108)"
    />

    <defs>
      <linearGradient
        id="paint0_linear_7416_1108"
        x1="-0.35946"
        y1="12.7283"
        x2="14.0635"
        y2="-1.43303"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0F58B7" />

        <stop offset="1" stopColor="#62D9FF" />
      </linearGradient>
    </defs>
  </svg>
);

export default StarIcon;

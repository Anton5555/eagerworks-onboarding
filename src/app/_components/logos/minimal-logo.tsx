import React from "react";

interface MinimalLogoProps {
  width?: number;
  height?: number;
}

const MinimalLogo: React.FC<MinimalLogoProps> = ({ width, height }) => {
  return (
    <svg
      width={width ?? "44"}
      height={height ?? "65"}
      viewBox="0 0 44 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.6656 40.3767C36.0632 40.3767 43.6814 32.7585 43.6814 23.3609C43.6814 13.9634 36.0632 6.34521 26.6656 6.34521C17.2681 6.34521 9.6499 13.9634 9.6499 23.3609C9.6499 32.7585 17.2681 40.3767 26.6656 40.3767Z"
        fill="url(#paint0_linear_2_744)"
      />
      <path
        d="M21.9695 0C9.8018 0 0 10.5735 0 23.6992C0 24.0638 0 24.4284 0 24.9146V64.2918C9.01315 64.2918 16.3363 56.392 16.3363 46.6693V46.5477V24.7931C16.3363 16.5287 22.5329 9.8443 30.194 9.8443C37.2919 9.8443 42.7616 15.9227 43.6629 22.4856C42.8743 10.2106 33.574 0 21.9695 0Z"
        fill="url(#paint1_linear_2_744)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2_744"
          x1="9.6499"
          y1="1.0071"
          x2="28.5271"
          y2="45.5333"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0198252" stopColor="#0549B3" />
          <stop offset="1" stopColor="#69EDDC" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2_744"
          x1="5.05965"
          y1="71.2039"
          x2="32.4953"
          y2="-14.3476"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="blue" />
          <stop offset="1" stopColor="#69ECDC" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default MinimalLogo;

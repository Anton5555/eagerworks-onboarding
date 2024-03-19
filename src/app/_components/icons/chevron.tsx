import React from "react";

interface IconProps {
  width?: number;
  direction: "up" | "down";
}

const ChevronIcon: React.FC<IconProps> = ({ width, direction }) => (
  <svg
    width={width ?? "24"}
    height={width ?? "24"}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d={`${direction === "up" ? "M18 15L12 9L6 15" : "M6 9L12 15L18 9"}`}
      stroke="#343A3F"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ChevronIcon;

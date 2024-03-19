import React from "react";

interface IconProps {
  width?: number;
}

const SearchIcon: React.FC<IconProps> = ({ width }) => {
  return (
    <svg
      width={width ?? "28"}
      height={width ?? "28"}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15" cy="15" r="15" fill="#9BC7FF" />
      <path
        d="M14.0667 20.1333C17.4172 20.1333 20.1333 17.4172 20.1333 14.0667C20.1333 10.7161 17.4172 8 14.0667 8C10.7161 8 8 10.7161 8 14.0667C8 17.4172 10.7161 20.1333 14.0667 20.1333Z"
        fill="#9BC7FF"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.0002 22L19.2002 19.2"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;

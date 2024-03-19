import React from "react";

interface IconProps {
  width?: number;
}

const GiftIcon: React.FC<IconProps> = ({ width }) => (
  <svg
    width={width ?? "14"}
    height={width ?? "14"}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_7326_856)">
      <path
        d="M11.6666 7V12.8333H2.33325V7"
        stroke="#444343"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M12.8334 4.08337H1.16675V7.00004H12.8334V4.08337Z"
        stroke="#444343"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M7 12.8334V4.08337"
        stroke="#444343"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M7 4.08329H9.625C10.0118 4.08329 10.3827 3.92965 10.6562 3.65616C10.9297 3.38267 11.0833 3.01173 11.0833 2.62496C11.0833 2.23819 10.9297 1.86725 10.6562 1.59376C10.3827 1.32027 10.0118 1.16663 9.625 1.16663C7.58333 1.16663 7 4.08329 7 4.08329Z"
        stroke="#444343"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M7.00008 4.08329H4.37508C3.98831 4.08329 3.61737 3.92965 3.34388 3.65616C3.07039 3.38267 2.91675 3.01173 2.91675 2.62496C2.91675 2.23819 3.07039 1.86725 3.34388 1.59376C3.61737 1.32027 3.98831 1.16663 4.37508 1.16663C6.41675 1.16663 7.00008 4.08329 7.00008 4.08329Z"
        stroke="#444343"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_7326_856">
        <rect width="14" height="14" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default GiftIcon;
